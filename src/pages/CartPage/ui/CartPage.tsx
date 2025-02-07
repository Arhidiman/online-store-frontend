import { useGlobalStore } from '@/store/useGlobalStore'
import { PageContent } from './PageContent/PageContent'
import { EmptyPageContent } from './EmptyPageContent/EmptyPageContent'
import './CartPage.scss'

export const CartPage = () => {

    const { orderData } = useGlobalStore()

    return (
        <div className='cart-page-container'>
            {
                orderData.items.length 
                ? 
                <PageContent/>
                :
                <EmptyPageContent/>
            }
        </div>
    )
}