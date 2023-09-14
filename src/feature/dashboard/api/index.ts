import { get } from "../../../api";
import { ApiResponse } from "../../../types";
import { Card, CardsFilter } from "../types";

// export const getCards = (params: CardsFilter) => get<CardsFilter, ApiResponse<Card[]>>({ endpoint: 'cards', params })
export const getCards = () => get<{}, ApiResponse<Card>>({ endpoint: 'dashboard' })

