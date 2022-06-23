import MediaQuery from "react-responsive";
import { Route, Routes, useLocation } from "react-router-dom";
import s from "./App.module.scss";
import CatalogSidebar from "./components/CatalogSidebar/CatalogSidebar";
import Header from "./components/Header/Header";
import MobileBottomNav from "./components/MobileBottomNav/MobileBottomNav";
import { mediumWidth, smallWidth } from "./components/_utils/BreakpointsConsts";
import { Roles } from "./utils/constants/enums/roles.d";
import { useAppSelector } from "./utils/hooks/reduxHooks";
import { privateRoutes } from "./utils/routes/privateRoutes";
import { publicRoutes } from "./utils/routes/publicRoutes";
import { paths } from "./utils/routes/_paths";

function App() {

    const pathname = useLocation().pathname
    const role: Roles = Roles.USER
    const isUserAuthorized = useAppSelector(state => state.auth.isAuth)

    const routesWithoutSidebar = [
        paths.auth,
        paths.catalog
    ]

    return (
        <div className={s.app}>
            {role === Roles.USER && <>
                <Header />
                <div className={s.container}>
                    {!routesWithoutSidebar.includes(pathname) &&
                        <MediaQuery minWidth={mediumWidth}>
                            <CatalogSidebar />
                        </MediaQuery>}
                    <Routes>
                        {isUserAuthorized
                            ? privateRoutes.map(({ Component, path }) =>
                                <Route key={path} path={path} element={<Component />} />
                            )
                            : publicRoutes.map(({ Component, path }) =>
                                <Route key={path} path={path} element={<Component />} />
                            )}
                    </Routes>
                </div>
                <MediaQuery maxWidth={smallWidth}>
                    <MobileBottomNav />
                </MediaQuery>
            </>}

            {/* {role === 'ADMIN' && (<>

                <AdminSidebar />
                <Routes>
                    <Route path='/admin/home' element={<HomeEditPage />} />
                    <Route path='/admin/categories' element={<CategoriesEditPage />} />
                    <Route path='/admin/products' element={<ProductsEditPage />} />
                    <Route path='/admin/users' element={<UsersPage />} />
                </Routes>

            </>)} */}


        </div >
    );
}

export default App; 
