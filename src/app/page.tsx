'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ListingCard from '@/components/ui/ListingCard';
import FilterBar from '@/components/ui/FilterBar';
import styles from './page.module.css';

const mockListings = [
  {
    id: '1',
    image: '/home1.png',
    images: ['/home1.png', '/host_with_dog_1_1778231939859.png', '/home2.png', '/home3.png'],
    location: '東京都世田谷区',
    hostName: 'Yuki',
    rating: 4.98,
    price: 5500,
    petTypes: ['中型犬', '小型犬'],
    availableToday: true
  },
  {
    id: '2',
    image: '/home2.png',
    images: ['/home2.png', '/host_with_dog_2_1778232173878.png', '/home1.png', '/home3.png'],
    location: '東京都港区',
    hostName: 'Kenji',
    rating: 4.95,
    price: 8200,
    petTypes: ['小型犬'],
    availableToday: false
  },
  {
    id: '3',
    image: '/home3.png',
    images: ['/home3.png', '/host_with_dog_3_1778232223603.png', '/home1.png', '/home2.png'],
    location: '神奈川県鎌倉市',
    hostName: 'Mami',
    rating: 5.0,
    price: 4800,
    petTypes: ['大型犬', '中型犬'],
    availableToday: true
  },
  {
    id: '4',
    image: '/home1.png',
    images: ['/home1.png', '/host_with_dog_4_1778232256293.png', '/home2.png', '/home3.png'],
    location: '東京都渋谷区',
    hostName: 'Hiroki',
    rating: 4.88,
    price: 6000,
    petTypes: ['小型犬'],
    availableToday: true
  },
  {
    id: '5',
    image: '/home2.png',
    images: ['/home2.png', '/home1.png', '/home3.png'],
    location: '東京都練馬区',
    hostName: 'Saki',
    rating: 4.92,
    price: 4500,
    petTypes: ['中型犬'],
    availableToday: false
  },
  {
    id: '6',
    image: '/home3.png',
    images: ['/home3.png', '/home1.png', '/home2.png'],
    location: '神奈川県横浜市',
    hostName: 'Takuya',
    rating: 4.97,
    price: 5200,
    petTypes: ['大型犬'],
    availableToday: false
  },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const availableTodayListings = mockListings.filter(l => l.availableToday);
  
  const filteredListings = mockListings.filter(listing => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'today') return listing.availableToday;
    if (activeFilter === 'small') return listing.petTypes.includes('小型犬');
    if (activeFilter === 'medium') return listing.petTypes.includes('中型犬');
    if (activeFilter === 'large') return listing.petTypes.includes('大型犬');
    if (activeFilter === 'verified') return true;
    return true;
  });

  return (
    <main className={styles.main}>
      <Header />
      <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      
      {activeFilter === 'all' && (
        <section className={`container ${styles.todaySection}`}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>本日受入れ可</h2>
            <p className={styles.sectionSubtitle}>今すぐ預けられる安心のホストたち</p>
          </div>
          <div className={styles.horizontalScroll}>
            {availableTodayListings.map((listing) => (
              <div key={listing.id} className={styles.scrollItem}>
                <ListingCard {...listing} variant="small" availableToday={true} />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className={`container ${styles.listingsSection}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            {activeFilter === 'all' ? 'すべてのホスト' : '検索結果'}
          </h2>
        </div>
        <div className={styles.grid}>
          {filteredListings.map((listing) => (
            <ListingCard key={listing.id} {...listing} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
