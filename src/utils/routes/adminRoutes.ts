import CategoriesEditPage from "../../pages/adminPages/CategoriesEditPage/CategoriesEditPage";
import HomeEditPage from "../../pages/adminPages/HomeEditPage/HomeEditPage";
import ProductsEditPage from "../../pages/adminPages/ProductsEditPage/ProductsEditPage";
import UsersPage from "../../pages/adminPages/UsersPage/UsersPage";
import { paths } from "./_paths";

export const adminRoutes = [
    {
        path: paths.categoriesEdit,
        Component: CategoriesEditPage
    },
    {
        path: paths.homeEdit,
        Component: HomeEditPage
    },
    {
        path: paths.productsEdit,
        Component: ProductsEditPage
    },
    {
        path: paths.users,
        Component: UsersPage
    },
]
