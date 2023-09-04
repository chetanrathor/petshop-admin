import { get, patch, post } from "../../../api";
import { AddBlog, BlogsFilter, UpdateBlog } from "../types";
export const getBlogs = (params: BlogsFilter) => get({ endpoint: 'blogs', params })
export const getProduct = (id: string) => get({ endpoint: `product/${id}` })
export const addProduct = (data: AddBlog) => post({ endpoint: 'product', data })
export const updateProduct = (data: UpdateBlog) => patch({ endpoint: 'product', data })
export const deleteProduct = (id: string) => patch({ endpoint: `product${id}` })
