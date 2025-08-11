import {Link, Route, Routes} from "react-router-dom";
import './styles/index.scss'
import {MainPageAsync} from "./pages/MainPages/MainPage/MainPageAsync";
import {AboutPageAsync} from "./pages/MainPages/AboutPage/AboutPage.async";
import {Suspense} from "react";
import {useTheme} from "./theme/useTheme";


const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPageAsync/>}/>
                    <Route path="/" element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;