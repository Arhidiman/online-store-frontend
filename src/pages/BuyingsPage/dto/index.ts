export type GetAllTransactionsDto = {
    jwt_token: string
}

export type TransactionsDataDto = {
    id: number,
    full_price: number, 
    created_at: string, 
    username: string
}