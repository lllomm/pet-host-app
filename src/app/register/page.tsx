'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Mail, User, Globe, Dog, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import styles from './Register.module.css';

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    petName: '',
    petBreed: '',
    petSize: 'medium',
    petAge: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const renderStepIndicator = () => (
    <div className={styles.stepper}>
      <div className={`${styles.step} ${step >= 1 ? styles.active : ''}`}>1</div>
      <div className={styles.line}></div>
      <div className={`${styles.step} ${step >= 2 ? styles.active : ''}`}>2</div>
      <div className={styles.line}></div>
      <div className={`${styles.step} ${step >= 3 ? styles.active : ''}`}>3</div>
    </div>
  );

  return (
    <main>
      <Header />
      <div className={styles.container}>
        <div className={styles.card}>
          {step < 3 && renderStepIndicator()}

          {step === 1 && (
            <>
              <div className={styles.header}>
                <h1>アカウントを作成</h1>
                <p>愛犬にぴったりのホストを見つけましょう</p>
              </div>

              <div className={styles.socialButtons}>
                <button className={styles.socialButton}>
                  <Globe size={20} />
                  Googleで登録
                </button>
              </div>

              <div className={styles.divider}>
                <span>またはメールアドレスで登録</span>
              </div>

              <form className={styles.form} onSubmit={handleNext}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">氏名</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="山田 太郎" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">メールアドレス</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="example@pawbnb.jp" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="password">パスワード</label>
                  <input 
                    type="password" 
                    id="password" 
                    placeholder="8文字以上の英数字" 
                    required 
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <p className={styles.agreementText}>
                  登録ボタンをクリックすることで、<a href="#">利用規約</a>および<a href="#">プライバシーポリシー</a>に同意したものとみなされます。
                </p>

                <button type="submit" className={styles.submitButton}>
                  次へ進む <ArrowRight size={18} />
                </button>
              </form>
            </>
          )}

          {step === 2 && (
            <>
              <div className={styles.header}>
                <h1>ペットの情報を登録</h1>
                <p>あなたの愛犬について教えてください</p>
              </div>

              <form className={styles.form} onSubmit={handleNext}>
                <div className={styles.inputGroup}>
                  <label htmlFor="petName">ペットの名前</label>
                  <input 
                    type="text" 
                    id="petName" 
                    placeholder="例: ポチ" 
                    required 
                    value={formData.petName}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="petBreed">犬種</label>
                  <input 
                    type="text" 
                    id="petBreed" 
                    placeholder="例: 柴犬、トイプードル" 
                    required 
                    value={formData.petBreed}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="petAge">年齢</label>
                  <input 
                    type="number" 
                    id="petAge" 
                    placeholder="例: 3" 
                    required 
                    value={formData.petAge}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="petSize">サイズ</label>
                  <select 
                    id="petSize" 
                    value={formData.petSize}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="small">小型犬 (5kg未満)</option>
                    <option value="medium">中型犬 (5kg〜15kg)</option>
                    <option value="large">大型犬 (15kg以上)</option>
                  </select>
                </div>

                <div className={styles.buttonGroup}>
                  <button type="button" className={styles.backButton} onClick={handleBack}>
                    <ArrowLeft size={18} /> 戻る
                  </button>
                  <button type="submit" className={styles.submitButton}>
                    登録を完了する
                  </button>
                </div>
              </form>
            </>
          )}

          {step === 3 && (
            <div className={styles.successWrapper}>
              <div className={styles.successIcon}>
                <CheckCircle size={64} color="var(--primary)" />
              </div>
              <div className={styles.header}>
                <h1>登録完了！</h1>
                <p>{formData.name}さん、PawBnBへようこそ。</p>
              </div>
              <div className={styles.summaryCard}>
                <div className={styles.petAvatar}>
                  <Dog size={32} />
                </div>
                <div className={styles.summaryInfo}>
                  <strong>{formData.petName}</strong>
                  <span>{formData.petBreed} / {formData.petAge}歳</span>
                </div>
              </div>
              <p className={styles.successMessage}>
                アカウントの作成が完了しました。メールアドレス（{formData.email}）に確認メールを送信しました。
              </p>
              <button 
                className={styles.submitButton}
                onClick={() => window.location.href = '/register/onboarding'}
              >
                ダッシュボードへ移動
              </button>
            </div>
          )}

          {step < 3 && (
            <div className={styles.footer}>
              既にアカウントをお持ちですか？ <a href="#">ログイン</a>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
