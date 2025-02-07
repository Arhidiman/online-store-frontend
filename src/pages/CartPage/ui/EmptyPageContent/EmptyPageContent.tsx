import { ActionButton } from "@/UI/ActionButton"
import { Link } from "react-router-dom"
import { routes } from "@/common/constants/routes"

export const EmptyPageContent = () => {

    const goToMainPage = () => window.location.pathname = routes.main

    return (
        <div className="cart-page-empty-content">
            <h2 className="cart-page-empty-content-title">В вашей корзине отсутствуют товары</h2>
            <Link to={routes.main}>
                <ActionButton text="Перейти к выбору товаров" type='left' size="large" actionHandler={goToMainPage}/>
            </Link>
        </div>
    )
}