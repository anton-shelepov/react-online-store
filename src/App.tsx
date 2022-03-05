import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import s from "./App.module.scss"
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import CatalogPage from "./pages/CategoriesPage/CategoriesPage";
import CatalogSidebar from "./components/CatalogSidebar/CatalogSidebar";
import MediaQuery from "react-responsive";
import MobileBottomNav from "./components/MobileBottomNav/MobileBottomNav";
import { mediumWidth, smallWidth } from "./components/_assets/BreakpointsConsts";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";

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
                    <Route path='/catalog/:products' element={<ProductsPage />} />
                    <Route path='/product/:id' element={<ProductPage />} />
                </Routes>
            </div>

            <MediaQuery maxWidth={smallWidth}>
                <MobileBottomNav />
            </MediaQuery>


        </div >
    );
}

export default App; 
