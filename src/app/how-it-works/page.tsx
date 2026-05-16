'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import styles from './HowItWorks.module.css';
import { Search, MessagesSquare, CreditCard, Dog, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HowItWorksPage() {
  const steps = [
    {
      number: 1,
      title: 'ホストを探す',
      icon: <Search size={24} />,
      description: 'エリアや日付、愛犬のサイズからぴったりのホストを検索。プロフィールや過去のレビュー、提供しているサービス（宿泊・日帰りなど）をチェックして、気になるホストを見つけましょう。',
      image: '/home1.png'
    },
    {
      number: 2,
      title: 'チャットで相談・顔合わせ',
      icon: <MessagesSquare size={24} />,
      description: 'まずはチャットで空き状況や愛犬の性格を相談。PawBnBでは、事前の「顔合わせ（無料）」を強く推奨しています。ホストの自宅を訪問し、愛犬とホストの相性を直接確認しましょう。',
      image: '/host_with_dog_1_1778231939859.png'
    },
    {
      number: 3,
      title: '予約と支払い',
      icon: <CreditCard size={24} />,
      description: '条件が合えば、サイト上で予約リクエストを送信。ホストが承認したら、クレジットカードで決済を完了させます。支払いはPawBnBが仲介するため、当日の現金やり取りは不要です。',
      image: '/home2.png'
    },
    {
      number: 4,
      title: 'お預かり当日・ステイ',
      icon: <Dog size={24} />,
      description: '予約当日、愛犬と一緒にホストの自宅へ。お預かり中は、ホストから写真や動画付きのレポートが定期的に届きます。愛犬がリラックスして過ごしている様子を、いつでも確認できます。',
      image: '/host_with_dog_5_lifestyle_1778659488337.png'
    },
    {
      number: 5,
      title: 'お迎え・レビュー',
      icon: <Sparkles size={24} />,
      description: 'お迎えに行き、愛犬と再会！ホストからお預かり中の様子を聞いて完了です。最後にホストへの感謝を込めてレビューを投稿しましょう。レビューは次回の利用者の助けにもなります。',
      image: '/host_with_dog_6_lifestyle_1778659506406.png'
    }
  ];

  return (
    <main className={styles.main}>
      <Header />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.badge}>Owner Guide</span>
          <h1 className={styles.title}>利用の流れ</h1>
          <p className={styles.subtitle}>
            かんたん5ステップで、大切な愛犬に最高の環境を。
            予約からお迎えまでのプロセスをご案内します。
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.timeline}>
            {steps.map((step) => (
              <div key={step.number} className={styles.step}>
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.stepContent}>
                  <div className={styles.iconBox}>
                    {step.icon}
                    <span>STEP {step.number}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <div className={styles.imageArea}>
                    <Image 
                      src={step.image} 
                      alt={step.title} 
                      width={600} 
                      height={350} 
                      style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <h2>素敵なホストを見つけに行きましょう</h2>
          <Link href="/" className={styles.ctaButton}>
            ホストを探してみる <ArrowRight size={20} style={{ verticalAlign: 'middle', marginLeft: '8px' }} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
