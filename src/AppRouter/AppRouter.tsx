import {Route, Routes} from "react-router-dom"
import {BrowserRouter as Router} from "react-router-dom";
import {AuthPage} from "@/pages/AuthPage";
import {AppHeader} from "@/modules/Header"
import { MobileAppHeader } from "@/modules/MobileHeader";
import { MobileFooterNavigation } from "@/modules/MobileFooterNavigation";
import { Main } from "@/pages/Main";
import { FiltersPage } from "@/pages/FiltersPage/FiltersPage";
import { CartPage } from "@/pages/CartPage";
import { BuyingsPage } from "@/pages/BuyingsPage/UI/BuyingsPage";
import {routes} from "@/common/constants/routes.ts";
import { useGlobalStore } from "../store/useGlobalStore";

export const AppRouter = () => {

    const { isMobileVersion } = useGlobalStore()

    return (
        <Router>
            {
                isMobileVersion
                    ? <MobileAppHeader/>
                    : <AppHeader/>
            }
            <Routes>
                <Route path={routes.main} element={<Main/>}/>
                <Route path={routes.auth} element={<AuthPage/>}/>
                <Route path={routes.filters} element={<FiltersPage/>}/>
                <Route path={routes.cart} element={<CartPage/>}/>
                <Route path={routes.buyings} element={<BuyingsPage/>}/>
            </Routes>
            { isMobileVersion && <MobileFooterNavigation/>}
        </Router>
    )
}