'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Search, Menu, User, PawPrint, Plus, Minus, X } from 'lucide-react';
import styles from './Header.module.css';

const PREFECTURES = [
  "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
  "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
  "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県",
  "静岡県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県",
  "奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県",
  "徳島県", "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県",
  "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"
];

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location, setLocation] = useState('');
  const [dogCounts, setDogCounts] = useState({ small: 0, medium: 0, large: 0 });
  const searchBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDogCount = (size: 'small' | 'medium' | 'large', delta: number) => {
    setDogCounts(prev => ({
      ...prev,
      [size]: Math.max(0, prev[size] + delta)
    }));
  };

  const totalDogs = dogCounts.small + dogCounts.medium + dogCounts.large;

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          <PawPrint size={32} color="var(--primary)" />
          <span>PawBnB</span>
        </Link>

        <div className={`${styles.searchBar} ${activeDropdown ? styles.searchBarActive : ''}`} ref={searchBarRef}>
          <div className={styles.searchSegments}>
            <button 
              className={`${styles.segment} ${activeDropdown === 'location' ? styles.segmentActive : ''}`}
              onClick={() => setActiveDropdown('location')}
            >
              <span className={styles.label}>ロケーション</span>
              <span className={styles.value}>{location || '目的地を検索'}</span>
            </button>
            <div className={styles.divider}></div>
            <button 
              className={`${styles.segment} ${activeDropdown === 'date' ? styles.segmentActive : ''}`}
              onClick={() => setActiveDropdown('date')}
            >
              <span className={styles.label}>日付</span>
              <span className={styles.value}>いつ？</span>
            </button>
            <div className={styles.divider}></div>
            <button 
              className={`${styles.segment} ${styles.lastSegment} ${activeDropdown === 'dogs' ? styles.segmentActive : ''}`}
              onClick={() => setActiveDropdown('dogs')}
            >
              <span className={styles.label}>愛犬の数</span>
              <span className={styles.value}>{totalDogs > 0 ? `犬 ${totalDogs} 匹` : '犬の数を選択'}</span>
            </button>
            <button className={styles.searchIconButton}>
              <Search size={16} color="white" />
            </button>
          </div>

          {activeDropdown === 'location' && (
            <div className={styles.dropdown}>
              <div className={styles.dropdownHeader}>
                <h3>都道府県を選択</h3>
                <button onClick={() => setActiveDropdown(null)}><X size={18} /></button>
              </div>
              <div className={styles.prefectureGrid}>
                {PREFECTURES.map(pref => (
                  <button 
                    key={pref} 
                    className={`${styles.prefectureItem} ${location === pref ? styles.selected : ''}`}
                    onClick={() => { setLocation(pref); setActiveDropdown('date'); }}
                  >
                    {pref}
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeDropdown === 'date' && (
            <div className={styles.dropdown}>
              <div className={styles.dropdownHeader}>
                <h3>日付を選択</h3>
                <button onClick={() => setActiveDropdown(null)}><X size={18} /></button>
              </div>
              <div className={styles.calendarPlaceholder}>
                <div className={styles.calendarGrid}>
                  {Array.from({ length: 31 }, (_, i) => (
                    <div key={i} className={styles.calendarDay}>{i + 1}</div>
                  ))}
                </div>
                <p className={styles.calendarNote}>※カレンダー機能のデモ表示です</p>
              </div>
              <div className={styles.dropdownFooter}>
                <button className={styles.confirmButton} onClick={() => setActiveDropdown('dogs')}>次へ</button>
              </div>
            </div>
          )}

          {activeDropdown === 'dogs' && (
            <div className={`${styles.dropdown} ${styles.dogsDropdown}`}>
              <div className={styles.dropdownHeader}>
                <h3>愛犬の数</h3>
                <button onClick={() => setActiveDropdown(null)}><X size={18} /></button>
              </div>
              <div className={styles.counterList}>
                <div className={styles.counterItem}>
                  <div>
                    <p className={styles.counterName}>小型犬</p>
                    <p className={styles.counterDesc}>10kg未満</p>
                  </div>
                  <div className={styles.counterControls}>
                    <button onClick={() => handleDogCount('small', -1)}><Minus size={16} /></button>
                    <span>{dogCounts.small}</span>
                    <button onClick={() => handleDogCount('small', 1)}><Plus size={16} /></button>
                  </div>
                </div>
                <div className={styles.counterItem}>
                  <div>
                    <p className={styles.counterName}>中型犬</p>
                    <p className={styles.counterDesc}>10kg〜25kg</p>
                  </div>
                  <div className={styles.counterControls}>
                    <button onClick={() => handleDogCount('medium', -1)}><Minus size={16} /></button>
                    <span>{dogCounts.medium}</span>
                    <button onClick={() => handleDogCount('medium', 1)}><Plus size={16} /></button>
                  </div>
                </div>
                <div className={styles.counterItem}>
                  <div>
                    <p className={styles.counterName}>大型犬</p>
                    <p className={styles.counterDesc}>25kg以上</p>
                  </div>
                  <div className={styles.counterControls}>
                    <button onClick={() => handleDogCount('large', -1)}><Minus size={16} /></button>
                    <span>{dogCounts.large}</span>
                    <button onClick={() => handleDogCount('large', 1)}><Plus size={16} /></button>
                  </div>
                </div>
              </div>
              <div className={styles.dropdownFooter}>
                <button className={styles.confirmButton} onClick={() => setActiveDropdown(null)}>完了</button>
              </div>
            </div>
          )}
        </div>

        <div className={styles.userMenu}>
          <Link href="/register" className={styles.registerLink}>会員登録</Link>
          <div className={styles.profileMenu}>
            <Menu size={18} />
            <div className={styles.avatar}>
              <User size={20} color="white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
