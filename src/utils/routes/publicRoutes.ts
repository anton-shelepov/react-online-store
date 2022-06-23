import { DefaultRedirect } from "../../components/_utils/DefaultRedirect";
import AuthPage from "../../pages/AuthPage/AuthPage";
import CategoriesPage from "../../pages/CategoriesPage/CategoriesPage";
import HomePage from "../../pages/HomePage/HomePage";
import ProductPage from "../../pages/ProductPage/ProductPage";
import ProductsPage from "../../pages/ProductsPage/ProductsPage";
import { paths } from "./_paths";


export const publicRoutes = [
    {
        path: paths.home,
        Component: HomePage
    },
    {
        path: paths.auth,
        Component: AuthPage
    },
    {
        path: paths.catalog,
        Component: CategoriesPage
    },
    {
        path: paths.products,
        Component: ProductsPage
    },
    {
        path: paths.product,
        Component: ProductPage
    },
    {
        path: "*",
        Component: DefaultRedirect
    }
]