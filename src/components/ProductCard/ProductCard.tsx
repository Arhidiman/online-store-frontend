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

const cardContent = (url: string, price: number, description: string) => 
    <div>
        <img alt='product image' src={url}/>
        <div className="product-card-content-bottom">
            <div className="product-card-content-bottom-container">
                <Space size={30}>
                    <p className="product-card-content-bottom-price">Цена: {price} Р</p>     
                    <ActionButton text="В корзину" actionHandler={() => console.log('to cart')}/>
                </Space>
                <p>{description}</p>
            </div>
        </div>
    </div>

export const ProductCard = ({name, product_id, image, price, description, cardSign}: IProductCard) => {
    return <Card
        title={name}
        content={description}
        extra={cardSign}
        className='product-card-custom'
    >
        <div className='product-card-content-container'>
            {cardContent(image, price, description)}
        </div>
    </Card>
}