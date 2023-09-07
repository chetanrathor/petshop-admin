import { Filter } from "../../../types";

export type CatgoryFilter = Filter & {}
export type AddCategory = {
    name: string
}
export type UpdateCategory = AddCategory & {}
export type Category = {
    id: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: null | string;
    status: string;
    name: string;
}
export type CategorySliceFilters = {
    status: string,

}
export type CategorySlice = {
    categories: Category[],
    filters: CategorySliceFilters
}

export type CategoryFilterStatusPayload = {
    status: string
}

export type GetCategories = {
    data: Category[]
}

