import { Link } from 'react-scroll';
import { Link as Links } from 'react-router-dom';
import { headerList } from '../../data/headerList';
import { headerListLat } from '../../data/headerListLat';

import styles from './Header.module.scss';
// import { useState } from 'react';
// import { useTranslation } from 'react-i18next';

export const Header = ({ setActiveUzb, setActiveLat, activeUzb, activeLat, onUzb, onLat }) => {

    return (
        <header className={styles.header}>
            <ul>
                {activeLat ? (headerList.map((element) => (
                    <Link to={element.to} smooth offset={-100} duration={500}>
                        <Links to="/">
                            <li>{element.title}</li>
                        </Links>
                    </Link>
                ))) : (headerListLat.map((element) => (
                    <Link to={element.to} smooth offset={-100} duration={500}>
                        <Links to="/">
                            <li>{element.title}</li>
                        </Links>
                    </Link>
                )))}
                {activeLat ? <Link to='photos' smooth offset={-100} duration={500}>
                    <Links to="/photos">
                        <li>Расмлар</li>
                    </Links>
                </Link> : <Link to='photos' smooth offset={-100} duration={500}>
                    <Links to="/photos">
                        <li>Rasmlar</li>
                    </Links>
                </Link>}
            </ul>
            <div className={styles.languages}>
                <button className={`${styles.btn} ${styles.uzbButton} ${activeUzb && styles.active}`} onClick={onUzb}>Uzb</button>
                <div className={styles.slash}></div>
                <button className={`${styles.btn} ${styles.latButton} ${activeLat && styles.active}`} onClick={onLat}>Ўзб</button>
            </div>
        </header>
    );
};
