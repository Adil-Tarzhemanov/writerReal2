import { Link } from 'react-scroll';
import { Link as Links } from 'react-router-dom';
import { headerList } from '../../data/headerList';

import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <ul>
                {headerList.map((element) => (
                    <Link to={element.to} smooth offset={-100} duration={500}>
                        <Links to="/">
                            <li>{element.title}</li>
                        </Links>
                    </Link>
                ))}
                <Link to='photos' smooth offset={-100} duration={500}>
                    <Links to="/photos">
                        <li>Расмлар</li>
                    </Links>
                </Link>
            </ul>
        </header>
    );
};
