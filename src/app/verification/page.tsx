'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import styles from './Verification.module.css';
import { 
  User, 
  CreditCard, 
  Check, 
  X, 
  ChevronRight, 
  Plus, 
  Hourglass,
  Book,
  Car
} from 'lucide-react';

export default function VerificationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const idOptions = [
    { id: 'passport', name: '日本のパスポート', icon: <Book size={20} color="#b91c1c" /> },
    { id: 'license', name: '運転免許証', icon: <Car size={20} color="#0369a1" /> },
    { id: 'mynumber', name: 'マイナンバーカード', icon: <CreditCard size={20} color="#fca5a5" /> },
    { id: 'zairyu', name: '在留カード', icon: <CreditCard size={20} color="#34d399" /> },
  ];

  const faqs = [
    {
      question: '「本人確認」とは？',
      answer: 'PawBnBでは、ユーザー間のトラブルの防止と安全なサービス利用を目的として本人確認の制度を設けています。\nご提出いただいた身分証の情報が他のユーザーや外部に開示されることは一切ありませんのでご安心ください。'
    },
    {
      question: '本人確認の結果はどのように通知されますか？',
      answer: '審査が完了次第、登録されているメールアドレス宛に「承認」もしくは「否認とその理由」が記載されたメールが届きます。承認された場合はそのまま次のステップに進むことができます。'
    },
    {
      question: '本人確認が否認された場合はどうすればいいですか？',
      answer: '通知メールに記載されている否認理由（氏名の不一致、画像が不鮮明など）をご確認いただき、再度正しい情報と鮮明な身分証の写真をアップロードして再申請をお願いいたします。'
    }
  ];

  const handleIdSelect = (id: string) => {
    setSelectedId(id);
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    if (lastName && firstName && selectedId) {
      setIsSubmitted(true);
      window.scrollTo(0, 0);
    }
  };

  const isFormValid = lastName && firstName && selectedId;

  return (
    <main className={styles.main}>
      <Header />
      
      <div className={styles.container}>
        
        {/* Progress Bar */}
        <div className={styles.progressSection}>
          <h2 className={styles.stepTitle}>STEP2: 予約準備</h2>
          <div className={styles.stepper}>
            <div className={styles.stepLine}></div>
            <div className={styles.stepLineFill} style={{ width: isSubmitted ? '50%' : '10%' }}></div>
            
            <div className={styles.stepNode}>
              <div className={`${styles.stepCircle} ${styles.stepCircleActive}`}></div>
              <span className={`${styles.stepLabel} ${styles.stepLabelActive}`}>本人確認</span>
            </div>
            
            <div className={styles.stepNode}>
              <div className={styles.stepCircle}></div>
              <span className={styles.stepLabel}>愛犬カルテ入力</span>
            </div>
            
            <div className={styles.stepNode}>
              <div className={styles.stepCircle}></div>
              <span className={styles.stepLabel}>事前面談</span>
            </div>
          </div>
        </div>

        {!isSubmitted ? (
          /* Verification Form View */
          <>
            <div className={styles.pageHeader}>
              <h1 className={styles.pageTitle}>本人確認申請</h1>
              <p className={styles.pageSubtitle}>
                安全なサービス利用のため、本人確認を行います。<br />
                以下の手順で簡単に完了できます。
              </p>
            </div>

            <div className={styles.stepsInfo}>
              <div className={styles.infoCard}>
                <div className={styles.infoNumber}>1</div>
                <div className={styles.infoText}>
                  <h4><User size={16} className={styles.infoIcon} /> 氏名を入力</h4>
                  <p>身分証に記載されている氏名と同じ表記で入力してください</p>
                </div>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoNumber}>2</div>
                <div className={styles.infoText}>
                  <h4><CreditCard size={16} className={styles.infoIcon} /> 身分証を提出</h4>
                  <p>有効な身分証明書の写真をアップロードしてください</p>
                </div>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoNumber}>3</div>
                <div className={styles.infoText}>
                  <h4><Check size={16} className={styles.infoIcon} /> 審査完了</h4>
                  <p>通常30分以内に審査が完了します</p>
                </div>
              </div>
            </div>

            <div className={styles.formCard}>
              <div className={styles.cardHeader}>
                <User size={20} color="#8cc63f" />
                <h3>氏名入力</h3>
              </div>
              <div className={styles.nameInputs}>
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>姓</label>
                  <input 
                    type="text" 
                    className={styles.textInput} 
                    placeholder="例：山田" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>名</label>
                  <input 
                    type="text" 
                    className={styles.textInput} 
                    placeholder="例：太郎" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>
              <p className={styles.inputNote}>
                <Check size={14} /> 身分証に記載の氏名と一致していることをご確認ください。
              </p>
            </div>

            <div className={styles.formCard}>
              <div className={styles.cardHeader}>
                <CreditCard size={20} color="#8cc63f" />
                <h3>身分証明書の提出</h3>
              </div>
              
              <p className={styles.idInstruction}>以下のいずれかの身分証明書をご用意ください：</p>
              
              <div className={styles.idButtonsGrid}>
                {['パスポート', '運転免許証', 'マイナンバーカード', '住民基本台帳カード'].map((name) => (
                  <div key={name} className={styles.idSelectBtn}>
                    {name}
                  </div>
                ))}
              </div>

              <div className={styles.idRulesBox}>
                <p>※身分証明書には以下の情報が鮮明に写っている必要があります：</p>
                <ul className={styles.idRulesList}>
                  <li>氏名</li>
                  <li>生年月日</li>
                  <li>現住所</li>
                  <li>有効期限（期限切れでないもの）</li>
                </ul>
              </div>

              <button 
                className={`${styles.submitBtn} ${isFormValid ? styles.submitBtnActive : styles.submitBtnDisabled}`}
                onClick={() => setIsModalOpen(true)}
              >
                身分証を提出する
              </button>
              <p className={styles.fileFormats}>対応ファイル形式：JPEG/JPG、GIF、PNG（4MB以下）</p>
            </div>
          </>
        ) : (
          /* Success / Pending View */
          <>
            <div className={styles.pageHeader}>
              <div className={styles.successIcon}>
                <Check size={48} />
              </div>
              <h1 className={styles.pageTitle}>本人確認申請完了</h1>
              <p className={styles.pageSubtitle}>
                本人確認書類の提出を完了しました。<br />
                審査結果は登録されたメールアドレスに通知されます。<br />
                （通常30分以内に完了します）
              </p>
            </div>

            <div className={styles.statusCard}>
              <Hourglass size={48} className={styles.statusIcon} />
              <div className={styles.statusText}>
                <p style={{fontSize: '12px', color: '#666', marginBottom: '4px'}}>審査状況</p>
                <h4>審査中</h4>
                <p>審査が完了次第、メールでお知らせします。<br />その間に次のステップを進めることができます。</p>
              </div>
            </div>
          </>
        )}

        {/* FAQ Section */}
        <div className={styles.faqSection}>
          <div className={styles.faqHeader}>
            <HelpIcon /> よくある質問
          </div>
          <div className={styles.faqList}>
            {faqs.map((faq, idx) => (
              <div key={idx} className={styles.faqItem}>
                <button 
                  className={styles.faqQuestion}
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                >
                  {faq.question}
                  <Plus size={20} className={`${styles.faqIcon} ${openFaqIndex === idx ? styles.faqIconOpen : ''}`} />
                </button>
                {openFaqIndex === idx && (
                  <div className={styles.faqAnswer} style={{ whiteSpace: 'pre-line' }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      <Footer />

      {/* Modal */}
      {isModalOpen && !isSubmitted && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <User size={20} /> 本人確認
              </div>
              <button className={styles.modalCloseBtn} onClick={() => setIsModalOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className={styles.modalBody}>
              <h2 className={styles.modalTitle}>公的身分証の提出</h2>
              <p className={styles.modalSubtitle}>アップロードする公的身分証を選択しましょう</p>
              
              <div className={styles.modalOptionsGrid}>
                {idOptions.map(option => (
                  <button key={option.id} className={styles.modalOptionBtn} onClick={() => { handleIdSelect(option.id); handleSubmit(); }}>
                    <div className={styles.modalOptionIcon}>
                      {option.icon}
                      <span>{option.name}</span>
                    </div>
                    <ChevronRight size={20} color="#ccc" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function HelpIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#8cc63f"/>
      <path d="M9.09009 9.00002C9.3251 8.33169 9.78915 7.76813 10.4001 7.40915C11.011 7.05018 11.7289 6.91896 12.4272 7.03873C13.1255 7.15851 13.7588 7.52154 14.2151 8.06355C14.6713 8.60555 14.9211 9.29154 14.9201 10C14.9201 12 11.9201 13 11.9201 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 17H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
