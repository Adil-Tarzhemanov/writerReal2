import styles from './Video.module.scss';

export const Video = () => {
    return (
        <div className={styles.container}>
            <p>
                Юсуф Сарёмийнинг Муқимий билан учрашуви ҳақидаги Дийдор пьесаси
            </p>
            <div className={styles.video}>
                <iframe
                    src="https://www.youtube.com/embed/tuXUiNw5Oeg"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};
