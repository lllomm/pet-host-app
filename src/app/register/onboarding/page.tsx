'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  User, 
  ShieldCheck, 
  Dog, 
  FileText, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft, 
  Camera, 
  Upload,
  Info
} from 'lucide-react';
import styles from './Onboarding.module.css';

const STEPS = [
  { id: 1, title: '飼い主情報', icon: User },
  { id: 2, title: '本人確認', icon: ShieldCheck },
  { id: 3, title: '愛犬の登録', icon: Dog },
  { id: 4, title: '愛犬カルテ', icon: FileText },
  { id: 5, title: '完了', icon: CheckCircle },
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [idType, setIdType] = useState('');

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, STEPS.length));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <main className={styles.main}>
      <Header />
      
      <div className={`container ${styles.container}`}>
        {/* Progress Stepper */}
        <div className={styles.stepper}>
          {STEPS.map((step) => {
            const Icon = step.icon;
            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;
            
            return (
              <div key={step.id} className={`${styles.stepItem} ${isActive ? styles.active : ''} ${isCompleted ? styles.completed : ''}`}>
                <div className={styles.stepIcon}>
                  {isCompleted ? <CheckCircle size={20} /> : <Icon size={20} />}
                </div>
                <span className={styles.stepTitle}>{step.title}</span>
                {step.id < STEPS.length && <div className={styles.stepLine} />}
              </div>
            );
          })}
        </div>

        <div className={styles.card}>
          {/* Step 1: Profile Info */}
          {currentStep === 1 && (
            <div className={styles.formSection}>
              <div className={styles.sectionHeader}>
                <h1>飼い主プロフィールの登録</h1>
                <p>ホストが安心して受け入れられるよう、あなたの情報を教えてください。</p>
              </div>
              
              <div className={styles.formGrid}>
                <div className={styles.inputGroup}>
                  <label>氏名（漢字）</label>
                  <input type="text" placeholder="山田 太郎" />
                </div>
                <div className={styles.inputGroup}>
                  <label>氏名（カナ）</label>
                  <input type="text" placeholder="ヤマダ タロウ" />
                </div>
                <div className={styles.inputGroupFull}>
                  <label>住所</label>
                  <div className={styles.addressRow}>
                    <input type="text" placeholder="郵便番号" className={styles.zipInput} />
                    <button className={styles.zipButton}>住所検索</button>
                  </div>
                  <input type="text" placeholder="都道府県・市区町村" className={styles.mt12} />
                  <input type="text" placeholder="番地・マンション名など" className={styles.mt12} />
                </div>
                <div className={styles.inputGroup}>
                  <label>電話番号</label>
                  <input type="tel" placeholder="090-0000-0000" />
                </div>
                <div className={styles.inputGroup}>
                  <label>緊急連絡先（氏名・続柄・電話番号）</label>
                  <input type="text" placeholder="山田 花子（妻） 080-0000-0000" />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: ID Verification */}
          {currentStep === 2 && (
            <div className={styles.formSection}>
              <div className={styles.sectionHeader}>
                <h1>本人確認書類の提出</h1>
                <p>安心安全なコミュニティ維持のため、公的な身分証明書による本人確認をお願いしています。</p>
              </div>

              <div className={styles.idSelection}>
                <label className={styles.idOption}>
                  <input type="radio" name="idType" value="license" onChange={(e) => setIdType(e.target.value)} />
                  <div className={styles.idCard}>
                    <span className={styles.idName}>運転免許証</span>
                  </div>
                </label>
                <label className={styles.idOption}>
                  <input type="radio" name="idType" value="mynumber" onChange={(e) => setIdType(e.target.value)} />
                  <div className={styles.idCard}>
                    <span className={styles.idName}>マイナンバーカード</span>
                  </div>
                </label>
                <label className={styles.idOption}>
                  <input type="radio" name="idType" value="passport" onChange={(e) => setIdType(e.target.value)} />
                  <div className={styles.idCard}>
                    <span className={styles.idName}>パスポート</span>
                  </div>
                </label>
              </div>

              <div className={styles.uploadArea}>
                <div className={styles.uploadBox}>
                  <Camera size={48} color="var(--text-light)" />
                  <p>表面をアップロード</p>
                  <button className={styles.uploadBtn}><Upload size={16} /> ファイルを選択</button>
                </div>
                <div className={styles.uploadBox}>
                  <Camera size={48} color="var(--text-light)" />
                  <p>裏面をアップロード</p>
                  <button className={styles.uploadBtn}><Upload size={16} /> ファイルを選択</button>
                </div>
              </div>

              <div className={styles.infoBox}>
                <Info size={18} />
                <p>提出された書類は専門機関により厳重に管理され、他のユーザーに公開されることはありません。</p>
              </div>
            </div>
          )}

          {/* Step 3: Dog Info */}
          {currentStep === 3 && (
            <div className={styles.formSection}>
              <div className={styles.sectionHeader}>
                <h1>愛犬の登録</h1>
                <p>あなたの愛犬の基本情報を教えてください。</p>
              </div>

              <div className={styles.formGrid}>
                <div className={styles.inputGroup}>
                  <label>名前</label>
                  <input type="text" placeholder="ポチ" />
                </div>
                <div className={styles.inputGroup}>
                  <label>犬種</label>
                  <input type="text" placeholder="柴犬" />
                </div>
                <div className={styles.inputGroup}>
                  <label>性別</label>
                  <select className={styles.select}>
                    <option>オス（去勢済み）</option>
                    <option>オス（未去勢）</option>
                    <option>メス（避妊済み）</option>
                    <option>メス（未避妊）</option>
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <label>生年月日 / 年齢</label>
                  <input type="text" placeholder="例: 2021年4月 または 3歳" />
                </div>
                <div className={styles.inputGroupFull}>
                  <label>ワクチンの接種状況</label>
                  <div className={styles.checkboxGroup}>
                    <label className={styles.checkboxLabel}>
                      <input type="checkbox" /> 混合ワクチン（1年以内）を接種済み
                    </label>
                    <label className={styles.checkboxLabel}>
                      <input type="checkbox" /> 狂犬病予防ワクチン（1年以内）を接種済み
                    </label>
                  </div>
                </div>
                <div className={styles.inputGroupFull}>
                  <label>ワクチン証明書の写真</label>
                  <div className={styles.miniUpload}>
                    <Upload size={20} />
                    <span>証明書をアップロード（任意・予約時必須）</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Dog Karute */}
          {currentStep === 4 && (
            <div className={styles.formSection}>
              <div className={styles.sectionHeader}>
                <h1>愛犬カルテ</h1>
                <p>お泊り時にホストが参考にします。詳細に入力するほどマッチングしやすくなります。</p>
              </div>

              <div className={styles.formGrid}>
                <div className={styles.inputGroupFull}>
                  <label>食事について（フードの種類・銘柄・量・回数）</label>
                  <textarea placeholder="例: ロイヤルカナンのドライフードを朝晩2回、40gずつ。おやつはアレルギーのためジャーキーのみ。" rows={3} />
                </div>
                <div className={styles.inputGroupFull}>
                  <label>お散歩について（時間・回数・注意点）</label>
                  <textarea placeholder="例: 朝晩2回、各20分程度。他の犬を見ると吠えてしまうので注意が必要です。" rows={3} />
                </div>
                <div className={styles.inputGroupFull}>
                  <label>理解しているコマンド</label>
                  <input type="text" placeholder="例: お座り、待て、伏せ、お手" />
                </div>
                <div className={styles.inputGroup}>
                  <label>既往歴・持病</label>
                  <input type="text" placeholder="例: 1年前に皮膚炎、現在は完治" />
                </div>
                <div className={styles.inputGroup}>
                  <label>かかりつけ動物病院</label>
                  <input type="text" placeholder="例: 〇〇動物病院（電話: 03-XXXX-XXXX）" />
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Completion */}
          {currentStep === 5 && (
            <div className={styles.successSection}>
              <div className={styles.successCelebration}>
                <CheckCircle size={80} color="var(--primary)" />
              </div>
              <h1>準備が整いました！</h1>
              <p>
                プロフィールの入力ありがとうございます。<br />
                これでホストへの予約・相談ができるようになりました。
              </p>
              <div className={styles.nextSteps}>
                <h3>次のステップ</h3>
                <div className={styles.stepCard}>
                  <div className={styles.stepNum}>1</div>
                  <p>お近くのホストを探して、まずは「相談」してみましょう。</p>
                </div>
                <div className={styles.stepCard}>
                  <div className={styles.stepNum}>2</div>
                  <p>ホストとの「事前面談」を行って、愛犬との相性を確認します。</p>
                </div>
              </div>
              <button className={styles.finishBtn} onClick={() => window.location.href = '/'}>
                ホストを探しに行く
              </button>
            </div>
          )}

          {/* Action Buttons */}
          {currentStep < 5 && (
            <div className={styles.actions}>
              <button 
                className={styles.backBtn} 
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                <ArrowLeft size={18} /> 戻る
              </button>
              <button className={styles.nextBtn} onClick={nextStep}>
                {currentStep === 4 ? '登録を完了する' : '次へ進む'} <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
