'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  PlusCircle,
  ClipboardList,
  Star,
  TrendingUp,
  Calendar,
  ChevronRight,
} from 'lucide-react';
import styles from './DashboardPage.module.css';

const mockUpcomingBooking = {
  id: 'bk001',
  hostName: '山田 花子',
  location: '東京都渋谷区',
  petName: 'ハチ',
  dateFrom: '2026年7月10日',
  dateTo: '2026年7月13日',
  status: '確定済み',
  image: '🏠',
};

const Dashboard = () => {
  const [role, setRole] = useState<'owner' | 'host'>('owner');

  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <h1 className={styles.title}>マイページ</h1>
        <div className={styles.roleToggle}>
          <button
            className={role === 'owner' ? styles.roleActive : styles.roleBtn}
            onClick={() => setRole('owner')}
          >
            🐾 ペットオーナー
          </button>
          <button
            className={role === 'host' ? styles.roleActive : styles.roleBtn}
            onClick={() => setRole('host')}
          >
            🏠 ホスト
          </button>
        </div>
      </div>

      {role === 'owner' ? (
        <>
          {/* Quick stats */}
          <div className={styles.statsRow}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>📋</div>
              <div>
                <p className={styles.statLabel}>今後の予約</p>
                <h3 className={styles.statValue}>1件</h3>
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>⭐</div>
              <div>
                <p className={styles.statLabel}>過去の利用</p>
                <h3 className={styles.statValue}>3回</h3>
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>🐶</div>
              <div>
                <p className={styles.statLabel}>登録ペット</p>
                <h3 className={styles.statValue}>1匹</h3>
              </div>
            </div>
          </div>

          {/* Upcoming booking */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2>今後の予約</h2>
              <Link href="/dashboard/bookings" className={styles.viewAll}>
                すべて見る <ChevronRight size={16} />
              </Link>
            </div>
            <div className={styles.bookingCard}>
              <div className={styles.bookingEmoji}>{mockUpcomingBooking.image}</div>
              <div className={styles.bookingInfo}>
                <div className={styles.bookingMeta}>
                  <span className={styles.statusBadge}>{mockUpcomingBooking.status}</span>
                </div>
                <h3>{mockUpcomingBooking.hostName} さんのお宅</h3>
                <p>{mockUpcomingBooking.location}</p>
                <p className={styles.dateRange}>
                  {mockUpcomingBooking.dateFrom} 〜 {mockUpcomingBooking.dateTo}
                </p>
                <p className={styles.petTag}>ペット：{mockUpcomingBooking.petName}</p>
              </div>
              <Link href="/dashboard/bookings" className={styles.detailBtn}>
                詳細 <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          {/* My pets */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2>マイペット</h2>
              <button className={styles.addBtn}>
                <PlusCircle size={16} />
                ペットを追加
              </button>
            </div>
            <div className={styles.petGrid}>
              <div className={styles.petCard}>
                <div className={styles.petEmoji}>🐕</div>
                <h4>ハチ</h4>
                <p>柴犬・オス・3歳</p>
              </div>
              <div className={`${styles.petCard} ${styles.petCardAdd}`}>
                <PlusCircle size={32} />
                <p>追加する</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Host stats */}
          <div className={styles.statsRow}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>💰</div>
              <div>
                <p className={styles.statLabel}>今月の収益</p>
                <h3 className={styles.statValue}>¥24,500</h3>
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>📋</div>
              <div>
                <p className={styles.statLabel}>承認待ちリクエスト</p>
                <h3 className={styles.statValue}>2件</h3>
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>⭐</div>
              <div>
                <p className={styles.statLabel}>平均評価</p>
                <h3 className={styles.statValue}>4.9</h3>
              </div>
            </div>
          </div>

          {/* Pending requests alert */}
          <div className={styles.alertCard}>
            <div className={styles.alertIcon}>🔔</div>
            <div>
              <h3>承認待ちのリクエストがあります</h3>
              <p>2件のリクエストが回答を待っています。早めに対応しましょう。</p>
            </div>
            <Link href="/dashboard/host/bookings" className={styles.alertAction}>
              確認する
            </Link>
          </div>

          {/* Quick actions */}
          <div className={styles.section}>
            <h2>クイックアクション</h2>
            <div className={styles.quickActions}>
              <Link href="/dashboard/host/bookings" className={styles.quickAction}>
                <ClipboardList size={28} />
                <span>予約管理</span>
              </Link>
              <Link href="/dashboard/host/calendar" className={styles.quickAction}>
                <Calendar size={28} />
                <span>カレンダー</span>
              </Link>
              <Link href="/dashboard/host/bookings" className={styles.quickAction}>
                <TrendingUp size={28} />
                <span>収益レポート</span>
              </Link>
              <Link href="/dashboard/host/bookings" className={styles.quickAction}>
                <Star size={28} />
                <span>レビュー</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
