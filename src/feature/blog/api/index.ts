import { get, patch, post } from "../../../api";
import { ApiResponse } from "../../../types";
import { AddBlog, BlogsFilter, GetBlogs, UpdateBlog } from "../types";
export const getBlogs = (params: BlogsFilter) => get<BlogsFilter, ApiResponse<GetBlogs>>({ endpoint: 'blog', params })
export const getProduct = (id: string) => get({ endpoint: `product/${id}` })
export const addProduct = (data: AddBlog) => post({ endpoint: 'product', data })
export const updateProduct = (data: UpdateBlog) => patch({ endpoint: 'product', data })
export const deleteProduct = (id: string) => patch({ endpoint: `product${id}` })
