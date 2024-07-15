import {ReactNode} from "react";
import {Card} from 'antd'
import './ProductCard.scss'


interface IProductCard {
    name: string
    description: string
    cardSign: ReactNode
    content: ReactNode
}

export const ProductCard = ({name, description, cardSign, content}: IProductCard) => {
    return <Card
        title={name}
        content={description}
        extra={cardSign}
        className='product-card-custom'

    >
        <div className='product-card-content-container'>
            {content}

        </div>
    </Card>
}