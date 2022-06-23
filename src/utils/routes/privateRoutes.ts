import { DefaultRedirect } from "../../components/_utils/DefaultRedirect";
import BasketPage from "../../pages/BasketPage/BasketPage";
import CategoriesPage from "../../pages/CategoriesPage/CategoriesPage";
import HomePage from "../../pages/HomePage/HomePage";
import OrdersPage from "../../pages/OrdersPage/OrdersPage";
import ProductPage from "../../pages/ProductPage/ProductPage";
import ProductsPage from "../../pages/ProductsPage/ProductsPage";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import { paths } from "./_paths";

export const privateRoutes = [
    {
        path: paths.home,
        Component: HomePage
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
        path: paths.profile,
        Component: ProfilePage
    },
    {
        path: paths.basket,
        Component: BasketPage
    },
    {
        path: paths.orders,
        Component: OrdersPage
    },

    {
        path: "*",
        Component: DefaultRedirect
    }
]
