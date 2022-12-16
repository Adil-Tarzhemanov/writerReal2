import styles from './ModalHeight.module.scss';

export const ModalHeight = ({ activeHeight, setActiveHeight, img }) => {
    return (
        <div
            className={`${styles.modal} ${activeHeight && styles.active}`}
            onClick={() => setActiveHeight(false)}
        >
            <div
                className={`${styles.content} ${
                    activeHeight && styles.contentActive
                }`}
                onClick={(e) => e.stopPropagation()}
            >
                <img src={img} />
            </div>
        </div>
    );
};
