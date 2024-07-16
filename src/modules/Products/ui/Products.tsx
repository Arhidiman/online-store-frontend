import {useState} from "react"
import Modal from "@/components/Modal/Modal.tsx";
import {getLocalstorageItem} from "@/common/lib/getLocalstorageItem.ts";
import {ProductCard} from "@/components/ProductCard/ProductCard.tsx"
import mockProduct from '../mock/mockProduct.jpg'
import "./Products.scss"
import { Button } from "antd";

export function Products() {

    const [userId] = useState<string | null>(getLocalstorageItem('_id'))
    const [isModalOpen, setIsModalOpen] = useState(false)

    const closeModal = () => {
        console.log('delete todo')
    }


    // console.log('toDoItems', toDoItems)
    console.log('user _id', userId)

    const mockCards = [1,2,3,4,]

    const cardContent = () => <div>
        <img alt='product image' src={mockProduct}/>
        <p>Цена: 1000000р</p>       
        <p>Котяра необыкновенный</p>
        <Button>Убрать в корзину</Button>
    </div>

    return (


        <>
            <div>
                <h2 className='products-title'>Products</h2>
                <div className="products-content">
                    <div className='products-cards'>
                        {
                            mockCards.map(() =>
                                <ProductCard
                                    name='уШЛЁПoк'
                                    description='description'
                                    cardSign={<span>+</span>}
                                    content={cardContent()}
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