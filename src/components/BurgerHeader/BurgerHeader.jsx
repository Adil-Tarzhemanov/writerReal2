import { useState } from 'react';
import { Menu } from '../Menu/Menu.jsx';
import styles from './BurgerHeader.module.scss';

export const BurgerMenu = ({  
    setActiveUzb, 
    activeUzb, 
    setActiveLat, 
    activeLat,
    onUzb,
    onLat 
    }) => {
    const [menuActive, setMenuActive] = useState(false);

    const items = [
        { value: 'Биография', to: 'home' },
        { value: 'Оила', to: 'family' },
        { value: 'Асарлар', to: 'works' },
        { value: 'Мукофотлар', to: 'awards' },
    ];

    const itemsLat = [
        { value: 'Biografiya', to: 'home' },
        { value: 'Oila', to: 'family' },
        { value: 'Asarlar', to: 'works' },
        { value: 'Mukofotlar', to: 'awards' },
    ];

    const photos = { value: 'Расмлар', to: 'photo' };
    const photosLat = { value: 'Rasmlar', to: 'photo' };

    return (
        <div className={styles.mobileHeader}>
            <nav>
                <div
                    className={styles.burgerBtn}
                    onClick={() => setMenuActive(!menuActive)}
                >
                    <span />
                </div>
                <div className={styles.languages}>
                    <button className={`${styles.btn} ${styles.uzbButton} ${activeUzb && styles.active}`} onClick={onUzb}>Uzb</button>
                    <div className={styles.slash}></div>
                    <button className={`${styles.btn} ${styles.latButton} ${activeLat && styles.active}`} onClick={onLat}>Ўзб</button>
                 </div>
            </nav>
            <Menu
                items={items}
                photos={photos}
                itemsLat={itemsLat}
                photosLat={photosLat}
                activeUzb={activeUzb}
                activeLat={activeLat}
                menuActive={menuActive}
                setMenuActive={setMenuActive}
            />
        </div>
    );
};
