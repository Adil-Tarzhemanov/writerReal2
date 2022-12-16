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
            <Head head="АБДУЛЛА МАЪДИЕВ МУКОФОТЛАРИ" />
            <p>
                Абдулла Маъдиев «Мустақиллигимизнинг 15 йиллиги» ва
                «Мустақиллигимизнинг 20 йиллиги», «Мустақиллигимизнинг 25
                йиллиги», “Ўзбекистон Конституциясига 25 йил”,
                ”Мустақиллигимизнинг 30 йиллиги”, кўкрак нишонлари билан
                мукофотланган. «Антик дунё» («Antique World») Халқаро илмий
                Академиясининг профессорлик унвонини олган. Ўзбекистон Ёзувчилар
                уюшмаси, Ўзбекистон Журналистлар уюшмаси аъзоси.
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
                Отанг, онанг, Ватанинг,
                <br /> Сиғинган Каъбанг бўлсин,
                <br /> Боболар йўлидан юр,
                <br /> Аллоҳга Тавбанг бўлсин.
                <br /> <span>(c)Абдулла Маъдиев</span>
            </h3>
        </div>
    );
};
