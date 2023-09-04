import { get, patch, post } from "../../../api";
import { AddCategory, CatgoryFilter, UpdateCategory } from "../types";
export const getCategories = (params: CatgoryFilter) => get({ endpoint: 'categories', params })
export const getCategory = (id: string) => get({ endpoint: `category/${id}` })
export const addCategory = (data: AddCategory) => post({ endpoint: 'category', data })
export const updateCategory = (data: UpdateCategory) => patch({ endpoint: 'category', data })
export const deleteCategory = (id: string) => patch({ endpoint: `category${id}` })
