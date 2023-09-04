import { get } from "../../../api";
import { OrdersFilter } from "../types/index";
export const getOrders = (params: OrdersFilter) => get({ endpoint: 'orders', params })
export const getOrder = (id: string) => get({ endpoint: `order/${id}` })
