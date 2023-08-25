import axios from "axios";
import { ApiCallOptions } from "../types";
import { getApiBaseURL } from "../configurationService";
import { getToken } from "../token";


const getAuthHeaders = () => {
    return {
        'Authorization': `Beare ${getToken()}`
    }
}
const baseURL = getApiBaseURL()
export const get = <ParamsType, ResponseType>(options: ApiCallOptions<ParamsType>) => {
    const { endpoint, params } = options
    const url = `${baseURL}${endpoint}`
    return axios.get<ResponseType>(url, { params, headers: getAuthHeaders() })
}

export const post = <ParamsType, DataType, ResponseType>(options: ApiCallOptions<ParamsType, DataType>) => {
    const { endpoint, data, params } = options
    const url = `${baseURL}${endpoint}`
    return axios.post<ResponseType>(url, data, { params })

}

// get<Filter>({ endpoint: '', params: { limit: 10 } })