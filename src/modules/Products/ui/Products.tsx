import {useEffect, useState} from "react"
import Modal from "@/components/Modal/Modal.tsx";
import {ProductCard} from "@/components/ProductCard/ProductCard.tsx"
import { useProductsStore } from "../store/productsStore";
import { useFiltersStore } from "@/modules/Filters"
import { Button } from "antd";
import "./Products.scss"

export function Products() {

    const {products, getProducts} = useProductsStore()
    const {filtersData} = useFiltersStore()


    const [isModalOpen, setIsModalOpen] = useState(false)

    const closeModal = () => {
        console.log('delete todo')
    }

    useEffect(() => {
        getProducts(filtersData)
    }, [filtersData])


    return (
        <>
            <div>
                <h2 className='products-title'>Товары</h2>
                <div className="products-content">
                    <div className='products-cards'>
                        {
                            products.map(({name, product_id, price, image}) =>
                                <ProductCard
                                    key={product_id}
                                    name={name}
                                    product_id={product_id}
                                    price={price}
                                    image={image}
                                    description='description'
                                    cardSign={<span>+</span>}
                                />
                            )
                        }
                    </div>
                    <Button className="products_show-more" type="primary">Показать ещё</Button>
                </div>
            </div>
            <Modal
                confirmHandler={closeModal}
                cancelHandler={() => setIsModalOpen(false)}
                title={'Подтвердите удаление задачи'}
                isOpen={isModalOpen}
            />
        </>

    )
}