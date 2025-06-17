import { gql } from "@apollo/client"

export const queries = {
    GET_CATEGORIES: gql`
        query {
            categories {
                name, id
            }
        }
    `
}