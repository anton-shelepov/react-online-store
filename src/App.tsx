import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import s from "./App.module.scss"
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import AuthPage from "./Pages/AuthPage/AuthPage";
import CatalogPage from "./Pages/CatalogCategoriesPage/CatalogPage";
import CatalogSidebar from "./Components/CatalogSidebar/CatalogSidebar";
import MediaQuery from "react-responsive";
import MobileBottomNav from "./Components/MobileBottomNav/MobileBottomNav";
import { mediumWidth, smallWidth } from "./Components/_Assets/BreakpointsConsts";

function App() {

    const pathname = useLocation().pathname

    return (
        <div className={s.app}>

            <Header />

            <div className={s.container}>
                {
                    pathname !== '/auth' &&
                    pathname !== '/catalog' &&
                    <MediaQuery minWidth={mediumWidth}>
                        <CatalogSidebar />
                    </MediaQuery>
                }
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/profile' element={<ProfilePage />} />
                    <Route path='/auth' element={<AuthPage />} />
                    <Route path='/catalog' element={<CatalogPage />} />
                </Routes>
            </div>

            <MediaQuery maxWidth={smallWidth}>
                <MobileBottomNav />
            </MediaQuery>


        </div >
    );
}

export default App; 
