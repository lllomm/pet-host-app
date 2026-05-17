'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import styles from './Legal.module.css';

export default function LegalPage() {
  return (
    <main className={styles.main}>
      <Header />
      
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>特定商取引法に基づく表記</h1>
          <p className={styles.lastUpdated}>最終更新日：2026年5月18日</p>
        </div>
      </header>

      <div className={styles.content}>
        <p className={styles.intro}>
          特定商取引法に基づく表記は以下の通りです。本サービスにおけるペットの預かりサービスは、各ホストが直接提供するものであり、当サービスはマッチングプラットフォームとしてのシステム提供を行っています。
        </p>

        <div className={styles.tableWrapper}>
          <table className={styles.legalTable}>
            <tbody>
              <tr>
                <th>事業者の名称</th>
                <td>PawBnB Inc.（仮）</td>
              </tr>
              <tr>
                <th>代表者名</th>
                <td>代表取締役 ○○ ○○</td>
              </tr>
              <tr>
                <th>所在地</th>
                <td>
                  〒000-0000<br />
                  東京都○○区○○ 1-2-3
                </td>
              </tr>
              <tr>
                <th>お問い合わせ先</th>
                <td>
                  電話番号：03-0000-0000<br />
                  （受付時間：平日 10:00〜18:00）<br />
                  メールアドレス：support@pawbnb.example.com<br />
                  ※サービスに関するお問い合わせは、極力メールまたはお問い合わせフォームよりお願いいたします。
                </td>
              </tr>
              <tr>
                <th>利用料金（システム手数料）</th>
                <td>
                  本サービスにおけるシステム利用料は、各予約成立時に表示される金額に準じます。<br />
                  ホストが設定するペット預かり代金については、各ホストのプロフィールおよび予約画面にて明示されます。
                </td>
              </tr>
              <tr>
                <th>利用料金以外に必要な費用</th>
                <td>
                  当サイトのページの閲覧、ソフトウェアのダウンロード等に必要となるインターネット接続料金、通信料金等はお客様の負担となります。
                </td>
              </tr>
              <tr>
                <th>支払時期および支払方法</th>
                <td>
                  <strong>支払方法：</strong> クレジットカード決済<br />
                  <strong>支払時期：</strong> 予約リクエストがホストに承認され、予約が確定した時点で決済が行われます。
                </td>
              </tr>
              <tr>
                <th>サービスの提供時期</th>
                <td>
                  プラットフォームの機能（メッセージング、予約管理等）は、会員登録後すぐにご利用いただけます。<br />
                  ペットの預かりサービス自体は、予約完了時に指定された日時にホストより提供されます。
                </td>
              </tr>
              <tr>
                <th>キャンセル・返金に関する事項</th>
                <td>
                  予約確定後のキャンセルについては、当サービスが定めるキャンセルポリシーに従い、キャンセル料が発生する場合があります。<br />
                  <br />
                  ・ご利用日の○日前までのキャンセル：全額返金<br />
                  ・ご利用日の○日前以降のキャンセル：料金の○%<br />
                  <br />
                  ※プラットフォームのシステム手数料については、いかなる場合も返金対象外となることがあります。詳細は利用規約をご確認ください。
                </td>
              </tr>
              <tr>
                <th>動作環境</th>
                <td>
                  本サービスの利用に必要なシステム要件（対応OS、ブラウザのバージョン等）は、当サイトのサポートページにて案内しています。
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

      <Footer />
    </main>
  );
}
