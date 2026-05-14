'use client';

import React from 'react';
import { Dog, Calendar, Shield, MapPin, Sparkles } from 'lucide-react';
import styles from './FilterBar.module.css';

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = [
  { id: 'all', label: 'すべて', icon: Sparkles },
  { id: 'small', label: '小型犬', icon: Dog },
  { id: 'medium', label: '中型犬', icon: Dog },
  { id: 'large', label: '大型犬', icon: Dog },
  { id: 'today', label: '本日OK', icon: Calendar },
  { id: 'verified', label: '認証済み', icon: Shield },
];

const FilterBar: React.FC<FilterBarProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className={styles.filterBar}>
      <div className={`container ${styles.container}`}>
        <div className={styles.scrollContainer}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`${styles.filterItem} ${activeFilter === filter.id ? styles.active : ''}`}
              onClick={() => onFilterChange(filter.id)}
            >
              <filter.icon size={24} />
              <span>{filter.label}</span>
            </button>
          ))}
        </div>
        <button className={styles.filterButton}>
          <div className={styles.filterIcon}>
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{display: 'block', height: '14px', width: '14px', fill: 'currentColor'}} aria-hidden="true" role="presentation" focusable="false"><path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
          </div>
          <span>フィルター</span>
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
