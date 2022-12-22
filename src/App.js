import styles from './App.module.scss';
import { Home } from './pages/Home/Home';
import { Header } from './components/Header/Header';
import { useWindowSize } from './components/hooks/useWindowSize';
import { BurgerMenu } from './components/BurgerHeader/BurgerHeader';
import { Route, Routes } from 'react-router-dom';
import { Photo } from './pages/Photo/Photo';
import { useEffect, useState } from 'react';
import { HomeLat } from './pages/HomeLat/HomeLat';

// import './18n';

function App() {
    const size = useWindowSize();

    const [activeLat, setActiveLat] = useState(true);
    const [activeUzb, setActiveUzb] = useState(false);

    useEffect(() => {
        const data = window.localStorage.getItem('languageLat');
        if(data !== null) setActiveLat(JSON.parse(data));
        const dataUzb = window.localStorage.getItem('languageUzb');
        if(dataUzb !== null) setActiveUzb(JSON.parse(dataUzb));
    }, [])

    useEffect(() => {
        window.localStorage.setItem('languageLat', JSON.stringify(activeLat));
        window.localStorage.setItem('languageUzb', JSON.stringify(activeUzb));
    }, [activeLat], [activeUzb]);

    const onUzb = () => {
        setActiveUzb(true);
        setActiveLat(false);
    }

    const onLat = () => {
        setActiveLat(true);
        setActiveUzb(false);
    }

    return (
        <div className={styles.container}>
            {size.width > 1050 ? 
            <Header 
                setActiveUzb={setActiveUzb} 
                activeUzb={activeUzb} 
                setActiveLat={setActiveLat} 
                activeLat={activeLat}
                onUzb={onUzb}
                onLat={onLat} /> : 
            <BurgerMenu  
                setActiveUzb={setActiveUzb} 
                activeUzb={activeUzb} 
                setActiveLat={setActiveLat} 
                activeLat={activeLat}
                onUzb={onUzb}
                onLat={onLat} />}
            <Routes>
                <Route path="/" element={activeLat ? <Home /> : <HomeLat />} />
                <Route path="/photos" element={<Photo />} />
            </Routes>
        </div>
    );
}

export default App;
