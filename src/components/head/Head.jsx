import styles from './Head.module.scss';
import { useInView } from 'react-intersection-observer';

export const Head = ({ head }) => {
    const { ref: headRef, inView: headVisible } = useInView({
        triggerOnce: true,
        threshold: 1,
    });

    return (
        <div ref={headRef}>
            {headVisible && (
                <h2 className={`${styles.h2} ${styles.anime}`}>{head}</h2>
            )}
        </div>
    );
};
