'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';
import styles from './HostCalendar.module.css';

type DayStatus = 'available' | 'blocked' | 'booked' | 'default';

const DAYS_OF_WEEK = ['日', '月', '火', '水', '木', '金', '土'];
const MONTHS = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

// Mock booked dates (cannot be toggled by host)
const BOOKED_DATES = new Set(['2026-7-3', '2026-7-4', '2026-7-5']);

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

export default function HostCalendarPage() {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth()); // 0-indexed
  const [blockedDates, setBlockedDates] = useState<Set<string>>(
    new Set(['2026-7-14', '2026-7-15', '2026-7-21', '2026-7-28'])
  );
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [minStay, setMinStay] = useState(1);
  const [maxStay, setMaxStay] = useState(14);
  const [pricePerNight, setPricePerNight] = useState(6300);

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  const getDayKey = (day: number) => `${viewYear}-${viewMonth + 1}-${day}`;

  const getStatus = (day: number): DayStatus => {
    const key = getDayKey(day);
    if (BOOKED_DATES.has(key)) return 'booked';
    if (blockedDates.has(key)) return 'blocked';
    const date = new Date(viewYear, viewMonth, day);
    const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    if (date < todayDate) return 'default';
    return 'available';
  };

  const toggleDay = (day: number) => {
    const key = getDayKey(day);
    if (BOOKED_DATES.has(key)) return; // can't toggle booked days
    const date = new Date(viewYear, viewMonth, day);
    const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    if (date < todayDate) return; // can't toggle past days

    setSelectedDay(key);
    setBlockedDates((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  // Stats
  const availableCount = Array.from({ length: daysInMonth }, (_, i) => i + 1).filter(
    (d) => getStatus(d) === 'available'
  ).length;
  const blockedCount = Array.from({ length: daysInMonth }, (_, i) => i + 1).filter(
    (d) => getStatus(d) === 'blocked'
  ).length;
  const bookedCount = BOOKED_DATES.size;

  return (
    <div className={styles.wrapper}>
      <div className={styles.pageHeader}>
        <h1 className={styles.title}>カレンダー管理</h1>
        <p className={styles.subtitle}>空き日程を設定して、ゲストを受け入れましょう</p>
      </div>

      <div className={styles.mainGrid}>
        {/* Calendar */}
        <div className={styles.calendarCard}>
          {/* Month navigation */}
          <div className={styles.monthNav}>
            <button className={styles.navBtn} onClick={prevMonth}>
              <ChevronLeft size={20} />
            </button>
            <h2 className={styles.monthTitle}>
              {viewYear}年 {MONTHS[viewMonth]}
            </h2>
            <button className={styles.navBtn} onClick={nextMonth}>
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Day-of-week header */}
          <div className={styles.weekHeader}>
            {DAYS_OF_WEEK.map((d) => (
              <div key={d} className={styles.weekDay}>
                {d}
              </div>
            ))}
          </div>

          {/* Days grid */}
          <div className={styles.daysGrid}>
            {/* Empty cells for offset */}
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} className={styles.dayEmpty} />
            ))}

            {/* Day cells */}
            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
              const status = getStatus(day);
              const key = getDayKey(day);
              const isSelected = selectedDay === key;
              return (
                <button
                  key={day}
                  onClick={() => toggleDay(day)}
                  className={[
                    styles.dayCell,
                    status === 'available' ? styles.dayCellAvailable : '',
                    status === 'blocked' ? styles.dayCellBlocked : '',
                    status === 'booked' ? styles.dayCellBooked : '',
                    status === 'default' ? styles.dayCellDefault : '',
                    isSelected ? styles.dayCellSelected : '',
                  ].join(' ')}
                  disabled={status === 'booked' || status === 'default'}
                >
                  <span className={styles.dayNumber}>{day}</span>
                  {status === 'booked' && <span className={styles.dayLabel}>予約済</span>}
                  {status === 'blocked' && <span className={styles.dayLabel}>ブロック</span>}
                  {status === 'available' && <span className={styles.dayLabel}>空き</span>}
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div className={styles.legend}>
            <div className={styles.legendItem}>
              <div className={`${styles.legendDot} ${styles.dotAvailable}`} />
              <span>空き（受付可）</span>
            </div>
            <div className={styles.legendItem}>
              <div className={`${styles.legendDot} ${styles.dotBlocked}`} />
              <span>ブロック（受付不可）</span>
            </div>
            <div className={styles.legendItem}>
              <div className={`${styles.legendDot} ${styles.dotBooked}`} />
              <span>予約済み</span>
            </div>
          </div>

          <div className={styles.tip}>
            <Info size={14} />
            <span>日付をクリックすると「空き」/「ブロック」を切り替えられます</span>
          </div>
        </div>

        {/* Settings panel */}
        <div className={styles.settingsPanel}>
          {/* Monthly summary */}
          <div className={styles.summaryCard}>
            <h3 className={styles.panelTitle}>今月のサマリー</h3>
            <div className={styles.summaryRow}>
              <div className={styles.summaryItem}>
                <div className={`${styles.summaryDot} ${styles.dotAvailable}`} />
                <div>
                  <p className={styles.summaryLabel}>空き日数</p>
                  <p className={styles.summaryValue}>{availableCount}日</p>
                </div>
              </div>
              <div className={styles.summaryItem}>
                <div className={`${styles.summaryDot} ${styles.dotBooked}`} />
                <div>
                  <p className={styles.summaryLabel}>予約済み</p>
                  <p className={styles.summaryValue}>{bookedCount}日</p>
                </div>
              </div>
              <div className={styles.summaryItem}>
                <div className={`${styles.summaryDot} ${styles.dotBlocked}`} />
                <div>
                  <p className={styles.summaryLabel}>ブロック</p>
                  <p className={styles.summaryValue}>{blockedCount}日</p>
                </div>
              </div>
            </div>
          </div>

          {/* Price settings */}
          <div className={styles.settingsCard}>
            <h3 className={styles.panelTitle}>料金設定</h3>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>1泊あたりの料金（円）</label>
              <div className={styles.priceInput}>
                <span className={styles.pricePrefix}>¥</span>
                <input
                  type="number"
                  value={pricePerNight}
                  onChange={(e) => setPricePerNight(Number(e.target.value))}
                  className={styles.input}
                  step={100}
                />
              </div>
            </div>
            <div className={styles.estimatedRevenue}>
              <p className={styles.revenueLabel}>今月の最大収益（概算）</p>
              <p className={styles.revenueValue}>
                ¥{(availableCount * pricePerNight).toLocaleString()}
              </p>
            </div>
          </div>

          {/* Stay settings */}
          <div className={styles.settingsCard}>
            <h3 className={styles.panelTitle}>滞在ルール</h3>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>最少滞在日数</label>
              <div className={styles.stayControl}>
                <button className={styles.stayBtn} onClick={() => setMinStay(Math.max(1, minStay - 1))}>−</button>
                <span className={styles.stayValue}>{minStay}泊</span>
                <button className={styles.stayBtn} onClick={() => setMinStay(Math.min(maxStay, minStay + 1))}>＋</button>
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>最大滞在日数</label>
              <div className={styles.stayControl}>
                <button className={styles.stayBtn} onClick={() => setMaxStay(Math.max(minStay, maxStay - 1))}>−</button>
                <span className={styles.stayValue}>{maxStay}泊</span>
                <button className={styles.stayBtn} onClick={() => setMaxStay(Math.min(30, maxStay + 1))}>＋</button>
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div className={styles.settingsCard}>
            <h3 className={styles.panelTitle}>一括操作</h3>
            <div className={styles.bulkActions}>
              <button
                className={`${styles.bulkBtn} ${styles.bulkBtnAvailable}`}
                onClick={() => setBlockedDates(new Set())}
              >
                今月をすべて空きにする
              </button>
              <button
                className={`${styles.bulkBtn} ${styles.bulkBtnBlocked}`}
                onClick={() =>
                  setBlockedDates(
                    new Set(
                      Array.from({ length: daysInMonth }, (_, i) =>
                        getDayKey(i + 1)
                      ).filter((k) => !BOOKED_DATES.has(k))
                    )
                  )
                }
              >
                今月をすべてブロックする
              </button>
            </div>
          </div>

          <button className={styles.saveBtn}>変更を保存する</button>
        </div>
      </div>
    </div>
  );
}
