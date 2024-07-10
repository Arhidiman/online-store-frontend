import {useState} from "react"
import Modal from "@/components/Modal/Modal.tsx";
import {getLocalstorageItem} from "@/common/lib/getLocalstorageItem.ts";
import {ProductCard} from "@/components/ProductCard/ProductCard.tsx"
import "./Products.scss"

export function Products() {

    const [userId] = useState<string | null>(getLocalstorageItem('_id'))
    const [isModalOpen, setIsModalOpen] = useState(false)

    const closeModal = () => {
        console.log('delete todo')
    }


    // console.log('toDoItems', toDoItems)
    console.log('user _id', userId)

    const mockCards = [1,2,3,4,5]

    return (
        <>
            <div>
                <h2 className='goods-title'>Products</h2>
                <div className='goods-container'>
                    {
                        mockCards.map(() =>
                            <ProductCard
                                name ='name'
                                description = 'description'
                                cardSign={<span>+</span>}
                            />
                        )
                    }
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