import { heightPhotos } from '../../../data/heightPhotos';
import { photos } from '../../../data/photos';
import styles from './PhotoGrid.module.scss';

export const PhotoGrid = ({
    activeModal,
    setActiveModal,
    onPhoto,
    onHeightPhoto,
}) => {
    return (
        <div className={styles.container} id='photos'>
            <div className={styles.heightPhotos1}>
                {heightPhotos.map((photo) => (
                    <img
                        src={photo.img}
                        alt="abdullaPhoto"
                        onClick={() => onHeightPhoto(photo.img)}
                    />
                ))}
            </div>
            <div className={styles.photos}>
                {photos.map((photo) => (
                    <img
                        src={photo.img}
                        alt="abdullaPhoto"
                        onClick={() => onPhoto(photo.img)}
                    />
                ))}
            </div>
            <div className={styles.heightPhotos2}>
                <img
                    src="img/heightPhotos/4.png"
                    alt="abdullaPhoto"
                    onClick={() => onHeightPhoto('img/heightPhotos/4.png')}
                />
                <img
                    src="img/heightPhotos/5.png"
                    alt="abdullaPhoto"
                    onClick={() => onHeightPhoto('img/heightPhotos/5.png')}
                />
            </div>
        </div>
    );
};
