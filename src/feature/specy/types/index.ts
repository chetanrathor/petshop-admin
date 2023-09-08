import { Filter } from "../../../types";

export type SpecyFilters = Filter & {}
export type AddSpecy = {
    name: string
}
export type UpdateSpecy = AddSpecy & {
    id: string
}

export type SpeciesFilter = Filter & {};

export type AddSpecies = {
    name: string;
};



export type Specy = {
    id: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: null | string;
    status: string;
    name: string;
};

export type SpecySliceFilters = {
    status: string;
};

export type SpecySlice = {
    species: Specy[];
    filters: SpecySliceFilters;
};

export type SpeciesFilterStatusPayload = {
    status: string;
};

export type GetSpecies = {
    data: Specy[],
    totalCount: number

};
