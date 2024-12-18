import {useEffect, useState} from "react"
import { Button } from "antd";
import { useQuery } from '@apollo/client'
import {ProductCard} from "@/components/ProductCard/ui/ProductCard"
import { useFiltersStore } from "@/modules/Filters"
import { useGlobalStore } from "@/store/useGlobalStore"
import { GET_SORTED_PRODUCTS } from "../api/queries"
import { GET_CURRENT_ORDER } from "@/queries/queries"
import type { ProductDto } from "../api/dto";
import "./Products.scss"



export function Products() {

    const { filters, setFilters } = useFiltersStore()
    const [products, setProducts] = useState<ProductDto[] | []>([])
    const [showMore] = useState<number>(6)


    const {data} = useQuery(GET_SORTED_PRODUCTS, {variables: filters})
    const { data: orderGQLData } = useQuery(GET_CURRENT_ORDER, { variables: { user_id: 102 }})

    const { orderData, setOrderData } = useGlobalStore()



    useEffect(() => {
        const { sortedProducts: products } = data || []
        setProducts(products as ProductDto[])
    }, [data])

    useEffect(() => {

        if (orderGQLData) {

            console.log(orderGQLData, 'orderGQLData' )

            const { getCurrentOrderByUserId: order } = orderGQLData

            const { id } = order || {}

            setOrderData({ ...orderData, order: { id } })

            console.log(order, 'current order')        
        }

    }, [orderGQLData])



    const showMoreProducts = () => {
        setFilters({ ...filters, showCount: filters.showCount + showMore})
    }


    





   


    return (
        <>
            <div className="products">
                <h2 className='products_title'>Товары</h2>
                <div className="products-content">
                    <div className='products-cards'>
                        {
                            products && products.map(({id, name, price, image}: ProductDto) =>
                                <ProductCard
                                    key={id}
                                    name={name}
                                    product_id={id}
                                    price={price}
                                    image={image}
                                    description='description'
                                    cardSign={<span>+</span>}
                                />
                            )
                        }
                    </div>
                    <Button className="products_show-more" type="primary" onClick={showMoreProducts}>Показать ещё</Button>
                </div>
            </div>
        </>

    )
}