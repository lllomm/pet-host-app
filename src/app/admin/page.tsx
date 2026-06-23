'use client';

import React from 'react';
import { 
  TrendingUp, 
  Users, 
  CalendarCheck, 
  CreditCard,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import styles from './AdminDashboard.module.css';
import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div>
      <div className={styles.pageHeader}>
        <h1>ダッシュボード</h1>
        <p>PawBnBの全体的な利用状況とKPIのサマリーです。</p>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.statTitle}>流通総額 (GMV)</span>
            <div className={`${styles.statIcon} ${styles.green}`}>
              <CreditCard size={20} />
            </div>
          </div>
          <div className={styles.statValue}>¥4,285,000</div>
          <div className={styles.statChange}>
            <ArrowUpRight size={16} />
            <span>12.5% 前月比</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.statTitle}>新規登録ユーザー</span>
            <div className={`${styles.statIcon} ${styles.blue}`}>
              <Users size={20} />
            </div>
          </div>
          <div className={styles.statValue}>284人</div>
          <div className={styles.statChange}>
            <ArrowUpRight size={16} />
            <span>8.2% 前月比</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.statTitle}>成約済み予約数</span>
            <div className={`${styles.statIcon} ${styles.purple}`}>
              <CalendarCheck size={20} />
            </div>
          </div>
          <div className={styles.statValue}>156件</div>
          <div className={styles.statChange}>
            <ArrowUpRight size={16} />
            <span>24.1% 前月比</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.statTitle}>成約率 (Matching Rate)</span>
            <div className={`${styles.statIcon} ${styles.amber}`}>
              <TrendingUp size={20} />
            </div>
          </div>
          <div className={styles.statValue}>68.2%</div>
          <div className={`${styles.statChange} ${styles.negative}`}>
            <ArrowDownRight size={16} />
            <span>-2.4% 前月比</span>
          </div>
        </div>
      </div>

      <div className={styles.recentSection}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>直近のKYC審査待ち</h2>
            <Link href="/admin/users" className={styles.viewAll}>すべて見る</Link>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ユーザー名</th>
                <th>登録日時</th>
                <th>提出書類</th>
                <th>アクション</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Kenji Sato</td>
                <td>2026/05/23 10:45</td>
                <td>運転免許証</td>
                <td><button className={styles.actionButton}>審査する</button></td>
              </tr>
              <tr>
                <td>Mika Suzuki</td>
                <td>2026/05/23 09:12</td>
                <td>マイナンバーカード</td>
                <td><button className={styles.actionButton}>審査する</button></td>
              </tr>
              <tr>
                <td>Takuya Tanaka</td>
                <td>2026/05/22 18:30</td>
                <td>パスポート</td>
                <td><button className={styles.actionButton}>審査する</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>要注意の予約</h2>
            <Link href="/admin/bookings" className={styles.viewAll}>すべて見る</Link>
          </div>
          <div style={{ padding: '20px 0', textAlign: 'center', color: '#64748b', fontSize: '14px' }}>
            <p>現在、介入が必要なトラブル報告はありません。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
