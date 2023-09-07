import { Filter } from "../../../types";

export type BrandFilters = Filter & {}
export type AddBrand = {
    name: string
}
export type UpdateBrand = AddBrand & {
    id: string
}
