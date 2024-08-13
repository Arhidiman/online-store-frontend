import {ReactNode} from "react";
import {Card, Button, Space} from 'antd'
import { ActionButton } from "@/UI/ActionButton";
import './ProductCard.scss'

interface IProductCard {
    name: string
    product_id: number,
    image: string
    price: number
    description: string
    cardSign: ReactNode
}

const cardContent = (url: string, price: number) => 
    <div className="product-card">
        <img alt='product image' src={url}/>
        <div className="product-card-content-bottom">
            <div className="product-card-content-bottom-container">
                <p className="product-card-content-bottom-price">{price} Р</p>     
                <ActionButton className="product-card_button" text="В корзину" actionHandler={() => console.log('to cart')}/>
            </div>
        </div>
    </div>

export const ProductCard = ({name, product_id, image, price, description}: IProductCard) => {
    return <Card
        key={product_id}
        title={name}
        content={description}
        className='product-card-custom'
    >
        <div className='product-card-content-container'>
            {cardContent(image, price)}
        </div>
    </Card>
}