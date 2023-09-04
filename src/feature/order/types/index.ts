import { OrderStatus } from "../../../constants/order-status";
import { Filter } from "../../../types";

export type OrdersFilter = Filter & {
    status: OrderStatus
}