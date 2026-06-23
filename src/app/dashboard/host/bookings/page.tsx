'use client';

import React, { useState } from 'react';
import { CheckCircle, XCircle, MessageSquare, ChevronRight, Clock } from 'lucide-react';
import styles from '../../bookings/Bookings.module.css';
import hostStyles from './HostBookings.module.css';

type HostTab = 'requests' | 'upcoming' | 'past';

const mockRequests = [
  {
    id: 'req001',
    guestName: '佐藤 翔太',
    guestAvatar: '👦',
    guestVerified: true,
    petName: 'ムギ',
    petType: 'トイプードル・メス・2歳',
    dateFrom: '2026年7月15日 (水)',
    dateTo: '2026年7月18日 (土)',
    nights: 3,
    totalPrice: 18900,
    message: '初めてのご利用です。ムギはとても人懐っこい子なのでよろしくお願いします。アレルギーなどはありません。',
    requestedAt: '10分前',
  },
  {
    id: 'req002',
    guestName: '伊藤 彩香',
    guestAvatar: '👩',
    guestVerified: true,
    petName: 'ソラ',
    petType: 'ゴールデンレトリバー・オス・4歳',
    dateFrom: '2026年7月22日 (水)',
    dateTo: '2026年7月24日 (金)',
    nights: 2,
    totalPrice: 12600,
    message: '旅行のため2泊お願いしたいです。お散歩は1日2回必要です。',
    requestedAt: '1時間前',
  },
];

const mockUpcoming = [
  {
    id: 'up001',
    guestName: '中村 隆一',
    guestAvatar: '🧔',
    petName: 'チョコ',
    petType: 'チワワ・オス・1歳',
    dateFrom: '2026年7月3日 (金)',
    dateTo: '2026年7月5日 (日)',
    nights: 2,
    totalPrice: 12600,
    status: '確定済み',
    statusColor: 'green',
    image: '🐩',
  },
];

const mockPast = [
  {
    id: 'past001',
    guestName: '林 美穂',
    guestAvatar: '👩',
    petName: 'レオ',
    petType: 'ラブラドール・オス・3歳',
    dateFrom: '2026年6月10日 (火)',
    dateTo: '2026年6月12日 (木)',
    nights: 2,
    totalPrice: 12600,
    status: '完了',
    statusColor: 'gray',
    image: '🐕',
    reviewed: true,
  },
  {
    id: 'past002',
    guestName: '松本 健',
    guestAvatar: '🧑',
    petName: 'モモ',
    petType: 'ポメラニアン・メス・5歳',
    dateFrom: '2026年5月20日 (水)',
    dateTo: '2026年5月23日 (土)',
    nights: 3,
    totalPrice: 18900,
    status: '完了',
    statusColor: 'gray',
    image: '🐕‍🦺',
    reviewed: false,
  },
];

export default function HostBookingsPage() {
  const [activeTab, setActiveTab] = useState<HostTab>('requests');
  const [approvedIds, setApprovedIds] = useState<Set<string>>(new Set());
  const [declinedIds, setDeclinedIds] = useState<Set<string>>(new Set());

  const handleApprove = (id: string) => {
    setApprovedIds((prev) => new Set([...prev, id]));
  };
  const handleDecline = (id: string) => {
    setDeclinedIds((prev) => new Set([...prev, id]));
  };

  const pendingRequests = mockRequests.filter(
    (r) => !approvedIds.has(r.id) && !declinedIds.has(r.id)
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.pageHeader}>
        <h1 className={styles.title}>予約管理（ホスト）</h1>
        <p className={styles.subtitle}>ゲストからの予約リクエストと受け入れ管理</p>
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        <button
          className={activeTab === 'requests' ? styles.tabActive : styles.tab}
          onClick={() => setActiveTab('requests')}
        >
          <Clock size={14} />
          リクエスト（承認待ち）
          {pendingRequests.length > 0 && (
            <span className={`${styles.tabCount} ${hostStyles.urgentCount}`}>
              {pendingRequests.length}
            </span>
          )}
        </button>
        <button
          className={activeTab === 'upcoming' ? styles.tabActive : styles.tab}
          onClick={() => setActiveTab('upcoming')}
        >
          今後のゲスト
          <span className={styles.tabCount}>{mockUpcoming.length}</span>
        </button>
        <button
          className={activeTab === 'past' ? styles.tabActive : styles.tab}
          onClick={() => setActiveTab('past')}
        >
          過去のゲスト
          <span className={styles.tabCount}>{mockPast.length}</span>
        </button>
      </div>

      {/* Content */}
      <div className={styles.list}>
        {/* ── Requests tab ── */}
        {activeTab === 'requests' && (
          <>
            {pendingRequests.length === 0 ? (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>🎉</div>
                <h3>すべてのリクエストに対応しました</h3>
                <p>新しいリクエストが届いたらここに表示されます</p>
              </div>
            ) : (
              pendingRequests.map((req) => (
                <div key={req.id} className={styles.requestCard}>
                  {/* Guest info */}
                  <div className={styles.cardInfo}>
                    <div className={styles.cardTop}>
                      <span className={`${styles.statusBadge} ${hostStyles.requestBadgePulse}`}>
                        ⏳ 回答待ち — {req.requestedAt}
                      </span>
                    </div>
                    <div className={styles.guestInfo}>
                      <div className={styles.guestAvatar}>{req.guestAvatar}</div>
                      <div className={styles.guestDetails}>
                        <strong>{req.guestName}</strong>
                        <p>
                          {req.guestVerified && '✓ 本人確認済み'}
                        </p>
                      </div>
                    </div>

                    <div className={hostStyles.petInfo}>
                      <span>🐾 ペット：{req.petName}（{req.petType}）</span>
                    </div>

                    <div className={styles.details}>
                      <span>📅 {req.dateFrom} 〜 {req.dateTo}</span>
                      <span>🌙 {req.nights}泊</span>
                      <span>💰 ¥{req.totalPrice.toLocaleString()}</span>
                    </div>

                    <div className={hostStyles.messageBlock}>
                      <p className={hostStyles.messageLabel}>ゲストからのメッセージ</p>
                      <p className={hostStyles.messageText}>&ldquo;{req.message}&rdquo;</p>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className={hostStyles.requestActions}>
                    <button className={styles.approveBtn} onClick={() => handleApprove(req.id)}>
                      <CheckCircle size={16} />
                      承認する
                    </button>
                    <button className={styles.declineBtn} onClick={() => handleDecline(req.id)}>
                      <XCircle size={16} />
                      お断りする
                    </button>
                    <button className={styles.actionBtn}>
                      <MessageSquare size={16} />
                      メッセージ
                    </button>
                  </div>
                </div>
              ))
            )}

            {/* Approved/Declined confirmation messages */}
            {[...approvedIds].map((id) => {
              const req = mockRequests.find((r) => r.id === id);
              return req ? (
                <div key={`approved-${id}`} className={hostStyles.confirmationCard}>
                  <CheckCircle size={20} color="#16a34a" />
                  <p>
                    <strong>{req.guestName}</strong> さんの予約を承認しました 🎉
                  </p>
                </div>
              ) : null;
            })}
            {[...declinedIds].map((id) => {
              const req = mockRequests.find((r) => r.id === id);
              return req ? (
                <div key={`declined-${id}`} className={hostStyles.confirmationCardRed}>
                  <XCircle size={20} color="#dc2626" />
                  <p>
                    <strong>{req.guestName}</strong> さんのリクエストをお断りしました
                  </p>
                </div>
              ) : null;
            })}
          </>
        )}

        {/* ── Upcoming tab ── */}
        {activeTab === 'upcoming' &&
          mockUpcoming.map((booking) => (
            <div key={booking.id} className={styles.bookingCard}>
              <div className={styles.cardImage}>{booking.image}</div>
              <div className={styles.cardInfo}>
                <div className={styles.cardTop}>
                  <span className={`${styles.statusBadge} ${styles.statusGreen}`}>
                    {booking.status}
                  </span>
                </div>
                <h3 className={styles.hostName}>
                  {booking.guestAvatar} {booking.guestName} さん
                </h3>
                <div className={hostStyles.petInfo}>
                  <span>🐾 {booking.petName}（{booking.petType}）</span>
                </div>
                <div className={styles.details}>
                  <span>📅 {booking.dateFrom} 〜 {booking.dateTo}</span>
                  <span>🌙 {booking.nights}泊</span>
                </div>
                <p className={styles.price}>¥{booking.totalPrice.toLocaleString()}</p>
              </div>
              <div className={styles.cardActions}>
                <button className={styles.actionBtn}>
                  <MessageSquare size={16} />
                  連絡する
                </button>
                <a className={styles.actionLink} href="#">
                  詳細 <ChevronRight size={14} />
                </a>
              </div>
            </div>
          ))}

        {/* ── Past tab ── */}
        {activeTab === 'past' &&
          mockPast.map((booking) => (
            <div key={booking.id} className={styles.bookingCard}>
              <div className={styles.cardImage}>{booking.image}</div>
              <div className={styles.cardInfo}>
                <div className={styles.cardTop}>
                  <span className={`${styles.statusBadge} ${styles.statusGray}`}>
                    {booking.status}
                  </span>
                </div>
                <h3 className={styles.hostName}>
                  {booking.guestAvatar} {booking.guestName} さん
                </h3>
                <div className={hostStyles.petInfo}>
                  <span>🐾 {booking.petName}（{booking.petType}）</span>
                </div>
                <div className={styles.details}>
                  <span>📅 {booking.dateFrom} 〜 {booking.dateTo}</span>
                  <span>🌙 {booking.nights}泊</span>
                </div>
                <p className={styles.price}>¥{booking.totalPrice.toLocaleString()}</p>
              </div>
              <div className={styles.cardActions}>
                {!booking.reviewed ? (
                  <button className={`${styles.actionBtn} ${styles.actionBtnStar}`}>
                    ⭐ レビューを書く
                  </button>
                ) : (
                  <span className={styles.reviewedTag}>✓ レビュー済み</span>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
