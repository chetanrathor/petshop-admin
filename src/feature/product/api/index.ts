import { get, patch, post } from "../../../api";
import { ApiResponse } from "../../../types";
import { AddProduct, GetProducts, ProductFilters, UpdateProduct } from "../types";
export const getProducts = (params: ProductFilters) => get<ProductFilters, ApiResponse<GetProducts>>({ endpoint: 'product', params })
export const getProduct = (id: string) => get({ endpoint: `product/${id}` })
export const addProduct = (data: AddProduct) => post({ endpoint: 'product', data })
export const updateProduct = (data: UpdateProduct) => patch({ endpoint: 'product', data })
export const deleteProduct = (id: string) => patch({ endpoint: `product${id}` })
