import { Link } from 'react-scroll';
import { useWindowSize } from '../hooks/useWindowSize';
import styles from './Menu.module.scss';
import { Link as Links } from 'react-router-dom';

export const Menu = ({ items, menuActive, setMenuActive, photos }) => {
    const size = useWindowSize();

    return (
        <div
            className={`${styles.menu} ${menuActive && styles.active}`}
            onClick={() => size.width > 750 && setMenuActive(false)}
        >
            <div className={styles.blur} />
            <div
                className={styles.content}
                onClick={(e) => e.stopPropagation()}
            >
                <ul>
                    {items.map((item) => (
                        <Link
                            to={item.to}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            <Links to="/">
                                <li onClick={() => setMenuActive(false)}>
                                    {item.value}
                                </li>
                            </Links>
                        </Link>
                    ))}
                    <Link
                        to={photos.to}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        <Links to="/photos">
                            <li onClick={() => setMenuActive(false)}>
                                {photos.value}
                            </li>
                        </Links>
                    </Link>
                </ul>
            </div>
        </div>
    );
};
