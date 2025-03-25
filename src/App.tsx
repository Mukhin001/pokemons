import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { useAppSelector } from './app/hooks';
import WidthWindow from './utils/widthWindow/WidthWindow';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    const theme = useAppSelector(state => state.theme.value);

    return (
        <div className={`${theme === 'light' ? 'themeLight' : 'themeDark'}`}>
            <WidthWindow />
            <Router>
                <Header />
                <Main />
            </Router>
            <Footer />
        </div>
    )
};

export default App;