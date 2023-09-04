import { get, patch, post } from "../../../api";
import { AddProduct, ProductFilters, UpdateProduct } from "../types";
export const getProducts = (params: ProductFilters) => get({ endpoint: 'products', params })
export const getProduct = (id: string) => get({ endpoint: `product/${id}` })
export const addProduct = (data: AddProduct) => post({ endpoint: 'product', data })
export const updateProduct = (data: UpdateProduct) => patch({ endpoint: 'product', data })
export const deleteProduct = (id: string) => patch({ endpoint: `product${id}` })
