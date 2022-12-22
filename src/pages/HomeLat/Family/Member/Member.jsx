import styles from './Member.module.scss';

export const Member = ({ someone, img, name, lifeDates }) => {
    return (
        <div className={styles.member}>
            <h3 className={styles.someone}>{someone}</h3>
            <img src={img} alt="someone" />
            <div className={styles.nameAndLife}>
                <div className={styles.nameWrapper}>
                    <h3 className={styles.name}>{name}</h3>
                </div>
                <h4 className={styles.lifeDates}>{lifeDates}</h4>
            </div>
        </div>
    );
};
