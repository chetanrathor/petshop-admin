import { get } from "../../../api";
import { Filter } from "../../../types";
import { GetUsersFilter } from "../types";

const getUsers = (params: GetUsersFilter) => get({ endpoint: 'users', params })
const getUser = (id: string) => get({ endpoint: `user/${id}` })
const getUserShippings = (id: string, params: Filter) => get({ endpoint: `address/user/${id}`, params })
const getUserOrders = (id: string, params: Filter) => get({ endpoint: `orders/user/${id}`, params })
const getUserConsultations = (id: string, params: Filter) => get({ endpoint: `consultations/user/${id}`, params })
const getUserAppointments = (id: string, params: Filter) => get({ endpoint: `appointments/user/${id}`, params })