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
import BasketPage from "./pages/BasketPage/BasketPage";
import AdminPage from "./pages/adminPages/CategoriesEditPage/CategoriesEditPage";
import AdminSidebar from "./components/AdminSidebar/AdminSidebar";
import CategoriesEditPage from "./pages/adminPages/CategoriesEditPage/CategoriesEditPage";
import ProductsEditPage from "./pages/adminPages/ProductsEditPage/ProductsEditPage";
import UsersPage from "./pages/adminPages/UsersPage/UsersPage";
import HomeEditPage from "./pages/adminPages/HomeEditPage/HomeEditPage";

function App() {

    const pathname = useLocation().pathname
    const role = 'USER'

    return (
        <div className={s.app}>

            {role === 'USER' && (
                <>
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
                            <Route path='/basket' element={<BasketPage />} />
                        </Routes>
                    </div>

                    <MediaQuery maxWidth={smallWidth}>
                        <MobileBottomNav />
                    </MediaQuery>
                </>)
            }

            {/* {
                role === 'ADMIN' && (
                    <>
                        <AdminSidebar />
                        
                        <Routes>
                            <Route path='/admin/home' element={<HomeEditPage />} />
                            <Route path='/admin/categories' element={<CategoriesEditPage />} />
                            <Route path='/admin/products' element={<ProductsEditPage />} />
                            <Route path='/admin/users' element={<UsersPage />} />
                        </Routes>
                    </>
                )
            } */}


        </div >
    );
}

export default App; 
