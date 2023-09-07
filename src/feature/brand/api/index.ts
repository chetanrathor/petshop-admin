import { get, patch, post } from "../../../api";
import { AddBrand, BrandFilters, UpdateBrand } from "../types";
export const getBrands = (params: BrandFilters) => get({ endpoint: 'species', params })
export const getBrand = (id: string) => get({ endpoint: `specy/${id}` })
export const addBrand = (data: AddBrand) => post({ endpoint: 'specy', data })
export const updateBrand = (data: UpdateBrand) => patch({ endpoint: 'specy', data })
export const deleteBrand = (id: string) => patch({ endpoint: `specy${id}` })
