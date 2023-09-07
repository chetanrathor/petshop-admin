import { Filter } from "../../../types";

export type ProductFilters = Filter & {
}

export type AddProduct = {
    name: string,
    mrp: number,
    sellingPrice: number,
    description: string,
    isOnSale: true,
    specy: string,
    category: string,
    discount: number,
    brand: string,
    breedType: string,
    inStock: string,
    productImages: string[]
}

export type UpdateProduct = AddProduct & {

}

export type ProductFilterStatusPayload = {
    status: string,
}
export type ProductFilterBrandPayload = {
    brand: string,
}
export type ProductFilterBreedTypePayload = {
    breedType: string
}
export type ProductFilterSpecyPayload = {
    specy: string
}