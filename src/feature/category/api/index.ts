import { get, patch, post } from "../../../api";
import { ApiResponse } from "../../../types";
import { AddCategory, CatgoryFilter, GetCategories, UpdateCategory } from "../types";
export const getCategories = (params: CatgoryFilter) => get<CatgoryFilter, ApiResponse<GetCategories>>({ endpoint: 'product-category', params })
export const getCategory = (id: string) => get({ endpoint: `category/${id}` })
export const addCategory = (data: AddCategory) => post({ endpoint: 'product-category', data })
export const updateCategory = (data: UpdateCategory) => patch({ endpoint: 'category', data })
export const deleteCategory = (id: string) => patch({ endpoint: `category${id}` })
