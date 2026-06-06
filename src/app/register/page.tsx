'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Eye, EyeOff, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import styles from './Register.module.css';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+81(日本)');
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (agreed && email && password && phone) {
      // PDFの仕様に則り、SMS認証画面（未実装）またはオンボーディングへ進む
      window.location.href = '/verification'; // 仮の遷移先
    }
  };

  const isFormValid = email && password && phone && agreed;

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <div className={styles.card}>
          
          <h1 className={styles.title}>新規アカウント登録</h1>

          <div className={styles.recommendedSection}>
            <span className={styles.recommendedLabel}>＼ おすすめ ／</span>
            <button className={styles.petgoButton}>
              {/* Dummy Petgo logo / icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.5 10C16.33 10 17 10.67 17 11.5C17 12.33 16.33 13 15.5 13C14.67 13 14 12.33 14 11.5C14 10.67 14.67 10 15.5 10ZM8.5 10C9.33 10 10 10.67 10 11.5C10 12.33 9.33 13 8.5 13C7.67 13 7 12.33 7 11.5C7 10.67 7.67 10 8.5 10ZM12 17.5C9.67 17.5 7.69 16.04 6.89 14H17.11C16.31 16.04 14.33 17.5 12 17.5Z" fill="white"/>
              </svg>
              petgo ペットゴーアカウントで登録する
            </button>
            <div className={styles.petgoBenefits}>
              <div className={styles.benefitItem}>
                <CheckCircle2 size={14} color="#ea580c" /> 電話番号不要
              </div>
              <div className={styles.benefitItem}>
                <CheckCircle2 size={14} color="#ea580c" /> パスワード不要
              </div>
              <div className={styles.benefitItem}>
                <CheckCircle2 size={14} color="#ea580c" /> かんたん登録
              </div>
            </div>
          </div>

          <div className={styles.divider}>または</div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>メールアドレス <span className={styles.required}>*</span></label>
              <input 
                type="email" 
                className={styles.input}
                placeholder="doglover@pawbnb.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <p className={styles.inputNote}>※迷惑メールの設定などをしている場合には、あらかじめ送信元メールを受信できるよう設定をお願いします。</p>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>パスワード <span className={styles.required}>*</span></label>
              <div className={styles.inputWrapper}>
                <input 
                  type={showPassword ? "text" : "password"}
                  className={styles.input}
                  placeholder="半角英数8文字以上"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={8}
                  required
                />
                <button 
                  type="button" 
                  className={styles.passwordToggle}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <p className={styles.inputNote}>8文字以上の英数字を含むパスワードを設定してください</p>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>携帯電話 <span className={styles.required}>*</span></label>
              <div className={styles.phoneGroup}>
                <select 
                  className={styles.phoneSelect}
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                >
                  <option value="+81(日本)">+81(日本)</option>
                  <option value="+1(アメリカ)">+1(アメリカ)</option>
                  <option value="+82(韓国)">+82(韓国)</option>
                </select>
                <input 
                  type="tel" 
                  className={styles.input}
                  placeholder="09012345678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <p className={styles.inputNote} style={{ marginTop: '8px' }}>
                <CheckCircle2 size={12} className={styles.inputNoteIcon} />
                不正利用防止のため、1つの電話番号で作成できるアカウントは1つまでです。
              </p>
              <p className={styles.inputNote} style={{ color: '#8cc63f' }}>
                <span className={styles.inputNoteIcon}>ⓘ</span>
                携帯電話のSMS（ショートメッセージサービス）に送られる認証コードを次のページにて10分以内に入力ください。
              </p>
            </div>

            <div className={styles.agreementBox}>
              <input 
                type="checkbox" 
                id="agreement" 
                className={styles.checkbox}
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <label htmlFor="agreement" className={styles.agreementText}>
                <Link href="/terms" className={styles.link}>利用規約</Link>、
                <Link href="/privacy" className={styles.link}>プライバシーポリシー</Link>に同意する
              </label>
            </div>

            <button 
              type="submit" 
              className={`${styles.submitBtn} ${isFormValid ? styles.submitBtnActive : styles.submitBtnDisabled}`}
              disabled={!isFormValid}
            >
              同意して次へ進む
            </button>
          </form>

          <div className={styles.divider}>または</div>

          <Link href="/login" className={styles.loginBtn}>
            アカウントをお持ちの方はログイン
          </Link>

        </div>
      </div>
      <Footer />
    </main>
  );
}
