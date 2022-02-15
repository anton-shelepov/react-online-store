import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import s from "./App.module.scss"
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import AuthPage from "./Pages/AuthPage/AuthPage";
import CatalogPage from "./Pages/CatalogPage/CatalogPage";
import CatalogSidebar from "./Components/CatalogSidebar/CatalogSidebar";

function App() {

    const pathname = useLocation().pathname
    
    return (
        <div className={s.app}>

            <Header />

            <div className={s.container}> 
            {
                pathname !== '/auth' && pathname !== '/catalog' && <CatalogSidebar />
            }
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/profile' element={<ProfilePage />} />
                    <Route path='/auth' element={<AuthPage />} />
                    <Route path='/catalog' element={<CatalogPage />} />
                </Routes>
            </div>
        </div >
    );
}

export default App; 
