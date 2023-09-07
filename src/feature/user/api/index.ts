import { get } from "../../../api";
import { Filter } from "../../../types";
import { GetUsersFilter } from "../types";

export const getUsers = (params: GetUsersFilter) => get<GetUsersFilter, {}>({ endpoint: 'users', params })
export const getUser = (id: string) => get({ endpoint: `user/${id}` })
export const getUserShippings = (id: string, params: Filter) => get({ endpoint: `address/user/${id}`, params })
export const getUserOrders = (id: string, params: Filter) => get({ endpoint: `orders/user/${id}`, params })
export const getUserConsultations = (id: string, params: Filter) => get({ endpoint: `consultations/user/${id}`, params })
export const getUserAppointments = (id: string, params: Filter) => get({ endpoint: `appointments/user/${id}`, params })