import About from "../pages/about/About";
import Home from "../pages/home/Home";
import Product from "../pages/product/product";
import Store from "../pages/store/Store";
    



const routes = [
    {
        path: '/',
        element: Home
    },
    {
        path: '/about',
        element: About
    },  
    {
        path: '/store',
        element: Store
    },  
    {
        path: '/product/:id',
        element: Product
    }


]

export default routes;  