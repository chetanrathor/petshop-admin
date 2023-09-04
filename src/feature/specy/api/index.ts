import { get, patch, post } from "../../../api";
import { AddSpecy, SpecyFilters, UpdateSpecy } from "../types";
export const getSpecies = (params: SpecyFilters) => get({ endpoint: 'species', params })
export const getSpecy = (id: string) => get({ endpoint: `specy/${id}` })
export const addSpecy = (data: AddSpecy) => post({ endpoint: 'specy', data })
export const updateSpecy = (data: UpdateSpecy) => patch({ endpoint: 'specy', data })
export const deleteSpecy = (id: string) => patch({ endpoint: `specy${id}` })
