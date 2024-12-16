import { gql } from '@apollo/client'


export  const GET_SORTED_PRODUCTS = gql` 
    query getSortedProducts ($price: Int, $in_stock: Boolean, $discount: Boolean, $priceSort: String, $ratingSort: String, $showCount: Int, $category: ID) {
        sortedProducts (
                price: $price, 
                in_stock: $in_stock, 
                discount: $discount,
                priceSort: $priceSort, 
                ratingSort: $ratingSort, 
                showCount: $showCount,
                category: $category
            ) {
                id,
                name,
                price, 
                image
            }
        }
    `