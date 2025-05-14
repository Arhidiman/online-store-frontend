import {useEffect, useState} from "react"
import { useQuery } from '@apollo/client'
import { ActionButton } from "@/UI/ActionButton";
import { ProductCard } from "@/components/ProductCard/ui/ProductCard"
import { useFiltersStore } from "@/modules/Filters"
import { useGlobalStore } from "@/store/useGlobalStore"
import { GET_SORTED_PRODUCTS } from "../api/queries"
import { GET_CURRENT_ORDER } from "@/queries/queries"
import { VALIDATE_JWT } from "@/queries/queries";
import type { ProductDto } from "../api/dto";
import "./Products.scss"


export function Products() {

    const { filters, setFilters } = useFiltersStore()
    const { orderData, setOrderData } = useGlobalStore()
    const [ userId, setUserId ] = useState<number | undefined>()

    const [showMore] = useState<number>(6)

    const {data} = useQuery(GET_SORTED_PRODUCTS, {variables: filters})
    const { data: orderGQLData } = useQuery(GET_CURRENT_ORDER, { variables: { user_id: userId }, skip: !userId, fetchPolicy:'network-only' })

    const { sortedProducts: products } = data || []

    const jwt_token: string | null = localStorage.getItem('token')
    const { data: validUserData } = useQuery(VALIDATE_JWT, { variables: { jwt_token }, skip: !jwt_token})

    useEffect(() => {
        if (orderGQLData) {
            const { getCurrentOrderByUserId: order } = orderGQLData
            const { id } = order || {}
            setOrderData({ ...orderData, order: { id } })
        }

    }, [orderGQLData])


    useEffect(() => {
        if (validUserData) {
            const { validate } = validUserData
            const { id: user_id } = validate || {}
            setUserId(user_id)
        }

        if (!validUserData) {
            setOrderData({ order: {}, items:[]})
        }

    }, [validUserData])


    const showMoreProducts = () => {
        setFilters({ ...filters, showCount: filters.showCount + showMore})
    }

    return (
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
                                userId={userId}
                                description='description'
                            />
                        )
                    }
                </div>
                {
                    products 
                        && products.length > 0
                        && <ActionButton className="products_show-more" type="down" text = 'Показать ещё' actionHandler={showMoreProducts}/>
                }
            </div>
        </div>
    )
}