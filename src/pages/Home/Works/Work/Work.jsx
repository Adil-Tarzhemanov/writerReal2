import styles from './Work.module.scss';

export const Work = ({ img, href }) => {
    return (
        <a href={href} download="" className={styles.work}>
            <img className={styles.img} src={img} alt='work'/>
        </a>
    );
};
