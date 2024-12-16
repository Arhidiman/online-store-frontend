import {useEffect, useState} from "react"
import {ProductCard} from "@/components/ProductCard/ProductCard.tsx"
import { useFiltersStore } from "@/modules/Filters"
import { Button } from "antd";
import { useQuery } from '@apollo/client'
import { GET_SORTED_PRODUCTS } from "../api/queries";
import "./Products.scss"

import type { ProductDto } from "../api/dto";


export function Products() {

    const { filters, setFilters } = useFiltersStore()
    const [products, setProducts] = useState<ProductDto[] | []>([])
    const [showMore] = useState<number>(6)
    const {data} = useQuery(GET_SORTED_PRODUCTS, {variables: filters})


    useEffect(() => {
        const { sortedProducts: products } = data || []
        setProducts(products as ProductDto[])
    }, [data])


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