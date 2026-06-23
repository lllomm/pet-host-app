'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  CalendarCheck, 
  FileText, 
  ShieldAlert, 
  Settings, 
  LogOut,
  Search,
  Bell
} from 'lucide-react';
import styles from './AdminLayout.module.css';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/admin' && pathname === '/admin') return true;
    if (path !== '/admin' && pathname?.startsWith(path)) return true;
    return false;
  };

  return (
    <div className={styles.adminLayout}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <h1>PawBnB Admin</h1>
          <span className={styles.brandBadge}>PROD</span>
        </div>

        <nav className={styles.nav}>
          <p className={styles.navSection}>概要</p>
          <Link 
            href="/admin" 
            className={`${styles.navItem} ${isActive('/admin') ? styles.navItemActive : ''}`}
          >
            <LayoutDashboard size={20} />
            ダッシュボード
          </Link>

          <p className={styles.navSection}>管理業務</p>
          <Link 
            href="/admin/users" 
            className={`${styles.navItem} ${isActive('/admin/users') ? styles.navItemActive : ''}`}
          >
            <Users size={20} />
            ユーザー・KYC審査
          </Link>
          <Link 
            href="/admin/bookings" 
            className={`${styles.navItem} ${isActive('/admin/bookings') ? styles.navItemActive : ''}`}
          >
            <CalendarCheck size={20} />
            予約・トラブル管理
          </Link>
          <Link 
            href="#" 
            className={styles.navItem}
          >
            <ShieldAlert size={20} />
            リスティング監視
          </Link>

          <p className={styles.navSection}>システム設定</p>
          <Link 
            href="#" 
            className={styles.navItem}
          >
            <FileText size={20} />
            お知らせ・CMS
          </Link>
          <Link 
            href="#" 
            className={styles.navItem}
          >
            <Settings size={20} />
            設定
          </Link>
        </nav>

        <div className={styles.logout}>
          <button className={styles.logoutButton}>
            <LogOut size={20} />
            ログアウト
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className={styles.mainWrapper}>
        <header className={styles.header}>
          <div className={styles.headerSearch}>
            <Search size={18} color="#94a3b8" />
            <input type="text" placeholder="予約ID、ユーザー名で検索..." />
          </div>
          <div className={styles.headerActions}>
            <button className={styles.iconButton}>
              <Bell size={20} />
              <span className={styles.badge}></span>
            </button>
            <div className={styles.adminProfile}>
              <div className={styles.adminAvatar}>A</div>
              <span className={styles.adminName}>Admin User</span>
            </div>
          </div>
        </header>

        <main className={styles.content}>
          {children}
        </main>
      </div>
    </div>
  );
}
