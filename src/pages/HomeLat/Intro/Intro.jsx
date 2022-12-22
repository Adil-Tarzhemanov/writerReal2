import styles from './Intro.module.scss';
import { useInView } from 'react-intersection-observer';

export const Intro = () => {
    const { ref: pAndH1Ref, inView: pAndH1Visible } = useInView({
        triggerOnce: true,
        threshold: 1,
    });
    const { ref: imgRef, inView: imgVisible } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className={styles.container} id="home">
            <div className={styles.abdullaWrapper}>
                <div ref={pAndH1Ref}>
                    {pAndH1Visible && (
                        <div
                            className={`${styles.nameAndWork} ${
                                pAndH1Visible && styles.nameWorkAnime
                            } `}
                        >
                            <h1>
                            Madiev Abdulla <br /> Zikrullo o‘g‘li
                            </h1>
                            <p>shoir, jurnalist, publitsist</p>
                        </div>
                    )}
                </div>
                <div ref={imgRef}>
                    {imgVisible && (
                        <img
                            src="img/Abdulla/abdullaHome.png"
                            className={imgVisible && styles.imgAnime}
                            alt="abdulla"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};
