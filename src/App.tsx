import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { useAppSelector } from './app/hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import { selectCurrentTheme } from './utils/themeSlice/themeSlice';
import WidthWindow from './utils/widthWindow/WidthWindow';

function App() {
    const theme = useAppSelector(selectCurrentTheme);
    
    return (
        <div className={`app theme${theme}`}>
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