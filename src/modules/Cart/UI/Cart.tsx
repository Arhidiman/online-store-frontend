import { CartProduct } from "@/components/CartProduct/CartProduct"
import { useQuery } from "@apollo/client"
import { GET_ORDER_ITEMS } from "../queries"
import { useGlobalStore } from "../../../store/useGlobalStore"
import type { OrderItemsInfoDto } from "../dto"
import './Cart.scss'

export const Cart = () => {

    const { currentUser } = useGlobalStore()


    const { data } = useQuery(GET_ORDER_ITEMS, { variables: { order_id: 30 } })


    const { getOrderItemsInfo: orderItems }: { getOrderItemsInfo: OrderItemsInfoDto[]} = data || {}

    console.log(orderItems, 'order items')

    return (

        <div className="cart">
            <h2 className="cart-title">Корзина</h2>

            {
                orderItems && orderItems.map(({ id, name, image, product_count, order_id }: OrderItemsInfoDto) =>{
                    return <CartProduct
                                key={id}
                                id={id}
                                name={name}
                                image={image}
                                product_count={product_count}
                                order_id={order_id}
                            />
                })
            }

        </div>

    )
}