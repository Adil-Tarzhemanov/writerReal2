import { Head } from '../../../components/head/Head';
import styles from './Biography.module.scss';
import { useInView } from 'react-intersection-observer';

export const Biography = () => {
    const { ref: textImgRef, inView: textImgVisible } = useInView({
        triggerOnce: true,
        threshold: 1,
    });
    const { ref: imgTextRef, inView: imgTextVisible } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className={styles.container}>
            <Head head="ABDULLA MADIEV HAQIDA" />
            <div className={styles.textImg} ref={textImgRef}>
                {textImgVisible && (
                    <p className={textImgVisible && styles.leftAnime}>
                        Madiev Abdulla Zikrullo o‘g‘li,&nbsp;
                        <span>1948 yilning 14 aprelida</span>&nbsp; 
                        Toshkent viloyati Oqqo‘rg‘on tumani Achchi qishlog‘ida tavallud topgan.
                        <br />O‘zbek, oliy ma’lumotli jurnalist. «Antik dunyo»(«Antique World») Xalqaro Ilmiy Akademiyasining professori.
                        <br />
                        <br />U <span> 1966 yilda</span>  3-o‘rta ta’lim maktabini tamomlagach, Toshkentdagi O‘zbekiston Milliy universitetining jurnalistika kulliyotiga o‘qishga kirib, uni 1972 yilda muvaffaqiyatli tugatdi.
                        <br />
                        <br />   A.Z. Ma’diev ish faoliyatini
                        <span>&nbsp;1966 yilda</span>
                        &nbsp;«Guliston» shirkat xo‘jaligida boshqaruv kotibligidan boshlagan. 1968—1970 yillarda 1, 4 - o‘rta ta’lim maktablarida tarbiyachi, bosh etakchi, 1970—1972 yillarda Oqqo‘rg‘on tuman gazetasi tahririyati qoshida radio-tashkilotchi, 1972—1974 yillarda tuman komsomol qo‘mitasi tashkiliy ishlar bo‘limi mudiri, tuman komsomol qo‘mitasi kotibi, 1974—1977 yillarda tuman partiya qo‘mitasida yo‘riqchi bo‘lib ishlagan.
                        <br />
                        <br />
                        <span>1977 yilda</span> «Ozod» shirkat xo‘jaligi partkom sekretari lavozimiga saylanadi. 1980 yilda «Ozod» va «Partiya XXII s’ezdi» shirkat xo‘jaliklari qo‘shilgandan keyin yana tuman partiya qo‘mitasida yo‘riqchi bo‘lib ishlaydi.
                    </p>
                )}
                {textImgVisible && (
                    <img
                        src="img/Abdulla/1.png"
                        className={textImgVisible && styles.rightAnime}
                        alt="abdulla"
                    />
                )}
            </div>
            <div className={styles.imgText} ref={imgTextRef}>
                {imgTextVisible && (
                    <img
                        src="img/Abdulla/2.png"
                        className={imgTextVisible && styles.leftAnime}
                        alt="abdulla"
                    />
                )}
                {imgTextVisible && (
                    <p className={imgTextVisible && styles.rightAnime}>
                        <span>1980 yildan</span>  tuman ijroiya qo‘mitasiga ma’sul kotiblikka saylanadi va bu lavozimda 1988 yilgacha ishlaydi.
                        <br />
                        <br />
                        <span> 1988 yil 18 iyunda</span> tuman partiya qo‘mitasining Plenumida alternativ saylovda tuman «Mo‘l hosil uchun» gazetasi muharriri lavozimiga saylanadi.
                        <br />
                        <br /> A.Z.Ma’diev usta rahbar, mohir jurnalist. U rahbar bo‘lib kelgach, gazetaning mazmuni ham, ko‘rinishi ham mutlaqo o‘zgardi. Tahririyat o‘z kompyuteriga ega bo‘ldi. Binolar kapital ta’mirdan chiqarildi, xizmat mashinasiga ega bo‘ldi. Tahririyat iqtisodiy inqirozdan chiqdi.
                        <br />
                        <br />  A.Z.Ma’diev uzoqni ko‘ra biladigan, jamiyatdagi o‘zgarishlarni tez seza oladigan rahbar. U 
                        <span>1990 yillardayoq</span>
                        Mustaqillikning shabbodalarini sezgan edi. Respublikada birorta gazetaning nomi o‘zgarmagan bir paytda Abdulla Ma’dievning sa’y-harakati tufayli «Mo‘l hosil uchun» gazetasi  <span>1991 yilning 1 yanvaridan</span> «Oqqo‘rg‘on ovozi» nomi bilan chop etila boshlandi.
                        <br />
                        <br />  Abdulla Ma’diev <span>
                            1840—1912 yillarda
                        </span>
                        yashab ijod etgan alloma shoir YUsuf Saryomiyning chevarasi. Ijodkorning «Umrim zarvaraqlari», «Zulmatdan ziyo», «Etti ota», «Bobom – faxrim mening», «Muhabbat yurakda tug‘ilar shunday», «Qolayotgan izlar», Mustaqilligimizning 24 yilligiga bag‘ishlangan «Vatan shirin», “Bunday go‘zal Vatan yana qayda bor” nomli kitoblari chop etilgan.
                    </p>
                )}
            </div>
        </div>
    );
};
