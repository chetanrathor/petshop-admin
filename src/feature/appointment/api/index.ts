import { get, patch } from "../../../api";
import { AppointmentFilters, UpdateAppointment } from "../types";
export const getAppointments = (params: AppointmentFilters) => get({ endpoint: 'products', params })
export const getAppointment = (id: string) => get({ endpoint: `product/${id}` })
export const updateAppointment = (data: UpdateAppointment) => patch({ endpoint: 'product', data })
