export type ApiCallOptions<ParamsType = {}, DataType = {}> = {
    endpoint: string,
    params?: ParamsType,
    data?: DataType
}

export type SortOrder = 'ASC' | 'DSC'

export type Filter = {
    limit: number,
    offset: number,
    search?: string,
    order: SortOrder
}

export type ApiResponse<Response> = {
    statusCode: number,
    message: string,
    response: Response
}



