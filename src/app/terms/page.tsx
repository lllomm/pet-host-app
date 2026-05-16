'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import styles from './Terms.module.css';

export default function TermsPage() {
  return (
    <main className={styles.main}>
      <Header />
      
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>利用規約</h1>
          <p className={styles.lastUpdated}>最終更新日：2026年5月16日</p>
        </div>
      </header>

      <div className={styles.content}>
        <p className={styles.intro}>
          この利用規約（以下，「本規約」といいます。）は，PawBnB（以下，「当サービス」といいます。）が提供するペットホストマッチングサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆様（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
        </p>

        <section className={styles.article}>
          <h2>第1条（適用）</h2>
          <ul className={styles.clauseList}>
            <li>
              <span className={styles.clauseNumber}>1.</span>
              <span>本規約は，ユーザーと当サービスとの間の本サービスの利用に関わる一切の関係に適用されるものとします。</span>
            </li>
            <li>
              <span className={styles.clauseNumber}>2.</span>
              <span>当サービスは本サービスに関し，本規約のほか，各種の規定（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。</span>
            </li>
          </ul>
        </section>

        <section className={styles.article}>
          <h2>第2条（利用登録）</h2>
          <ul className={styles.clauseList}>
            <li>
              <span className={styles.clauseNumber}>1.</span>
              <span>本サービスにおいては，登録希望者が本規約に同意の上，当サービスの定める方法によって利用登録を申請し，当サービスがこれを承認することによって，利用登録が完了するものとします。</span>
            </li>
            <li>
              <span className={styles.clauseNumber}>2.</span>
              <span>当サービスは，利用登録の申請者に以下の事由があると判断した場合，利用登録の申請を承認しないことがあり，その理由については一切の開示義務を負わないものとします。</span>
            </li>
          </ul>
          <ul className={styles.subList}>
            <li>・利用登録の申請に際して虚偽の事項を届け出た場合</li>
            <li>・本規約に違反したことがある者からの申請である場合</li>
            <li>・その他，当サービスが利用登録を相当でないと判断した場合</li>
          </ul>
        </section>

        <section className={styles.article}>
          <h2>第3条（サービスの内容と役割）</h2>
          <ul className={styles.clauseList}>
            <li>
              <span className={styles.clauseNumber}>1.</span>
              <span>本サービスは，ペットを預けたいユーザー（以下「オーナー」）と，ペットを預かりたいユーザー（以下「ホスト」）との間のマッチングの場を提供するものです。</span>
            </li>
            <li>
              <span className={styles.clauseNumber}>2.</span>
              <span>オーナーとホストの間で成立するペットの預かりに関する契約（以下「個別契約」）は，オーナーとホストとの間で直接成立するものであり，当サービスは個別契約の当事者にはなりません。</span>
            </li>
          </ul>
        </section>

        <section className={styles.article}>
          <h2>第4条（利用料金および支払方法）</h2>
          <ul className={styles.clauseList}>
            <li>
              <span className={styles.clauseNumber}>1.</span>
              <span>ユーザーは，本サービスの利用の対価として，当サービスが別途定め，本ウェブサイトに表示する利用料金を，当サービスが指定する方法により支払うものとします。</span>
            </li>
            <li>
              <span className={styles.clauseNumber}>2.</span>
              <span>決済はすべて本プラットフォームを通じて行われるものとし，オーナーとホストとの間での直接の金銭授受は禁止します。</span>
            </li>
          </ul>
        </section>

        <section className={styles.article}>
          <h2>第5条（禁止事項）</h2>
          <p>ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。</p>
          <ul className={styles.subList}>
            <li>・法令または公序良俗に違反する行為</li>
            <li>・犯罪行為に関連する行為</li>
            <li>・本サービスを通じて知り合ったユーザーと，本サービスを介さずに直接取引を行う行為</li>
            <li>・他のユーザーに対する嫌がらせや誹謗中傷</li>
            <li>・不正な目的を持って本サービスを利用する行為</li>
          </ul>
        </section>

        <section className={styles.article}>
          <h2>第6条（免責事項）</h2>
          <ul className={styles.clauseList}>
            <li>
              <span className={styles.clauseNumber}>1.</span>
              <span>当サービスは，ユーザー間で生じたトラブル（ペットの負傷，病気，死亡，物損等を含みますがこれらに限りません）について，当サービスの故意または重過失がある場合を除き，一切の責任を負わないものとします。</span>
            </li>
            <li>
              <span className={styles.clauseNumber}>2.</span>
              <span>当サービスは，本サービスに関して，ユーザー間または第三者との間において生じた取引，連絡または紛争等について一切責任を負いません。</span>
            </li>
          </ul>
        </section>

        <section className={styles.article}>
          <h2>第7条（準拠法・裁判管轄）</h2>
          <ul className={styles.clauseList}>
            <li>
              <span className={styles.clauseNumber}>1.</span>
              <span>本規約の解釈にあたっては，日本法を準拠法とします。</span>
            </li>
            <li>
              <span className={styles.clauseNumber}>2.</span>
              <span>本サービスに関して紛争が生じた場合には，当サービスの所在地を管轄する裁判所を専属的合意管轄とします。</span>
            </li>
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
