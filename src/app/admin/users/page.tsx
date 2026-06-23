'use client';

import React from 'react';
import styles from '../AdminDashboard.module.css';
import { Search, Filter } from 'lucide-react';

export default function AdminUsersPage() {
  return (
    <div>
      <div className={styles.pageHeader}>
        <h1>ユーザー・KYC管理</h1>
        <p>プラットフォーム上のユーザー一覧と、本人確認（KYC）の審査を行います。</p>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader} style={{marginBottom: 0}}>
          <div style={{display: 'flex', gap: '12px'}}>
            <button className={styles.actionButton} style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <Filter size={14} />
              フィルタ: すべて
            </button>
            <div className={styles.headerSearch} style={{backgroundColor: 'white', border: '1px solid #e2e8f0', width: '250px'}}>
              <Search size={14} color="#94a3b8" />
              <input type="text" placeholder="名前・メールで検索" />
            </div>
          </div>
          <button className={styles.actionButton} style={{backgroundColor: '#3b82f6', color: 'white', border: 'none'}}>ユーザーを追加</button>
        </div>

        <div style={{marginTop: '24px'}}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ユーザーID</th>
                <th>名前</th>
                <th>ロール</th>
                <th>登録日</th>
                <th>KYCステータス</th>
                <th>アクション</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>USR-9921</td>
                <td>Kenji Sato<br/><span style={{fontSize: '12px', color: '#64748b'}}>kenji@example.com</span></td>
                <td><span className={`${styles.statusBadge} ${styles.active}`}>Host</span></td>
                <td>2026/05/23</td>
                <td><span className={`${styles.statusBadge} ${styles.pending}`}>審査待ち</span></td>
                <td><button className={styles.actionButton}>詳細 / 審査</button></td>
              </tr>
              <tr>
                <td>USR-9920</td>
                <td>Mika Suzuki<br/><span style={{fontSize: '12px', color: '#64748b'}}>mika@example.com</span></td>
                <td><span className={`${styles.statusBadge}`} style={{backgroundColor: '#f1f5f9', color: '#475569'}}>Owner</span></td>
                <td>2026/05/23</td>
                <td><span className={`${styles.statusBadge} ${styles.pending}`}>審査待ち</span></td>
                <td><button className={styles.actionButton}>詳細 / 審査</button></td>
              </tr>
              <tr>
                <td>USR-9842</td>
                <td>Yuki Honda<br/><span style={{fontSize: '12px', color: '#64748b'}}>yuki@example.com</span></td>
                <td><span className={`${styles.statusBadge} ${styles.active}`}>Host</span></td>
                <td>2026/05/20</td>
                <td><span className={`${styles.statusBadge} ${styles.approved}`}>承認済</span></td>
                <td><button className={styles.actionButton}>詳細</button></td>
              </tr>
              <tr>
                <td>USR-9715</td>
                <td>Hiroshi Tanaka<br/><span style={{fontSize: '12px', color: '#64748b'}}>hiroshi@example.com</span></td>
                <td><span className={`${styles.statusBadge}`} style={{backgroundColor: '#f1f5f9', color: '#475569'}}>Owner</span></td>
                <td>2026/05/18</td>
                <td><span className={`${styles.statusBadge} ${styles.approved}`}>承認済</span></td>
                <td><button className={styles.actionButton}>詳細</button></td>
              </tr>
              <tr>
                <td>USR-9602</td>
                <td>Bad User<br/><span style={{fontSize: '12px', color: '#64748b'}}>spam@example.com</span></td>
                <td><span className={`${styles.statusBadge}`} style={{backgroundColor: '#f1f5f9', color: '#475569'}}>Owner</span></td>
                <td>2026/05/10</td>
                <td><span className={`${styles.statusBadge}`} style={{backgroundColor: '#fee2e2', color: '#991b1b'}}>却下</span></td>
                <td><button className={styles.actionButton}>詳細</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
