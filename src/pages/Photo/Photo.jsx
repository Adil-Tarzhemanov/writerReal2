import { useEffect, useState } from 'react';
import { useWindowSize } from '../../components/hooks/useWindowSize';
import { ModalHeight } from './ModalHeightPhoto/ModalHeight';
import { ModalPhoto } from './ModalPhoto/ModalPhoto';
import { PhotoGrid } from './PhotoGrid/PhotoGrid';

export const Photo = () => {
    const [activeModal, setActiveModal] = useState(false);
    const [activeHeight, setActiveHeight] = useState(false);
    const [img, setImg] = useState();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const size = useWindowSize();

    const onPhoto = (img) => {
        setActiveModal(true);
        setImg(img);
    };

    const onHeightPhoto = (img) => {
        setActiveHeight(true);
        setImg(img);
    };

    return (
        <>
            <PhotoGrid
                activeModal={activeModal}
                setActiveModal={setActiveModal}
                onPhoto={onPhoto}
                onHeightPhoto={onHeightPhoto}
            />
            {activeModal && size.width > 600 && (
                <ModalPhoto
                    img={img}
                    activeModal={activeModal}
                    setActiveModal={setActiveModal}
                />
            )}
            {activeHeight && size.width > 600 && (
                <ModalHeight
                    img={img}
                    activeHeight={activeHeight}
                    setActiveHeight={setActiveHeight}
                />
            )}
        </>
    );
};
