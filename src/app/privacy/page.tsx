'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import styles from './Privacy.module.css';

export default function PrivacyPage() {
  return (
    <main className={styles.main}>
      <Header />
      
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>プライバシーポリシー</h1>
          <p className={styles.lastUpdated}>最終更新日：2026年5月18日</p>
        </div>
      </header>

      <div className={styles.content}>
        <p className={styles.intro}>
          PawBnB（以下、「当サービス」といいます。）は、ユーザーの皆様の個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
        </p>

        <section className={styles.article}>
          <h2>第1条（個人情報の定義）</h2>
          <ul className={styles.clauseList}>
            <li>
              <span className={styles.clauseNumber}>1.</span>
              <span>「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報を指します。</span>
            </li>
            <li>
              <span className={styles.clauseNumber}>2.</span>
              <span>当サービスで収集する主な情報には、ユーザーの氏名、住所、電話番号、メールアドレス、顔写真、本人確認書類、ペットに関する情報などが含まれます。</span>
            </li>
          </ul>
        </section>

        <section className={styles.article}>
          <h2>第2条（個人情報の収集および利用目的）</h2>
          <p>当サービスが個人情報を収集・利用する目的は、以下のとおりです。</p>
          <ul className={styles.subList}>
            <li>・当サービスの提供、運営および改善のため</li>
            <li>・ユーザーの本人確認および各種審査のため</li>
            <li>・ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
            <li>・ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等および当サービスが提供する他のサービスの案内のメールを送付するため</li>
            <li>・メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
            <li>・利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
            <li>・ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため</li>
            <li>・有料サービスにおいて、ユーザーに利用料金を請求するため</li>
          </ul>
        </section>

        <section className={styles.article}>
          <h2>第3条（個人情報の第三者提供）</h2>
          <ul className={styles.clauseList}>
            <li>
              <span className={styles.clauseNumber}>1.</span>
              <span>当サービスは、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。</span>
              <ul className={styles.subList} style={{marginLeft: '28px', marginTop: '12px'}}>
                <li>・人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                <li>・公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                <li>・国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
              </ul>
            </li>
            <li>
              <span className={styles.clauseNumber}>2.</span>
              <span>前項の定めにかかわらず、次に掲げる場合には、当該情報の提供先は第三者に該当しないものとします。</span>
              <ul className={styles.subList} style={{marginLeft: '28px', marginTop: '12px'}}>
                <li>・当サービスが利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合</li>
                <li>・合併その他の事由による事業の承継に伴って個人情報が提供される場合</li>
              </ul>
            </li>
            <li>
              <span className={styles.clauseNumber}>3.</span>
              <span>本サービスの目的であるホストとオーナーのマッチングを実現するため、必要な範囲内で（お互いのプロフィール情報等）ユーザー間で情報が共有されます。</span>
            </li>
          </ul>
        </section>

        <section className={styles.article}>
          <h2>第4条（個人情報の安全管理）</h2>
          <p>
            当サービスは、個人情報の漏洩、滅失またはき損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。クレジットカード情報等の重要な決済情報は、当サービスでは保持せず、信頼できる決済代行会社によって安全に管理されます。
          </p>
        </section>

        <section className={styles.article}>
          <h2>第5条（プライバシーポリシーの変更）</h2>
          <ul className={styles.clauseList}>
            <li>
              <span className={styles.clauseNumber}>1.</span>
              <span>本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。</span>
            </li>
            <li>
              <span className={styles.clauseNumber}>2.</span>
              <span>当サービスが別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。</span>
            </li>
          </ul>
        </section>

        <section className={styles.article}>
          <h2>お問い合わせ窓口</h2>
          <p>本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。</p>
          <ul className={styles.subList}>
            <li>事業者名：PawBnB Inc.（仮）</li>
            <li>担当部署：カスタマーサポートチーム</li>
            <li>Eメールアドレス：support@pawbnb.example.com</li>
          </ul>
        </section>

        <div className={styles.footerNote}>
          以上
        </div>
      </div>

      <Footer />
    </main>
  );
}
