import { get, patch, post } from "../../../api";
import { ApiResponse } from "../../../types";
import { AddBrand, BrandFilters, GetBrands, UpdateBrand } from "../types";
export const getBrands = (params: BrandFilters) => get<BrandFilters, ApiResponse<GetBrands>>({ endpoint: 'product-brand', params })
export const getBrand = (id: string) => get({ endpoint: `specy/${id}` })
export const addBrand = (data: AddBrand) => post({ endpoint: 'product-brand', data })
export const updateBrand = (data: UpdateBrand) => patch({ endpoint: 'specy', data })
export const deleteBrand = (id: string) => patch({ endpoint: `specy${id}` })
