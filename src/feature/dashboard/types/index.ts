export type Card = {
    id: string,
    name: string,
    value: string
}

export type Dashboard = {
    graph: any,
    card: Card[],
    year: number
}

export type CardsFilter = {
    year: number
}