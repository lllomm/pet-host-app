import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BookingWidget from '@/components/ui/BookingWidget';
import { Star, ShieldCheck, MapPin, Calendar, Info, Award, MessageSquare, Heart } from 'lucide-react';
import styles from './ListingDetail.module.css';

// Mock data generator for multiple listings
const getListing = (id: string) => {
  const listings: Record<string, any> = {
    '1': {
      title: '広い庭のある居心地の良い家',
      location: '東京都世田谷区',
      hostName: 'Yuki',
      hostRating: 4.98,
      reviews: 124,
      price: 5500,
      petTypes: ['小型犬', '中型犬'],
      hostExperience: '3年',
      images: [
        '/home1.png', 
        '/host_with_dog_1_1778231939859.png', 
        '/host_with_dog_5_lifestyle_1778659488337.png',
        '/home2.png', 
        '/home3.png'
      ],
      description: `世田谷の静かな住宅街に住んでおり、フェンスで囲まれた広い裏庭があります。
      私たちの家族は犬が大好きで、3年以上犬のホスティングを続けています。
      あなたの愛犬を家族のように扱い、たくさんの散歩と遊びの時間を提供します。`,
      amenities: [
        { icon: MapPin, text: '完全にフェンスで囲まれた庭' },
        { icon: Calendar, text: '柔軟なチェックイン・チェックアウト' },
        { icon: ShieldCheck, text: '犬の応急処置認定済み' },
        { icon: Info, text: '毎日の写真・動画アップデート' }
      ]
    },
    '2': {
      title: '都心のラグジュアリーなペットステイ',
      location: '東京都港区',
      hostName: 'Kenji',
      hostRating: 4.95,
      reviews: 82,
      price: 8200,
      petTypes: ['小型犬'],
      hostExperience: '5年',
      images: [
        '/home2.png', 
        '/host_with_dog_2_1778232173878.png', 
        '/host_with_dog_6_lifestyle_1778659506406.png',
        '/home1.png', 
        '/home3.png'
      ],
      description: `港区の高級マンションで、ワンちゃんに最高級のケアを提供します。
      近隣の芝公園への散歩や、室内での知育遊びなど、愛犬が退屈しない工夫をしています。
      ベテランホストとして、安心安全な滞在をお約束します。`,
      amenities: [
        { icon: MapPin, text: '24時間体制のケア' },
        { icon: Star, text: 'プレミアムドッグフード対応' },
        { icon: ShieldCheck, text: 'ドッグトレーナー資格保有' },
        { icon: Info, text: 'LINEでの随時報告' }
      ]
    }
  };
  
  return listings[id] || listings['1']; // Fallback to id 1
};

export default async function ListingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const listing = getListing(id);
  const images = listing.images;

  return (
    <main className={styles.main}>
      <Header />
      
      <div className={`container ${styles.content}`}>
        <h1 className={styles.title}>{listing.title}</h1>
        
        <div className={styles.meta}>
          <div className={styles.metaLeft}>
            <div className={styles.rating}>
              <Star size={14} fill="currentColor" />
              <span>{listing.hostRating} · {listing.reviews} 件のレビュー</span>
            </div>
            <span>·</span>
            <span className={styles.location}>{listing.location}</span>
          </div>
          <div className={styles.metaRight}>
            <button className={styles.metaAction}><MessageSquare size={16} /> 共有</button>
            <button className={styles.metaAction}><Heart size={16} /> 保存</button>
          </div>
        </div>

        <div className={styles.galleryWrapper}>
          <div className={styles.gallery}>
            <div className={styles.mainImage}>
              <img src={images[0]} alt="Main" />
            </div>
            <div className={styles.sideImages}>
              <img src={images[1]} alt="Side 1" />
              <img src={images[2]} alt="Side 2" />
              <img src={images[3]} alt="Side 3" />
              <img src={images[4]} alt="Side 4" />
            </div>
          </div>
          <button className={styles.showAllPhotos}>すべての写真を表示</button>
        </div>

        <div className={styles.detailsGrid}>
          <div className={styles.info}>
            <div className={styles.hostSection}>
              <div className={styles.hostHeader}>
                <div>
                  <h2>ホスト：{listing.hostName}さん</h2>
                  <p>ホスト歴：{listing.hostExperience} · {listing.petTypes.join(', ')} 歓迎</p>
                </div>
                <div className={styles.hostAvatar}>
                  <div className={styles.avatarPlaceholder}>
                    {listing.hostName[0]}
                  </div>
                </div>
              </div>
              <div className={styles.hostBadges}>
                <div className={styles.badge}>
                  <Award size={18} />
                  <span>超人気ホスト</span>
                </div>
                <div className={styles.badge}>
                  <Star size={18} />
                  <span>{listing.reviews}件のレビュー</span>
                </div>
              </div>
            </div>

            <hr className={styles.divider} />

            <div className={styles.amenities}>
              {listing.amenities.map((item: any, index: number) => (
                <div key={index} className={styles.amenityItem}>
                  <item.icon size={24} color="var(--text-dark)" />
                  <div>
                    <p className={styles.amenityText}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.description}>
              <h3>このホストについて</h3>
              <p>{listing.description}</p>
              <button className={styles.readMore}>さらに表示する ＞</button>
            </div>

            <hr className={styles.divider} />

            <div className={styles.reviewsSection}>
              <div className={styles.reviewsHeader}>
                <Star size={20} fill="currentColor" />
                <h2>{listing.hostRating} · {listing.reviews}件のレビュー</h2>
              </div>

              <div className={styles.reviewsGrid}>
                {[1, 2].map((i) => (
                  <div key={i} className={styles.reviewCard}>
                    <div className={styles.reviewUser}>
                      <div className={styles.reviewAvatar}>
                        {i === 1 ? 'M' : 'K'}
                      </div>
                      <div>
                        <p className={styles.reviewName}>{i === 1 ? 'Mika' : 'Kenta'}</p>
                        <p className={styles.reviewDate}>2024年4月</p>
                      </div>
                    </div>
                    <p className={styles.reviewText}>
                      {i === 1 
                        ? 'とても親切なホストさんでした！愛犬のポチも楽しそうに過ごしていたようで、写真もたくさん送ってくれました。また次回もお願いしたいです。'
                        : '急な宿泊のお願いでしたが、快く引き受けてくださいました。庭が広くてワンちゃんには最高の環境だと思います。'}
                    </p>
                  </div>
                ))}
              </div>
              <button className={styles.showAllReviews}>全{listing.reviews}件のレビューを表示</button>
            </div>
          </div>

          <div className={styles.sidebar}>
            <div className={styles.stickyWidget}>
              <BookingWidget price={listing.price} rating={listing.hostRating} />
              <p className={styles.reportListing}>リスティングを報告する</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
