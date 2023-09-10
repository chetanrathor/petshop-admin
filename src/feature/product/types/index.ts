import { Filter } from "../../../types";

export type ProductFilters = Filter & {
}

export type AddProduct = {
    name: string,
    mrp: number,
    sellingPrice: number,
    description: string,
    isOnSale: boolean,
    specy: string,
    category: string,
    discount: number,
    brand: string,
    breedType: string,
    inStock: string,
    productImages: string[]
}

export type UpdateProduct = AddProduct & {

}




export type ProductFilterStatusPayload = {
    status: string,
}
export type ProductFilterBrandPayload = {
    brand: string,
}
export type ProductFilterBreedTypePayload = {
    breedType: string
}
export type ProductFilterSpecyPayload = {
    specy: string
}


export type Product = {
    name: string;
    mrp: number;
    sellingPrice: number;
    description: string;
    isOnSale: boolean;
    specy: string;
    category: string;
    discount: number;
    brand: string;
    breedType: string; // You might want to create an enum for possible values like "Large"
    inStock: string; // This might be a boolean or a more specific type depending on your use case
    productImages: string[];
};

export type GetProducts = {
    data: Product[],
    totalCount: number
}  