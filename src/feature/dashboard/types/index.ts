export type Card = {
    productsCount: number
    brandsCount: number
    ordersCount: number
    appointmentsCount: number
    usersCount: number
    consultationsCount: number
    blogsCount: number
    transactionsCount: number
    totalProfit: number
    totalLoss: number
}

export type Dashboard = {
    graph: any,
    card: Card,
    year: number
}

export type CardsFilter = {
    year: number
}