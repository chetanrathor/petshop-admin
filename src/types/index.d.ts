import React, { ReactNode } from "react"

export type ApiCallOptions<ParamsType = {}, DataType = {}> = {
    endpoint: string,
    params?: ParamsType,
    data?: DataType
}

export type SortOrder = 'ASC' | 'DESC'

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



export type ModalComponentProperties = {
    child: JSX.Element
}



export type ModalSlice = {
    open: boolean,
    children: ModalChild
}

