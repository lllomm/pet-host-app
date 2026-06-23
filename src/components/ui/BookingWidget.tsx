'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Star, ChevronLeft, ChevronRight, Moon, Sun } from 'lucide-react';
import styles from './BookingWidget.module.css';

interface BookingWidgetProps {
  price: number;
  rating: number;
}

const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const getStatus = (date: Date) => {
  // Mock logic for status
  const day = date.getDate();
  if (day % 4 === 0) return 'full';
  if (day % 3 === 0) return 'few';
  return 'available';
};

const getStatusIcon = (status: string) => {
  if (status === 'full') return '×';
  if (status === 'few') return '△';
  return '○';
};

const dayNames = ['日', '月', '火', '水', '木', '金', '土'];

const BookingWidget: React.FC<BookingWidgetProps> = ({ price, rating }) => {
  const router = useRouter();
  // Use May 2026 as current display mock since context suggests 2026-05
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 4, 1)); // May 1, 2026
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [bookingType, setBookingType] = useState<'stay' | 'daycare' | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleSelectDate = (date: Date, status: string) => {
    if (status !== 'full') {
      setSelectedDate(date);
      setStartTime(null);
      setEndTime(null);
    }
  };

  const handleTimeClick = (time: number) => {
    if (startTime === null || (startTime !== null && endTime !== null)) {
      setStartTime(time);
      setEndTime(null);
    } else if (time > startTime) {
      setEndTime(time);
    } else {
      setStartTime(time);
      setEndTime(null);
    }
  };

  const daycarePricePerHour = Math.round(price * 0.2);
  const currentPrice = bookingType === 'daycare' ? daycarePricePerHour : price;
  const unit = bookingType === 'daycare' ? '時間' : '泊';
  
  const hours = (startTime !== null && endTime !== null) ? (endTime - startTime) : 0;
  const quantity = bookingType === 'stay' ? (selectedDate ? 1 : 0) : (bookingType === 'daycare' ? hours : 0);
  const subtotal = currentPrice * quantity;
  
  // Generate calendar grid
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const daysInMonth = getDaysInMonth(year, month);
  
  const calendarDays = [];
  for (let i = 0; i < firstDayOfWeek; i++) calendarDays.push(null);
  for (let i = 1; i <= daysInMonth; i++) calendarDays.push(new Date(year, month, i));
  const remainder = calendarDays.length % 7;
  if (remainder !== 0) {
    for (let i = 0; i < 7 - remainder; i++) calendarDays.push(null);
  }

  const timeSlots = [];
  for (let i = 8; i <= 20; i++) {
    timeSlots.push(i);
  }

  const isTimeAvailable = (time: number) => {
    // Mock unavailable slots (e.g., lunch break or early morning)
    if (time === 12 || time === 13) return false;
    return true;
  };

  return (
    <div className={styles.widget}>
      <div className={styles.header}>
        <div className={styles.priceRow}>
          {bookingType ? (
            <>
              <span className={styles.price}>¥{currentPrice.toLocaleString()}</span>
              <span className={styles.unit}>{unit}</span>
            </>
          ) : (
            <span className={styles.price}>¥{price.toLocaleString()}〜</span>
          )}
        </div>
        <div className={styles.rating}>
          <Star size={12} fill="currentColor" />
          <span className={styles.ratingValue}>{rating}</span>
          <span className={styles.reviews}>· 12 件のレビュー</span>
        </div>
      </div>

      <div className={styles.typeSelection}>
        <div 
          className={`${styles.typeButton} ${bookingType === 'stay' ? styles.active : ''}`}
          onClick={() => { setBookingType('stay'); setSelectedDate(null); setStartTime(null); setEndTime(null); }}
        >
          <Moon size={24} className={styles.typeIcon} />
          <span>宿泊</span>
        </div>
        <div 
          className={`${styles.typeButton} ${bookingType === 'daycare' ? styles.active : ''}`}
          onClick={() => { setBookingType('daycare'); setSelectedDate(null); setStartTime(null); setEndTime(null); }}
        >
          <Sun size={24} className={styles.typeIcon} />
          <span>一時預かり</span>
        </div>
      </div>

      {bookingType && (
        <>

      <div className={styles.calendarContainer}>
        <div className={styles.calendarHeader}>
          <button className={styles.navButton} onClick={handlePrevMonth}>
            <ChevronLeft size={18} />
          </button>
          <span className={styles.currentMonth}>
            {year}年{month + 1}月
          </span>
          <button className={styles.navButton} onClick={handleNextMonth}>
            <ChevronRight size={18} />
          </button>
        </div>
        
        <div className={styles.calendarGrid}>
          {dayNames.map((day, idx) => (
            <div key={`header-${idx}`} className={`${styles.dayHeader} ${idx === 0 ? styles.sun : idx === 6 ? styles.sat : ''}`}>
              {day}
            </div>
          ))}
          {calendarDays.map((d, i) => {
            if (!d) return <div key={`empty-${i}`} className={`${styles.calendarCell} ${styles.empty}`} />;
            const status = getStatus(d);
            const isSelected = selectedDate && d.getTime() === selectedDate.getTime();
            return (
              <div key={i} className={styles.calendarCell}>
                <span className={styles.dateNum}>{d.getDate()}</span>
                <div 
                  className={`${styles.statusIcon} ${styles[status]} ${isSelected ? styles.selected : ''}`}
                  onClick={() => handleSelectDate(d, status)}
                >
                  {getStatusIcon(status)}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedDate && bookingType === 'daycare' && (
        <div className={styles.timeSlotSection}>
          <div className={styles.timeSlotHeader}>
            <span className={styles.timeSlotTitle}>時間帯を選択</span>
            {startTime !== null && endTime !== null && (
              <span className={styles.timeRangeSummary}>
                {startTime}:00 - {endTime}:00 ({hours}時間)
              </span>
            )}
          </div>
          <div className={styles.timeSlotGrid}>
            {timeSlots.map((time) => {
              const available = isTimeAvailable(time);
              const isSelected = time === startTime || time === endTime;
              const inRange = startTime !== null && endTime !== null && time > startTime && time < endTime;
              return (
                <div 
                  key={time} 
                  className={`${styles.timeChip} ${isSelected ? styles.selected : ''} ${inRange ? styles.inRange : ''} ${!available ? styles.disabled : ''}`}
                  onClick={() => available && handleTimeClick(time)}
                >
                  {time}:00
                </div>
              );
            })}
          </div>
        </div>
      )}

      {selectedDate ? (
        <div className={styles.selectionInfo}>
          <span className={styles.selectionLabel}>選択中:</span>
          <span className={styles.selectionValue}>
            {selectedDate.getFullYear()}/{selectedDate.getMonth() + 1}/{selectedDate.getDate()} ({dayNames[selectedDate.getDay()]}) 
            {bookingType === 'stay' ? ' から1泊' : (startTime !== null && endTime !== null ? ` ${startTime}:00〜${endTime}:00` : ' 時間を選択してください')}
          </span>
        </div>
      ) : (
        <div className={styles.finePrint} style={{marginBottom: 16}}>
          カレンダーから希望日（○または△）を選択してください
        </div>
      )}

      <button 
        className={styles.reserveButton} 
        style={{ 
          opacity: (selectedDate && (bookingType === 'stay' || (startTime !== null && endTime !== null))) ? 1 : 0.5, 
          cursor: (selectedDate && (bookingType === 'stay' || (startTime !== null && endTime !== null))) ? 'pointer' : 'not-allowed' 
        }}
        disabled={!(selectedDate && (bookingType === 'stay' || (startTime !== null && endTime !== null)))}
        onClick={() => router.push('/checkout')}
      >
        予約する
      </button>
      
      {selectedDate && (bookingType === 'stay' || (startTime !== null && endTime !== null)) && (
        <>
          <p className={styles.finePrint}>まだ料金は請求されません</p>

          <div className={styles.calc}>
            <div className={styles.calcRow}>
              <span>¥{currentPrice.toLocaleString()} x {quantity} {unit}</span>
              <span>¥{subtotal.toLocaleString()}</span>
            </div>
            <div className={styles.calcRow}>
              <span>清掃料金</span>
              <span>¥2,000</span>
            </div>
            <div className={styles.calcRow}>
              <span>PawBnB サービス料</span>
              <span>¥1,500</span>
            </div>
          </div>

          <hr className={styles.divider} />

          <div className={`${styles.calcRow} ${styles.total}`}>
            <span>合計</span>
            <span>¥{(subtotal + 3500).toLocaleString()}</span>
          </div>
        </>
      )}
        </>
      )}
    </div>
  );
};

export default BookingWidget;
