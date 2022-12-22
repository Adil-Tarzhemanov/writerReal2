import { Head } from '../../../components/head/Head';
import { works } from '../../../data/works';
import styles from './Works.module.scss';
import { Work } from './Work/Work';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';

export const Works = () => {
    return (
        <div className={styles.container} id="works">
            <Head head="ABDULLA MADIEV ASARLARI" />
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    '@1.50': {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                    '@2.0': {
                        slidesPerView: 5,
                        spaceBetween: 60,
                    },
                    '@2.5': {
                        slidesPerView: 6,
                        spaceBetween: 60,
                    },
                    '@3.0': {
                        slidesPerView: 7,
                        spaceBetween: 70,
                    },
                }}
                modules={[Pagination]}
                className={styles.mySwiper}
            >
                {works.map((work) => (
                    // <div className={styles.work}>
                    <SwiperSlide className={styles.swiperSlide}>
                        <Work {...work} />
                    </SwiperSlide>
                    // </div>
                ))}
            </Swiper>
        </div>
    );
};
