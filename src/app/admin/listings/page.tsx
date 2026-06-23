'use client';

import React from 'react';
import styles from '../AdminDashboard.module.css';
import { Search, Filter, Home, AlertCircle } from 'lucide-react';

export default function AdminListingsPage() {
  return (
    <div>
      <div className={styles.pageHeader}>
        <h1>リスティング管理</h1>
        <p>プラットフォーム上に公開されている預かり環境（リスティング）の監視と管理を行います。</p>
      </div>

      <div className={styles.statsGrid} style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.statTitle}>公開中のリスティング</span>
            <div className={`${styles.statIcon} ${styles.green}`}>
              <Home size={20} />
            </div>
          </div>
          <div className={styles.statValue}>1,425件</div>
        </div>
        
        <div className={styles.statCard} style={{backgroundColor: '#fffbeb', borderColor: '#fde68a'}}>
          <div className={styles.statHeader}>
            <span className={styles.statTitle} style={{color: '#b45309'}}>通報・審査待ち</span>
            <div className={`${styles.statIcon} ${styles.amber}`}>
              <AlertCircle size={20} />
            </div>
          </div>
          <div className={styles.statValue}>3件</div>
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
              <input type="text" placeholder="ホスト名・タイトルで検索" />
            </div>
          </div>
        </div>

        <div style={{marginTop: '24px'}}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>リスティングID</th>
                <th>タイトル / ホスト</th>
                <th>ロケーション</th>
                <th>ステータス</th>
                <th>通報/警告</th>
                <th>アクション</th>
              </tr>
            </thead>
            <tbody>
              {/* Reported Listing */}
              <tr style={{backgroundColor: '#fffbeb'}}>
                <td><span style={{fontFamily: 'monospace'}}>LST-2294</span></td>
                <td>
                  <span style={{fontWeight: 600}}>庭がないのに「広い庭」と記載</span><br/>
                  <span style={{fontSize: '12px', color: '#64748b'}}>Host: Takuya (USR-9711)</span>
                </td>
                <td>神奈川県横浜市</td>
                <td><span className={`${styles.statusBadge} ${styles.active}`}>公開中</span></td>
                <td>
                  <span style={{color: '#dc2626', fontWeight: 500, fontSize: '13px'}}>
                    <AlertCircle size={14} style={{display: 'inline', marginRight: '4px', verticalAlign: 'text-bottom'}}/>
                    不当表示の通報あり
                  </span>
                </td>
                <td>
                  <button className={styles.actionButton} style={{backgroundColor: 'white', borderColor: '#f87171', color: '#dc2626', marginRight: '8px'}}>非公開にする</button>
                  <button className={styles.actionButton}>詳細</button>
                </td>
              </tr>
              
              {/* Normal Listings */}
              <tr>
                <td><span style={{fontFamily: 'monospace'}}>LST-3841</span></td>
                <td>
                  <span style={{fontWeight: 600}}>広い庭のある居心地の良い家</span><br/>
                  <span style={{fontSize: '12px', color: '#64748b'}}>Host: Yuki (USR-9842)</span>
                </td>
                <td>東京都世田谷区</td>
                <td><span className={`${styles.statusBadge} ${styles.active}`}>公開中</span></td>
                <td>-</td>
                <td><button className={styles.actionButton}>詳細</button></td>
              </tr>
              <tr>
                <td><span style={{fontFamily: 'monospace'}}>LST-3842</span></td>
                <td>
                  <span style={{fontWeight: 600}}>都心のペットフレンドリーマンション</span><br/>
                  <span style={{fontSize: '12px', color: '#64748b'}}>Host: Kenji (USR-9921)</span>
                </td>
                <td>東京都港区</td>
                <td><span className={`${styles.statusBadge} ${styles.active}`}>公開中</span></td>
                <td>-</td>
                <td><button className={styles.actionButton}>詳細</button></td>
              </tr>
              <tr>
                <td><span style={{fontFamily: 'monospace'}}>LST-3601</span></td>
                <td>
                  <span style={{fontWeight: 600}}>海沿いの静かな一軒家</span><br/>
                  <span style={{fontSize: '12px', color: '#64748b'}}>Host: Mami (USR-9430)</span>
                </td>
                <td>神奈川県鎌倉市</td>
                <td><span className={`${styles.statusBadge}`} style={{backgroundColor: '#e2e8f0', color: '#475569'}}>一時停止中 (ホスト設定)</span></td>
                <td>-</td>
                <td><button className={styles.actionButton}>詳細</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
