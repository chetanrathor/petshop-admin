import { get } from "../../../api";
import { ApiResponse } from "../../../types";
import { Card } from "../types";

export const getCards = () => get<{}, ApiResponse<Card[]>>({ endpoint: 'cards' })
