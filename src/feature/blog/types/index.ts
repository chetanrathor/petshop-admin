import { Filter } from "../../../types";

export type BlogsFilter = Filter & {}
export type AddBlog = {}
export type UpdateBlog = AddBlog & {}


export type Blog = {
    id: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    status: string;
    isUpdated: boolean;
    title: string;
    description: string;
    subTitle: string;
    heroImage: string;
};

export type GetBlogs = {
    data: Blog[],
    totalCaount: number
}
export type BlogFilterStatusPayload = {
    status: string
}

export type BlogSlice = {
    blogs: Blog[],
    filters: { status: string }
}

