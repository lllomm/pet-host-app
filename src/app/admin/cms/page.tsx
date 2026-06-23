'use client';

import React from 'react';
import styles from '../AdminDashboard.module.css';
import { Search, Plus, FileText, Settings, Megaphone } from 'lucide-react';

export default function AdminCMSPage() {
  return (
    <div>
      <div className={styles.pageHeader}>
        <h1>お知らせ・CMS管理</h1>
        <p>ユーザー向けのお知らせ、FAQ、利用規約などの静的コンテンツを管理します。</p>
      </div>

      <div className={styles.statsGrid} style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.statTitle}>公開中のお知らせ</span>
            <div className={`${styles.statIcon} ${styles.blue}`}>
              <Megaphone size={20} />
            </div>
          </div>
          <div className={styles.statValue}>12件</div>
        </div>
        
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.statTitle}>下書き</span>
            <div className={`${styles.statIcon}`} style={{backgroundColor: '#f1f5f9', color: '#64748b'}}>
              <FileText size={20} />
            </div>
          </div>
          <div className={styles.statValue}>2件</div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader} style={{marginBottom: 0}}>
          <div style={{display: 'flex', gap: '12px'}}>
            <div className={styles.headerSearch} style={{backgroundColor: 'white', border: '1px solid #e2e8f0', width: '250px'}}>
              <Search size={14} color="#94a3b8" />
              <input type="text" placeholder="タイトルで検索" />
            </div>
          </div>
          <button className={styles.actionButton} style={{backgroundColor: '#3b82f6', color: 'white', border: 'none', display: 'flex', alignItems: 'center', gap: '8px'}}>
            <Plus size={16} />
            新規作成
          </button>
        </div>

        <div style={{marginTop: '24px'}}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>カテゴリ</th>
                <th>タイトル</th>
                <th>公開日</th>
                <th>最終更新者</th>
                <th>ステータス</th>
                <th>アクション</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span style={{fontSize: '13px', fontWeight: 600, color: '#3b82f6'}}>システム</span></td>
                <td style={{fontWeight: 500}}>ゴールデンウィーク期間中のサポート対応について</td>
                <td>2026/04/20</td>
                <td>Admin User</td>
                <td><span className={`${styles.statusBadge} ${styles.active}`}>公開中</span></td>
                <td>
                  <button className={styles.actionButton} style={{marginRight: '8px'}}>編集</button>
                  <button className={styles.actionButton}>非公開</button>
                </td>
              </tr>
              <tr>
                <td><span style={{fontSize: '13px', fontWeight: 600, color: '#10b981'}}>キャンペーン</span></td>
                <td style={{fontWeight: 500}}>【5月限定】ホストデビュー応援キャンペーン！</td>
                <td>2026/05/01</td>
                <td>Marketing Team</td>
                <td><span className={`${styles.statusBadge} ${styles.active}`}>公開中</span></td>
                <td>
                  <button className={styles.actionButton} style={{marginRight: '8px'}}>編集</button>
                  <button className={styles.actionButton}>非公開</button>
                </td>
              </tr>
              <tr>
                <td><span style={{fontSize: '13px', fontWeight: 600, color: '#8b5cf6'}}>機能追加</span></td>
                <td style={{fontWeight: 500}}>新しいメッセージ機能のリリース（画像送信が可能に）</td>
                <td>-</td>
                <td>Admin User</td>
                <td><span className={`${styles.statusBadge}`} style={{backgroundColor: '#f1f5f9', color: '#64748b'}}>下書き</span></td>
                <td>
                  <button className={styles.actionButton} style={{marginRight: '8px'}}>編集</button>
                  <button className={styles.actionButton} style={{color: '#dc2626'}}>削除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className={styles.card} style={{marginTop: '24px'}}>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>静的ページ管理</h2>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', border: '1px solid #e2e8f0', borderRadius: '8px'}}>
            <div>
              <p style={{fontWeight: 600, fontSize: '15px', color: '#1e293b'}}>利用規約 (Terms of Service)</p>
              <p style={{fontSize: '13px', color: '#64748b', marginTop: '4px'}}>最終更新: 2025/12/01</p>
            </div>
            <button className={styles.actionButton} style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
              <Settings size={14} />
              編集する
            </button>
          </div>
          
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', border: '1px solid #e2e8f0', borderRadius: '8px'}}>
            <div>
              <p style={{fontWeight: 600, fontSize: '15px', color: '#1e293b'}}>よくある質問 (FAQ)</p>
              <p style={{fontSize: '13px', color: '#64748b', marginTop: '4px'}}>最終更新: 2026/04/15</p>
            </div>
            <button className={styles.actionButton} style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
              <Settings size={14} />
              編集する
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
