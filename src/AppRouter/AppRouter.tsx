import {Route, Routes} from "react-router-dom"
import {BrowserRouter as Router} from "react-router-dom";
import {AuthPage} from "@/pages/AuthPage";
import {Main} from "@/pages/Main";
import {routes} from "@/common/constants/routes.ts";

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path={routes.main} element={<AuthPage/>}/>
                <Route path={routes.products} element={<Main/>}/>
            </Routes>
        </Router>
    )
}