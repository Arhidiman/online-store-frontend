import {Route, Routes} from "react-router-dom"
import {BrowserRouter as Router} from "react-router-dom";
import {AuthPage} from "@/pages/AuthPage";
import {AppHeader} from "@/modules/Header"
import {Main} from "@/pages/Main";
import { CartPage } from "@/pages/CartPage";
import { BuyingsPage } from "@/pages/BuyingsPage/BuyingsPage";
import {routes} from "@/common/constants/routes.ts";

export const AppRouter = () => {
    return (
        <Router>
            <AppHeader></AppHeader>
            <Routes>
                <Route path={routes.main} element={<AuthPage/>}/>
                <Route path={routes.products} element={<Main/>}/>
                <Route path={routes.cart} element={<CartPage/>}/>
                <Route path={routes.buyings} element={<BuyingsPage/>}/>
            </Routes>
        </Router>
    )
}