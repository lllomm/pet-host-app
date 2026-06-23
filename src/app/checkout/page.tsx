'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ChevronLeft, ShieldCheck, Info, MapPin, CreditCard, Lock } from 'lucide-react';
import styles from './Checkout.module.css';
import Link from 'next/link';

export default function CheckoutPage() {
  const [agreed, setAgreed] = useState(false);

  // Mock booking details (would normally come from context/URL/state)
  const bookingDetails = {
    hostName: 'Yuki',
    location: '東京都世田谷区',
    startDate: '2026年5月1日',
    endDate: '2026年5月2日',
    type: '宿泊',
    guests: 'ハチ (柴犬)',
    nights: 1,
    pricePerUnit: 5500,
    cleaningFee: 2000,
    serviceFee: 1500,
    thumbnail: '/home1.png'
  };

  const subtotal = bookingDetails.pricePerUnit * bookingDetails.nights;
  const total = subtotal + bookingDetails.cleaningFee + bookingDetails.serviceFee;

  return (
    <main className={styles.main}>
      <Header />
      
      <div className={`container ${styles.content}`}>
        <div className={styles.header}>
          <Link href="/rooms/1" className={styles.backLink}>
            <ChevronLeft size={24} />
          </Link>
          <h1>予約の確認と支払い</h1>
        </div>

        <div className={styles.grid}>
          {/* Left Column: Booking Details & Input */}
          <div className={styles.leftColumn}>
            
            <section className={styles.section}>
              <h2>予約の内容</h2>
              <div className={styles.detailRow}>
                <div>
                  <p className={styles.detailLabel}>日付</p>
                  <p className={styles.detailValue}>{bookingDetails.startDate} 〜 {bookingDetails.endDate}</p>
                </div>
                <button className={styles.editButton}>編集</button>
              </div>
              <div className={styles.detailRow}>
                <div>
                  <p className={styles.detailLabel}>ペット</p>
                  <p className={styles.detailValue}>{bookingDetails.guests}</p>
                </div>
                <button className={styles.editButton}>編集</button>
              </div>
            </section>

            <hr className={styles.divider} />

            <section className={styles.section}>
              <h2>ホストへのメッセージ</h2>
              <p className={styles.subtitle}>旅行の目的や、ペットの性格、特別な配慮が必要な点などをお知らせください。</p>
              <div className={styles.hostPreview}>
                <div className={styles.hostAvatar}>Y</div>
                <div>
                  <p className={styles.hostName}>{bookingDetails.hostName}</p>
                  <p className={styles.hostJoined}>2024年からホスト</p>
                </div>
              </div>
              <textarea 
                className={styles.textarea} 
                placeholder="例: はじめまして！大人しい性格の柴犬です。今回は旅行のため1泊お願いしたいと考えています。"
                rows={4}
              ></textarea>
            </section>

            <hr className={styles.divider} />

            <section className={styles.section}>
              <div className={styles.sectionTitleRow}>
                <h2>お支払い方法</h2>
                <div className={styles.secureBadge}>
                  <Lock size={14} />
                  <span>安全な決済</span>
                </div>
              </div>
              
              <div className={styles.paymentMethodCard}>
                <div className={styles.paymentHeader}>
                  <div className={styles.paymentSelector}>
                    <input type="radio" id="card" name="payment" defaultChecked />
                    <label htmlFor="card" className={styles.paymentLabel}>
                      <CreditCard size={18} />
                      クレジットカード
                    </label>
                  </div>
                  <div className={styles.cardIcons}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" height="12" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" height="15" />
                  </div>
                </div>
                
                {/* Stripe Mock Form */}
                <div className={styles.stripeMock}>
                  <div className={styles.inputGroup}>
                    <input type="text" placeholder="カード番号" className={styles.input} />
                  </div>
                  <div className={styles.inputRow}>
                    <input type="text" placeholder="有効期限 (MM/YY)" className={styles.input} />
                    <input type="text" placeholder="CVC" className={styles.input} />
                  </div>
                  <div className={styles.inputGroup}>
                    <input type="text" placeholder="カード名義" className={styles.input} />
                  </div>
                </div>
              </div>
            </section>

            <hr className={styles.divider} />

            <section className={styles.section}>
              <h2>キャンセルポリシー</h2>
              <p className={styles.policyText}>
                <strong>柔軟</strong>: {bookingDetails.startDate}の24時間前までにキャンセルすれば全額返金されます。それ以降は最初の1泊分の料金とサービス料が返金されません。
              </p>
              <button className={styles.linkButton}>詳細を見る</button>
            </section>

            <hr className={styles.divider} />

            <section className={styles.section}>
              <div className={styles.agreement}>
                <p className={styles.policyText}>
                  「予約をリクエスト」ボタンを押すことで、ホストのハウスルール、キャンセルポリシー、およびPawBnBの利用規約に同意したことになります。<br/>
                  <br/>
                  ホストが予約リクエストを承認するまで、お支払いは確定しません。（オーソリゼーションのみが行われます）
                </p>
              </div>
              <button className={styles.submitButton}>
                予約をリクエストする
              </button>
            </section>

          </div>

          {/* Right Column: Order Summary (Sticky) */}
          <div className={styles.rightColumn}>
            <div className={styles.summaryCard}>
              <div className={styles.listingPreview}>
                <img src={bookingDetails.thumbnail} alt="Listing" className={styles.thumbnail} />
                <div className={styles.listingInfo}>
                  <p className={styles.listingType}>{bookingDetails.type}</p>
                  <p className={styles.listingTitle}>広い庭のある居心地の良い家</p>
                  <p className={styles.listingLocation}><MapPin size={12}/> {bookingDetails.location}</p>
                </div>
              </div>

              <hr className={styles.divider} />

              <div className={styles.priceProtection}>
                <ShieldCheck size={24} className={styles.shieldIcon} />
                <div>
                  <p className={styles.protectionTitle}>安心の予約保証</p>
                  <p className={styles.protectionText}>ホストの都合によるキャンセルなどの場合は全額返金されます。</p>
                </div>
              </div>

              <hr className={styles.divider} />

              <h3>料金の詳細</h3>
              
              <div className={styles.calc}>
                <div className={styles.calcRow}>
                  <span>¥{bookingDetails.pricePerUnit.toLocaleString()} x {bookingDetails.nights} {bookingDetails.type === '宿泊' ? '泊' : '時間'}</span>
                  <span>¥{subtotal.toLocaleString()}</span>
                </div>
                <div className={styles.calcRow}>
                  <span className={styles.feeWithTooltip}>
                    清掃料金
                  </span>
                  <span>¥{bookingDetails.cleaningFee.toLocaleString()}</span>
                </div>
                <div className={styles.calcRow}>
                  <span className={styles.feeWithTooltip}>
                    PawBnB サービス料
                  </span>
                  <span>¥{bookingDetails.serviceFee.toLocaleString()}</span>
                </div>
              </div>

              <hr className={styles.divider} />

              <div className={`${styles.calcRow} ${styles.totalRow}`}>
                <span>合計 (JPY)</span>
                <span>¥{total.toLocaleString()}</span>
              </div>
              
              <p className={styles.totalInfo}>為替レートの変動により、実際のご請求額が異なる場合があります。</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
