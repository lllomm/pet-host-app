'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, Star } from 'lucide-react';
import styles from './ListingCard.module.css';

interface ListingCardProps {
  id: string;
  image: string;
  location: string;
  hostName: string;
  rating: number;
  price: number;
  petTypes: string[];
  variant?: 'default' | 'small';
  availableToday?: boolean;
}

const ListingCard: React.FC<ListingCardProps> = ({
  id,
  image,
  location,
  hostName,
  rating,
  price,
  petTypes,
  variant = 'default',
  availableToday = false
}) => {
  const isSmall = variant === 'small';

  return (
    <div className={`${styles.card} ${isSmall ? styles.small : ''}`}>
      <div className={styles.imageWrapper}>
        <Link href={`/rooms/${id}`} className={styles.imageLink}>
          <img src={image} alt={hostName} className={styles.image} />
        </Link>
        {availableToday && (
          <div className={styles.badge}>
            本日OK
          </div>
        )}
        <button className={styles.wishlist}>
          <Heart size={20} color="white" fill="rgba(0,0,0,0.3)" />
        </button>
      </div>
      
      <Link href={`/rooms/${id}`} className={styles.infoLink}>
        <div className={styles.info}>
          <div className={styles.header}>
            <h3 className={styles.location}>{location}</h3>
            <div className={styles.rating}>
              <Star size={14} fill="currentColor" />
              <span>{rating}</span>
            </div>
          </div>
          
          <p className={styles.host}>ホスト：{hostName}</p>
          <p className={styles.pets}>{petTypes.join(', ')}</p>
          
          <div className={styles.footer}>
            <span className={styles.price}>¥{price.toLocaleString()}</span>
            <span className={styles.unit}>/ 泊</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListingCard;
