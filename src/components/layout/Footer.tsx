import React from 'react';
import Link from 'next/link';
import { PawPrint, Share2, Globe, Mail } from 'lucide-react';
import styles from './Footer.module.css';

const footerSections = [
  {
    title: 'PawBnBについて',
    links: [
      { label: 'PawBnBとは', href: '/about' },
      { label: '安心・安全への取り組み', href: '/safety' },
      { label: '運営会社', href: '#' },
      { label: '採用情報', href: '#' },
      { label: 'ニュース', href: '#' },
    ]
  },
  {
    title: '飼い主様向け',
    links: [
      { label: 'ホストを探す', href: '#' },
      { label: '利用の流れ', href: '/how-it-works' },
      { label: '料金プラン', href: '#' },
      { label: 'よくある質問', href: '/faq' },
      { label: '宿泊レビュー', href: '#' },
    ]
  },
  {
    title: 'ホスト様向け',
    links: [
      { label: 'ホストになる', href: '#' },
      { label: 'ホストのメリット', href: '#' },
      { label: 'ホストコミュニティ', href: '#' },
      { label: 'ホスト向けFAQ', href: '/faq' },
    ]
  },
  {
    title: 'サポート・規約',
    links: [
      { label: 'お問い合わせ', href: '#' },
      { label: '利用規約', href: '#' },
      { label: 'プライバシーポリシー', href: '#' },
      { label: '特定商取引法に基づく表記', href: '#' },
      { label: 'サイトマップ', href: '#' },
    ]
  }
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <PawPrint size={32} color="var(--primary)" />
              <span>PawBnB</span>
            </Link>
            <p className={styles.brandDesc}>
              大切な家族である愛犬を、<br />
              信頼できるホストに預けられる<br />
              マッチングプラットフォーム。
            </p>
            <div className={styles.social}>
              <Link href="#"><Share2 size={20} /></Link>
              <Link href="#"><Globe size={20} /></Link>
              <Link href="#"><Mail size={20} /></Link>
            </div>
          </div>
          
          <div className={styles.linksGrid}>
            {footerSections.map((section) => (
              <div key={section.title} className={styles.section}>
                <h4 className={styles.sectionTitle}>{section.title}</h4>
                <ul className={styles.linkList}>
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>© 2026 PawBnB Inc. All Rights Reserved.</p>
          <div className={styles.bottomLinks}>
            <span>日本語</span>
            <span>¥ JPY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
