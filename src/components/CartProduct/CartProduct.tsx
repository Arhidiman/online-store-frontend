import mockProduct from './mock/mockProduct.jpg'
import { ActionButton } from '@/UI/ActionButton'
import './CartProduct.scss'


export const CartProduct = () => 
    <div className='cart-product'>
        <div className='cart-product-image'>
            <img alt='cart-product image' src={'https://3.downloader.disk.yandex.ru/preview/6da2a0f60bff48ee287204c61b799f7ddaaebb959614495626852613290953f8/inf/e4WTSuwXNwLjbjwaWi1vXFuQ-biYzXHMfURW4VIc4rmBxZhGf6N5b4MEf_ueh3VwZDJ7I3Qq7cU45yvpQs5vyA%3D%3D?uid=597945624&filename=%D0%9C%D0%BE%D1%80%D0%B5.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=597945624&tknv=v2&size=1920x919'}/>
        </div>
        <div>
            <p>Название товара</p>
            <p>Цена: 1000000р</p>   
        </div>
        <ActionButton type='delete' actionHandler={() => console.log('delete from cart')}/>
    </div>


