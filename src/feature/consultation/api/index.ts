import { get, patch, post } from "../../../api";
import { ConsultanciesFIlter, CreateConsultancy, UpdateConsultacy } from "../types";
export const getConsultancies = (params: ConsultanciesFIlter) => get({ endpoint: 'consultancy', params })
export const getConsultancy = (id: string) => get({ endpoint: `consultancy/${id}` })
export const createConsultancy = (data: CreateConsultancy) => post({ endpoint: 'consultancy', data })
export const updateConsultancy = (data: UpdateConsultacy) => patch({ endpoint: 'consultancy', data })
