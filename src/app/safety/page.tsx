'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import styles from './Safety.module.css';
import { ShieldCheck, Clock, HeartHandshake, Star, CheckCircle, AlertCircle, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function SafetyPage() {
  return (
    <main className={styles.main}>
      <Header />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.badge}>Trust & Safety</span>
          <h1 className={styles.title}>安心・安全への取り組み</h1>
          <p className={styles.subtitle}>
            大切な家族を預けるからこそ、最高の安心を。
            PawBnBでは、オーナー様と愛犬が安心してサービスをご利用いただけるよう、
            業界最高水準の安全基準を設けています。
          </p>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.pillarGrid}>
            <div className={styles.pillarCard}>
              <div className={styles.iconWrapper}>
                <ShieldCheck size={32} />
              </div>
              <h3>厳正なホスト審査</h3>
              <p>
                身分証明書による本人確認はもちろん、スタッフによる個別面談、飼育環境のチェックをすべて手作業で行っています。合格率30%の厳しい基準をクリアしたホストのみが登録されています。
              </p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.iconWrapper}>
                <Clock size={32} />
              </div>
              <h3>24時間365日のサポート</h3>
              <p>
                お預かり中のトラブルや急な体調不良に備え、サポートデスクがいつでも対応します。緊急時には提携の動物病院への連絡代行なども行います。
              </p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.iconWrapper}>
                <HeartHandshake size={32} />
              </div>
              <h3>あんしん補償制度</h3>
              <p>
                万が一のお預かり中の事故やケガに備え、すべての予約に補償が含まれています。高額な治療費が必要になった場合でも、しっかりサポートします。
              </p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.iconWrapper}>
                <Star size={32} />
              </div>
              <h3>透明性の高いレビュー</h3>
              <p>
                実際に預けたオーナー様による評価とコメントを100%公開。嘘のない生の声を確認してから、信頼できるホストを選ぶことができます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Section */}
      <section className={`${styles.section} ${styles.supportSection}`}>
        <div className="container">
          <div className={styles.infoBox}>
            <div className={styles.infoText}>
              <h2>トラブルを未然に防ぐ仕組み</h2>
              <p>
                PawBnBでは、事前の「顔合わせ（ミート＆グリート）」を推奨しています。
                本格的な予約の前に、ホストの自宅を訪問し、相性を確認することができます。
              </p>
              <ul className={styles.checkList}>
                <li><CheckCircle size={20} color="#0d9488" /> 事前のチャット相談が可能</li>
                <li><CheckCircle size={20} color="#0d9488" /> 預かり中の写真・動画報告を義務化</li>
                <li><CheckCircle size={20} color="#0d9488" /> 決済はプラットフォームが仲介し安全</li>
              </ul>
            </div>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <Image 
                src="/host_with_dog_1_1778231939859.png" 
                alt="Safe environment" 
                width={500} 
                height={350} 
                style={{ borderRadius: 'var(--radius-md)', width: '100%', height: 'auto', boxShadow: 'var(--shadow-md)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Flow */}
      <section className={styles.section}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '40px' }}>もしもの時の対応フロー</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ padding: '24px', background: '#f1f5f9', borderRadius: 'var(--radius-md)', textAlign: 'left', display: 'flex', gap: '20px', alignItems: 'center' }}>
              <AlertCircle size={32} color="#64748b" />
              <div>
                <h4 style={{ marginBottom: '4px' }}>1. ホストから事務局へ連絡</h4>
                <p style={{ color: '#64748b', fontSize: '14px' }}>異常を感じた場合、ホストは即座にPawBnBサポートデスクへ報告します。</p>
              </div>
            </div>
            <div style={{ padding: '24px', background: '#f1f5f9', borderRadius: 'var(--radius-md)', textAlign: 'left', display: 'flex', gap: '20px', alignItems: 'center' }}>
              <PhoneCall size={32} color="#64748b" />
              <div>
                <h4 style={{ marginBottom: '4px' }}>2. 飼い主様への通知と提携病院への搬送</h4>
                <p style={{ color: '#64748b', fontSize: '14px' }}>事務局より飼い主様へ連絡。必要に応じて近隣の提携動物病院へ搬送します。</p>
              </div>
            </div>
            <div style={{ padding: '24px', background: '#f1f5f9', borderRadius: 'var(--radius-md)', textAlign: 'left', display: 'flex', gap: '20px', alignItems: 'center' }}>
              <ShieldCheck size={32} color="#0d9488" />
              <div>
                <h4 style={{ marginBottom: '4px' }}>3. 補償制度の適用</h4>
                <p style={{ color: '#64748b', fontSize: '14px' }}>発生した治療費等は、PawBnBの補償制度に基づき適切に処理されます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <h2>安心して始めましょう</h2>
          <Link href="/" className={styles.ctaButton}>
            まずはホストを探してみる
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
