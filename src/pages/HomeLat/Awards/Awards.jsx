import { Head } from '../../../components/head/Head';
import styles from './Awards.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper';
import { awards } from '../../../data/awards';

export const Awards = () => {
    return (
        <div className={styles.container} id="awards">
            <Head head="ABDULLA MADIEV MUKOFOTLARI" />
            <p>
                Abdulla Ma’diev «Mustaqilligimizning 15 yilligi» va «Mustaqilligimizning 20 yilligi», «Mustaqilligimizning 25 yilligi», “O‘zbekiston Konstitutsiyasiga 25 yil”, ”Mustaqilligimizning 30 yilligi”, ko‘krak nishonlari bilan mukofotlangan. «Antik dunyo»(«Antique World») Xalqaro ilmiy Akademiyasining professorlik unvonini olgan. O‘zbekiston YOzuvchilar uyushmasi, O‘zbekiston Jurnalistlar uyushmasi a’zosi.
            </p>
            <div className={`${styles.awards} ${styles.swiper} `}>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className={styles.mySwiper}
                >
                    {awards.map((award) => (
                        <SwiperSlide className={styles.swiperSlide}>
                            <img src={award.img} alt="award" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <h3>
                Otang, onang, Vataning,
                <br /> Sig‘ingan Ka'bang bo‘lsin,
                <br /> Bobolar yo‘lidan yur,
                <br /> Allohga Tavbang bo‘lsin.
                <br /> <span>(c)Abdulla Madiev </span>
            </h3>
        </div>
    );
};
