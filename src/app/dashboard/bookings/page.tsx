'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MessageSquare, Star, X, ChevronRight, Search } from 'lucide-react';
import styles from './Bookings.module.css';

type BookingStatus = 'upcoming' | 'past' | 'cancelled';

const mockBookings = {
  upcoming: [
    {
      id: 'bk001',
      hostName: '山田 花子',
      location: '東京都渋谷区',
      rating: 4.95,
      reviewCount: 42,
      petName: 'ハチ',
      dateFrom: '2026年7月10日 (金)',
      dateTo: '2026年7月13日 (月)',
      nights: 3,
      totalPrice: 18900,
      status: '確定済み',
      statusColor: 'green',
      image: '🏠',
      hostAvatar: '🧑',
      reviewed: false,
    },
  ],
  past: [
    {
      id: 'bk002',
      hostName: '田中 次郎',
      location: '神奈川県横浜市',
      rating: 5.0,
      reviewCount: 18,
      petName: 'ハチ',
      dateFrom: '2026年5月3日 (土)',
      dateTo: '2026年5月5日 (月)',
      nights: 2,
      totalPrice: 12600,
      status: '完了',
      statusColor: 'gray',
      image: '🏡',
      hostAvatar: '👨',
      reviewed: true,
    },
    {
      id: 'bk003',
      hostName: '鈴木 美咲',
      location: '東京都世田谷区',
      rating: 4.8,
      reviewCount: 67,
      petName: 'ハチ',
      dateFrom: '2026年3月20日 (金)',
      dateTo: '2026年3月22日 (日)',
      nights: 2,
      totalPrice: 11400,
      status: '完了',
      statusColor: 'gray',
      image: '🏘️',
      hostAvatar: '👩',
      reviewed: false,
    },
  ],
  cancelled: [
    {
      id: 'bk004',
      hostName: '高橋 浩二',
      location: '東京都品川区',
      rating: 4.7,
      reviewCount: 31,
      petName: 'ハチ',
      dateFrom: '2026年2月14日 (土)',
      dateTo: '2026年2月15日 (日)',
      nights: 1,
      totalPrice: 6300,
      status: 'キャンセル済み',
      statusColor: 'red',
      image: '🏠',
      hostAvatar: '🧔',
      reviewed: false,
    },
  ],
};

const statusColorMap: Record<string, string> = {
  green: styles.statusGreen,
  gray: styles.statusGray,
  red: styles.statusRed,
};

export default function OwnerBookingsPage() {
  const [activeTab, setActiveTab] = useState<BookingStatus>('upcoming');
  const bookings = mockBookings[activeTab];

  return (
    <div className={styles.wrapper}>
      <div className={styles.pageHeader}>
        <h1 className={styles.title}>予約管理</h1>
        <p className={styles.subtitle}>ペットの預かり予約の確認・管理</p>
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        <button
          className={activeTab === 'upcoming' ? styles.tabActive : styles.tab}
          onClick={() => setActiveTab('upcoming')}
        >
          今後の予約
          <span className={styles.tabCount}>{mockBookings.upcoming.length}</span>
        </button>
        <button
          className={activeTab === 'past' ? styles.tabActive : styles.tab}
          onClick={() => setActiveTab('past')}
        >
          過去の予約
          <span className={styles.tabCount}>{mockBookings.past.length}</span>
        </button>
        <button
          className={activeTab === 'cancelled' ? styles.tabActive : styles.tab}
          onClick={() => setActiveTab('cancelled')}
        >
          キャンセル済み
          <span className={styles.tabCount}>{mockBookings.cancelled.length}</span>
        </button>
      </div>

      {/* Booking list */}
      <div className={styles.list}>
        {bookings.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>📋</div>
            <h3>予約がありません</h3>
            <p>ホストを探して予約を始めましょう</p>
            <Link href="/rooms" className={styles.primaryBtn}>
              ホストを探す
            </Link>
          </div>
        ) : (
          bookings.map((booking) => (
            <div key={booking.id} className={styles.bookingCard}>
              {/* Left: image */}
              <div className={styles.cardImage}>{booking.image}</div>

              {/* Center: info */}
              <div className={styles.cardInfo}>
                <div className={styles.cardTop}>
                  <span className={`${styles.statusBadge} ${statusColorMap[booking.statusColor]}`}>
                    {booking.status}
                  </span>
                  {booking.reviewCount && (
                    <span className={styles.ratingBadge}>
                      ⭐ {booking.rating} ({booking.reviewCount}件)
                    </span>
                  )}
                </div>
                <h3 className={styles.hostName}>{booking.hostAvatar} {booking.hostName} さんのお宅</h3>
                <p className={styles.location}>{booking.location}</p>
                <div className={styles.details}>
                  <span>🐾 {booking.petName}</span>
                  <span>📅 {booking.dateFrom} 〜 {booking.dateTo}</span>
                  <span>🌙 {booking.nights}泊</span>
                </div>
                <p className={styles.price}>合計 ¥{booking.totalPrice.toLocaleString()}</p>
              </div>

              {/* Right: actions */}
              <div className={styles.cardActions}>
                {activeTab === 'upcoming' && (
                  <>
                    <button className={styles.actionBtn}>
                      <MessageSquare size={16} />
                      ホストに連絡
                    </button>
                    <button className={`${styles.actionBtn} ${styles.actionBtnDanger}`}>
                      <X size={16} />
                      キャンセル
                    </button>
                  </>
                )}
                {activeTab === 'past' && !booking.reviewed && (
                  <button className={`${styles.actionBtn} ${styles.actionBtnStar}`}>
                    <Star size={16} />
                    レビューを書く
                  </button>
                )}
                {activeTab === 'past' && booking.reviewed && (
                  <span className={styles.reviewedTag}>✓ レビュー済み</span>
                )}
                <Link href={`/rooms/r001`} className={styles.actionLink}>
                  詳細 <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          ))
        )}
      </div>

      {/* CTA */}
      {activeTab === 'upcoming' && (
        <div className={styles.cta}>
          <Search size={20} />
          <span>新しいホストを探したい場合は</span>
          <Link href="/rooms" className={styles.ctaLink}>ホスト一覧へ</Link>
        </div>
      )}
    </div>
  );
}
