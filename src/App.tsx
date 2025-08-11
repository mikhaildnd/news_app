import {Link, Route, Routes} from "react-router-dom";
import './index.scss'
import {MainPageAsync} from "./pages/MainPages/MainPage/MainPageAsync";
import {AboutPageAsync} from "./pages/MainPages/AboutPage/AboutPage.async";
import {Suspense} from "react";

const App = () => {
    return (
        <div className="app">
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