import type { TransactionsDataDto } from "../pages/CartPage/dto";

export type IDeliveryData = Omit<TransactionsDataDto, 'full_price' | 'created_at'> | {}
