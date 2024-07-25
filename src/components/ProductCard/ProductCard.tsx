import {ReactNode} from "react";
import {Card, Button} from 'antd'
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
            <p>Цена: {price} Р</p>       
            <p>{description}</p>
            <Button>Убрать в корзину</Button> 
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