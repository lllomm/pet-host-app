'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import styles from './FAQ.module.css';
import { ChevronDown, HelpCircle, User, Dog, ShieldCheck, CreditCard } from 'lucide-react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  icon: React.ReactNode;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    title: '全般',
    icon: <HelpCircle size={24} />,
    items: [
      {
        question: 'PawBnBとはどのようなサービスですか？',
        answer: 'PawBnBは、大切な愛犬を預けたいオーナー様と、地域の愛犬家（ホスト）を繋ぐマッチングプラットフォームです。ペットホテルなどのケージ預かりではなく、ホストの自宅で家族のように過ごせる環境を提供します。'
      },
      {
        question: '会員登録に費用はかかりますか？',
        answer: '会員登録やホストの検索、チャット相談などはすべて無料です。実際に予約が成立した際にのみ、サービス利用料が発生します。'
      }
    ]
  },
  {
    title: '飼い主様向け',
    icon: <User size={24} />,
    items: [
      {
        question: '信頼できるホストはどうやって選べばいいですか？',
        answer: 'ホストのプロフィールページで、過去の利用者のレビューや評価、提供している設備、これまでの飼育経験などを確認できます。また、予約前にチャットで直接質問したり、「顔合わせ（ミート＆グリート）」を行うことを強く推奨しています。'
      },
      {
        question: '事前の「顔合わせ」は必須ですか？',
        answer: '必須ではありませんが、愛犬とホスト、そしてホストの飼育環境との相性を確認するために、初めてのホストを利用される際は強く推奨しています。対面で話すことで、より安心して預けることができます。'
      },
      {
        question: 'どのような犬種でも預けられますか？',
        answer: 'ホストによって受け入れ可能な犬のサイズ（小型・中型・大型）や性格が異なります。各ホストのプロフィールにある「受け入れ条件」を確認し、不明な点はチャットでお問い合わせください。'
      }
    ]
  },
  {
    title: 'お預かり中・安全',
    icon: <ShieldCheck size={24} />,
    items: [
      {
        question: '預けている間の様子は分かりますか？',
        answer: 'はい。ホストは定期的（1日1回以上）に、写真や動画を添えたレポートを送ることが義務付けられています。離れていても、愛犬がリラックスして過ごしている様子をリアルタイムで確認できます。'
      },
      {
        question: 'ケガや病気が発生した場合はどうなりますか？',
        answer: 'PawBnBでは24時間体制のサポートデスクを完備しており、緊急時には提携の動物病院への案内などを行います。また、すべての予約には「あんしん補償制度」が適用され、万が一の事故やケガの際の治療費をサポートします。'
      }
    ]
  },
  {
    title: 'お支払い・キャンセル',
    icon: <CreditCard size={24} />,
    items: [
      {
        question: '支払い方法は何がありますか？',
        answer: '現在、クレジットカード決済に対応しています。予約リクエストがホストに承認された時点で決済が確定します。'
      },
      {
        question: 'キャンセル料はかかりますか？',
        answer: 'キャンセル時期によって異なります。予約確定後からお預かりの数日前までは無料ですが、直前のキャンセルの場合は所定のキャンセル料が発生します。詳細は利用規約をご確認ください。'
      }
    ]
  }
];

const AccordionItem = ({ item, isOpen, onClick }: { item: FAQItem; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
      <button className={styles.question} onClick={onClick}>
        <span>{item.question}</span>
        <ChevronDown size={20} className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`} />
      </button>
      <div className={`${styles.answerWrapper} ${isOpen ? styles.answerWrapperOpen : ''}`}>
        <div className={styles.answer}>
          {item.answer}
        </div>
      </div>
    </div>
  );
};

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <main className={styles.main}>
      <Header />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>よくある質問</h1>
          <p className={styles.subtitle}>
            PawBnBの利用に関する疑問にお答えします。
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className={styles.section}>
        <div className={styles.container}>
          {faqData.map((category, catIdx) => (
            <div key={catIdx} className={styles.categorySection}>
              <h2 className={styles.categoryTitle}>
                {category.icon}
                {category.title}
              </h2>
              <div className={styles.accordion}>
                {category.items.map((item, itemIdx) => (
                  <AccordionItem 
                    key={itemIdx}
                    item={item}
                    isOpen={!!openItems[`${catIdx}-${itemIdx}`]}
                    onClick={() => toggleItem(catIdx, itemIdx)}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Contact Section */}
          <div className={styles.contactBox}>
            <h3>解決しない場合はこちら</h3>
            <p>カスタマーサポートが丁寧に対応いたします。</p>
            <Link href="#" className={styles.contactButton}>
              お問い合わせフォームへ
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
