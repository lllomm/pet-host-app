'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import styles from './About.module.css';
import { Home, ShieldCheck, Heart, Users, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <Header />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.badge}>About PawBnB</span>
          <h1 className={styles.title}>
            地域の愛犬家が、<br />
            家族のように見守る。
          </h1>
          <p className={styles.subtitle}>
            ケージの中ではなく、誰かの温かい家で。<br />
            PawBnBは、大切な愛犬を預けたいオーナーと、<br />
            地域の愛犬家（ホスト）をつなぐ、新しいペットケアの形です。
          </p>
        </div>
      </section>

      {/* Concept Section */}
      <section className={`${styles.section} ${styles.conceptSection}`}>
        <div className={`container ${styles.sectionGrid}`}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/host_with_dog_5_lifestyle_1778659488337.png" 
              alt="Host and dog playing" 
              width={600} 
              height={450}
              style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
            />
          </div>
          <div className={styles.textContent}>
            <h2>大切な家族を、<br />最高の環境で。</h2>
            <p>
              「旅行や仕事で家を空けるとき、大切な愛犬をケージに閉じ込めたくない。」<br />
              そんな想いからPawBnBは生まれました。
            </p>
            <p>
              私たちのプラットフォームでは、厳しい審査を通過した「犬が大好きなホスト」が、
              自分の愛犬と同じように、あなたの愛犬を自宅で温かく迎え入れます。
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`${styles.section} ${styles.valuesSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>私たちが大切にしていること</h2>
          </div>
          <div className={styles.valueGrid}>
            <div className={styles.valueCard}>
              <div className={styles.iconBox}>
                <Home size={32} />
              </div>
              <h3>家族のような温もり</h3>
              <p>
                ペットホテルでのケージ預かりではなく、ホストの自宅で自由に、家族のように過ごせる環境を提供します。
              </p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.iconBox}>
                <ShieldCheck size={32} />
              </div>
              <h3>信頼と安全</h3>
              <p>
                すべてのホストは厳正な審査を通過しています。身分証確認、飼育環境チェック、万が一のサポート体制で、安心をお届けします。
              </p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.iconBox}>
                <Users size={32} />
              </div>
              <h3>地域で支え合う</h3>
              <p>
                「近所のあの人なら安心」と思える、地域社会の中での助け合いを促進します。愛犬を通じて、街がもっと温かくなります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Community Section */}
      <section className={styles.section}>
        <div className={`container ${styles.sectionGrid}`}>
          <div className={styles.textContent}>
            <h2>新しい「預け先」の選択肢</h2>
            <p>
              PawBnBは単なるマッチングサイトではありません。愛犬家同士が信頼でつながり、
              困ったときには助け合える、そんなコミュニティを目指しています。
            </p>
            <p>
              オーナー様には「安心」を、ホスト様には「愛犬と過ごす喜び」を。
              私たちは、すべての犬が幸せに過ごせる世界を、地域から作っていきます。
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image 
              src="/host_with_dog_6_lifestyle_1778659506406.png" 
              alt="Community interaction" 
              width={600} 
              height={450}
              style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaContent}`}>
          <h2>あなたもPawBnBを<br />始めてみませんか？</h2>
          <p>素敵なホストが、あなたの愛犬を待っています。</p>
          <Link href="/" className={styles.ctaButton}>
            ホストを探す <ArrowRight size={20} style={{ verticalAlign: 'middle', marginLeft: '8px' }} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
