import styles from './App.module.scss';
import { Home } from './pages/Home/Home';
import { Header } from './components/Header/Header';
import { useWindowSize } from './components/hooks/useWindowSize';
import { BurgerMenu } from './components/BurgerHeader/BurgerHeader';
import { Route, Routes } from 'react-router-dom';
import { Photo } from './pages/Photo/Photo';

function App() {
    const size = useWindowSize();

    return (
        <div className={styles.container}>
            {size.width > 850 ? <Header/> : <BurgerMenu />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/photos" element={<Photo />} />
            </Routes>
        </div>
    );
}

export default App;
