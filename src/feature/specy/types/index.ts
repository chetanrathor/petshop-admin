import { Filter } from "../../../types";

export type SpecyFilters = Filter & {}
export type AddSpecy = {
    name: string
}
export type UpdateSpecy = AddSpecy & {
    id: string
}
