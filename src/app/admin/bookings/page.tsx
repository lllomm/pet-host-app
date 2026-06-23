'use client';

import React from 'react';
import styles from '../AdminDashboard.module.css';
import { Search, Filter, AlertTriangle } from 'lucide-react';

export default function AdminBookingsPage() {
  return (
    <div>
      <div className={styles.pageHeader}>
        <h1>予約・トラブル管理</h1>
        <p>予約ステータスの管理、決済状況の確認、トラブル発生時の対応を行います。</p>
      </div>

      <div className={styles.statsGrid} style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
        <div className={styles.statCard} style={{backgroundColor: '#fffbeb', borderColor: '#fde68a'}}>
          <div className={styles.statHeader}>
            <span className={styles.statTitle} style={{color: '#b45309'}}>要対応のトラブル報告</span>
            <div className={`${styles.statIcon} ${styles.amber}`}>
              <AlertTriangle size={20} />
            </div>
          </div>
          <div className={styles.statValue}>1件</div>
          <div className={styles.statChange} style={{color: '#b45309'}}>優先対応が必要です</div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader} style={{marginBottom: 0}}>
          <div style={{display: 'flex', gap: '12px'}}>
            <button className={styles.actionButton} style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <Filter size={14} />
              ステータス: すべて
            </button>
            <div className={styles.headerSearch} style={{backgroundColor: 'white', border: '1px solid #e2e8f0', width: '250px'}}>
              <Search size={14} color="#94a3b8" />
              <input type="text" placeholder="予約IDで検索" />
            </div>
          </div>
        </div>

        <div style={{marginTop: '24px'}}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>予約ID</th>
                <th>ホスト / ゲスト</th>
                <th>日程</th>
                <th>タイプ</th>
                <th>合計金額</th>
                <th>ステータス</th>
                <th>アクション</th>
              </tr>
            </thead>
            <tbody>
              {/* Needs Intervention */}
              <tr style={{backgroundColor: '#fffbeb'}}>
                <td><span style={{fontFamily: 'monospace'}}>BK-8842</span></td>
                <td>
                  <span style={{fontWeight: 600}}>Yuki Honda</span> (Host)<br/>
                  <span style={{fontSize: '12px', color: '#64748b'}}>Kenji Sato (Guest)</span>
                </td>
                <td>2026/05/20 - 05/22</td>
                <td>宿泊</td>
                <td>¥14,500</td>
                <td>
                  <span className={`${styles.statusBadge} ${styles.pending}`} style={{backgroundColor: '#fee2e2', color: '#991b1b'}}>
                    <AlertTriangle size={12} style={{display: 'inline', marginRight: '4px', verticalAlign: 'text-top'}}/>
                    トラブル報告
                  </span>
                </td>
                <td><button className={styles.actionButton} style={{backgroundColor: 'white', borderColor: '#f87171', color: '#dc2626'}}>メッセージ履歴を確認</button></td>
              </tr>
              
              {/* Normal Bookings */}
              <tr>
                <td><span style={{fontFamily: 'monospace'}}>BK-8843</span></td>
                <td>
                  <span style={{fontWeight: 600}}>Kenji</span> (Host)<br/>
                  <span style={{fontSize: '12px', color: '#64748b'}}>Mika Suzuki (Guest)</span>
                </td>
                <td>2026/05/24</td>
                <td>一時預かり</td>
                <td>¥4,500</td>
                <td><span className={`${styles.statusBadge} ${styles.active}`}>滞在中</span></td>
                <td><button className={styles.actionButton}>詳細</button></td>
              </tr>
              <tr>
                <td><span style={{fontFamily: 'monospace'}}>BK-8841</span></td>
                <td>
                  <span style={{fontWeight: 600}}>Mami</span> (Host)<br/>
                  <span style={{fontSize: '12px', color: '#64748b'}}>Hiroshi (Guest)</span>
                </td>
                <td>2026/05/18 - 05/19</td>
                <td>宿泊</td>
                <td>¥8,300</td>
                <td><span className={`${styles.statusBadge} ${styles.approved}`}>完了済 (支払済)</span></td>
                <td><button className={styles.actionButton}>詳細</button></td>
              </tr>
              <tr>
                <td><span style={{fontFamily: 'monospace'}}>BK-8840</span></td>
                <td>
                  <span style={{fontWeight: 600}}>Hiroki</span> (Host)<br/>
                  <span style={{fontSize: '12px', color: '#64748b'}}>Takuya (Guest)</span>
                </td>
                <td>2026/05/28 - 05/30</td>
                <td>宿泊</td>
                <td>¥15,500</td>
                <td><span className={`${styles.statusBadge}`} style={{backgroundColor: '#e2e8f0', color: '#475569'}}>承認待ち (Auth確保)</span></td>
                <td><button className={styles.actionButton}>詳細</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
