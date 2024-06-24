import {useEffect, useState} from "react"
import Modal from "@/components/Modal/Modal.tsx";
import {getLocalstorageItem} from "@/common/lib/getLocalstorageItem.ts";
import "./Goods.scss"

export function Goods() {

    const [userId] = useState<string | null>(getLocalstorageItem('_id'))
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [userName, setUserName] = useState<string | null>('')


    const closeModal = () => {
        console.log('delete todo')
    }

    useEffect(() => {
        setUserName(getLocalstorageItem('name'))
    }, [])

    // console.log('toDoItems', toDoItems)
    console.log('user name', userName)
    console.log('user _id', userId)

    return (
        <>
            <div>
                <h2 className='goods-title'>There will be placed goods very soon</h2>
                <div className='goods-container'>
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