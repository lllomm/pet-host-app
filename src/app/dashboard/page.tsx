'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  User, 
  Settings, 
  Heart, 
  MessageSquare, 
  CreditCard, 
  PlusCircle,
  ClipboardList
} from 'lucide-react';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const [role, setRole] = useState<'owner' | 'host'>('owner');

  return (
    <main className={styles.main}>
      <Header />
      
      <div className={`container ${styles.content}`}>
        <div className={styles.sidebar}>
          <div className={styles.profileSummary}>
            <div className={styles.avatar}>T</div>
            <h3>Takuhisa</h3>
            <p>登録日：2026年</p>
          </div>
          
          <nav className={styles.nav}>
            <button className={styles.navItem}>
              <User size={20} />
              <span>個人情報</span>
            </button>
            <button className={styles.navItem}>
              <Settings size={20} />
              <span>ログインとセキュリティ</span>
            </button>
            <button className={styles.navItem}>
              <CreditCard size={20} />
              <span>支払いと受取</span>
            </button>
            <button className={styles.navItem}>
              <MessageSquare size={20} />
              <span>メッセージ</span>
            </button>
          </nav>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.header}>
            <h1>ダッシュボード</h1>
            <div className={styles.roleToggle}>
              <button 
                className={role === 'owner' ? styles.activeRole : ''}
                onClick={() => setRole('owner')}
              >
                ペットオーナー
              </button>
              <button 
                className={role === 'host' ? styles.activeRole : ''}
                onClick={() => setRole('host')}
              >
                ホスト
              </button>
            </div>
          </div>

          {role === 'owner' ? (
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2>マイペット</h2>
                <button className={styles.addButton}>
                  <PlusCircle size={18} />
                  <span>ペットを追加</span>
                </button>
              </div>
              <div className={styles.grid}>
                <div className={styles.infoCard}>
                  <div className={styles.petAvatar}>🐕</div>
                  <h4>ハチ</h4>
                  <p>柴犬、3歳</p>
                </div>
              </div>

              <div className={styles.sectionHeader}>
                <h2>予約状況</h2>
              </div>
              <div className={styles.emptyState}>
                <ClipboardList size={48} />
                <p>今後の予約はありません。</p>
                <button className={styles.primaryButton}>ホストを探す</button>
              </div>
            </div>
          ) : (
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2>掲載リスティング</h2>
                <button className={styles.addButton}>
                  <PlusCircle size={18} />
                  <span>リスティングを作成</span>
                </button>
              </div>
              <div className={styles.emptyState}>
                <Home size={48} />
                <p>まだリスティングが作成されていません。</p>
                <button className={styles.primaryButton}>ホストになる</button>
              </div>

              <div className={styles.sectionHeader}>
                <h2>ホストの収益</h2>
              </div>
              <div className={styles.statsCard}>
                <div className={styles.stat}>
                  <span>合計収益</span>
                  <h3>¥0</h3>
                </div>
                <div className={styles.stat}>
                  <span>平均評価</span>
                  <h3>なし</h3>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
};

// Dummy component for Home icon since it was used in emptyState
const Home = ({ size }: { size: number }) => <div style={{width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: size*0.8}}>🏠</div>;

export default Dashboard;
