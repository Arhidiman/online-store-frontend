import { gql } from "@apollo/client"

export const queries = {
    GET_CATEGORIES: gql`
        query {
            getAllCategories {
                name, id
            }
        }
    `
}