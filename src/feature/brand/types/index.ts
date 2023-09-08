import { Filter } from "../../../types";

export type BrandFilters = Filter & {}
export type AddBrand = {
    name: string
}
export type UpdateBrand = AddBrand & {
    id: string
}
export type Brand = {
    id: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    status: string;
    name: string;
};

export type GetBrands = {
    data: Brand[],
    totalCount: number

}

export type BrandsFilterStatusPayload = {
    status: string
}


export type BrandSliceFilters = {
    status: string
}
export type BrandSlice = {
    brands: Brand[],
    filters: BrandSliceFilters
}