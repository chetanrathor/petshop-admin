import axios from "axios";
import { getApiBaseURL } from "../configurationService";
import { ApiCallOptions } from "../types";

const baseURL = getApiBaseURL()
export const get = <ParamsType, ResponseType>(options: ApiCallOptions<ParamsType>) => {
    const { endpoint, params } = options
    const url = `${baseURL}${endpoint}`
    return axios.get<ResponseType>(url, { params, })
}
export const post = <ParamsType, DataType, ResponseType>(options: ApiCallOptions<ParamsType, DataType>) => {
    const { endpoint, data, params } = options
    const url = `${baseURL}${endpoint}`
    return axios.post<ResponseType>(url, data, { params })
}
export const patch = <ParamsType, DataType, ResponseType>(options: ApiCallOptions<ParamsType, DataType>) => {
    const { endpoint, data, params } = options
    const url = `${baseURL}${endpoint}`
    return axios.patch<ResponseType>(url, data, { params })
}
export const deleteAPI = <ResponseType>(options: ApiCallOptions) => {
    const { endpoint, params } = options
    const url = `${baseURL}${endpoint}`
    return axios.delete<ResponseType>(url, { params })
}
// get<Filter>({ endpoint: '', params: { limit: 10 } })