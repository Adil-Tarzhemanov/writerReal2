import styles from './ModalPhoto.module.scss';

export const ModalPhoto = ({ activeModal, setActiveModal, img }) => {
    return (
        <div
            className={`${styles.modal} ${activeModal && styles.active}`}
            onClick={() => setActiveModal(false)}
        >
            <div
                className={`${styles.content} ${
                    activeModal && styles.contentActive
                }`}
                onClick={(e) => e.stopPropagation()}
            >
                <img src={img} alt='abdullaPhoto' />
            </div>
        </div>
    );
};
