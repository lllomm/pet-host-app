'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  User,
  Settings,
  Heart,
  MessageSquare,
  CreditCard,
  ClipboardList,
  Calendar,
  Home,
  BarChart2,
} from 'lucide-react';
import styles from './DashboardLayout.module.css';

const ownerNavItems = [
  { href: '/dashboard', label: 'ダッシュボード', icon: <Home size={20} /> },
  { href: '/dashboard/bookings', label: '予約管理', icon: <ClipboardList size={20} /> },
  { href: '/dashboard/favorites', label: 'お気に入り', icon: <Heart size={20} /> },
  { href: '/dashboard/messages', label: 'メッセージ', icon: <MessageSquare size={20} /> },
  { href: '/dashboard/payments', label: '支払い履歴', icon: <CreditCard size={20} /> },
  { href: '/dashboard/account', label: 'アカウント設定', icon: <Settings size={20} /> },
];

const hostNavItems = [
  { href: '/dashboard', label: 'ホームサマリー', icon: <BarChart2 size={20} /> },
  { href: '/dashboard/host/bookings', label: '予約管理（ホスト）', icon: <ClipboardList size={20} /> },
  { href: '/dashboard/host/calendar', label: 'カレンダー管理', icon: <Calendar size={20} /> },
  { href: '/dashboard/messages', label: 'メッセージ', icon: <MessageSquare size={20} /> },
  { href: '/dashboard/account', label: 'アカウント設定', icon: <Settings size={20} /> },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHostSection = pathname.startsWith('/dashboard/host');

  const navItems = isHostSection ? hostNavItems : ownerNavItems;

  return (
    <main className={styles.main}>
      <Header />
      <div className={`container ${styles.layout}`}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.profileCard}>
            <div className={styles.avatar}>T</div>
            <h3 className={styles.profileName}>Takuhisa</h3>
            <p className={styles.profileSince}>登録日：2026年4月</p>
            <div className={styles.badgeRow}>
              <span className={styles.badge}>本人確認済み</span>
              <span className={styles.badge}>スーパーホスト</span>
            </div>
          </div>

          {/* Role switcher */}
          <div className={styles.roleSwitch}>
            <Link
              href="/dashboard"
              className={!isHostSection ? styles.roleSwitchActive : styles.roleSwitchBtn}
            >
              <User size={16} />
              ペットオーナー
            </Link>
            <Link
              href="/dashboard/host/bookings"
              className={isHostSection ? styles.roleSwitchActive : styles.roleSwitchBtn}
            >
              <Home size={16} />
              ホスト
            </Link>
          </div>

          <nav className={styles.nav}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={pathname === item.href ? `${styles.navItem} ${styles.navItemActive}` : styles.navItem}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <div className={styles.content}>
          {children}
        </div>
      </div>
      <Footer />
    </main>
  );
}
