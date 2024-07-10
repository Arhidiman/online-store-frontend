import {ReactNode} from "react";
import {Card} from 'antd'


interface IProductCard {
    name: string
    description: string
    cardSign: ReactNode
}

export const ProductCard = ({name, description, cardSign}: IProductCard) => {
    return <Card title={name} content={description} extra={cardSign}/>
}