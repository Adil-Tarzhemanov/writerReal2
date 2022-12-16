import { useState } from 'react';
import { Menu } from '../Menu/Menu.jsx';
import styles from './BurgerHeader.module.scss';

export const BurgerMenu = () => {
    const [menuActive, setMenuActive] = useState(false);

    const items = [
        { value: 'Биография', to: 'home' },
        { value: 'Оила', to: 'family' },
        { value: 'Асарлар', to: 'works' },
        { value: 'Мукофотлар', to: 'awards' },
    ];

    const photos = { value: 'Расмлар', to: 'photo' };

    return (
        <div className={styles.mobileHeader}>
            <nav>
                <div
                    className={styles.burgerBtn}
                    onClick={() => setMenuActive(!menuActive)}
                >
                    <span />
                </div>
            </nav>
            <Menu
                items={items}
                photos={photos}
                menuActive={menuActive}
                setMenuActive={setMenuActive}
            />
        </div>
    );
};
