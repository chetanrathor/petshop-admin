import * as Yup from 'yup';
export const addProductSchema = Yup.object().shape({
    title: Yup.string().min(3).required(),
    category: Yup.string().required(),
    mrp: Yup.number().min(0).required(),
    sellingPrice: Yup.number().min(0),
    specy: Yup.string().required(),
    brand: Yup.string().required(),
    discount: Yup.number().min(0),
    breedType: Yup.string().required(),
    inStock: Yup.string().required(),
    isOnSale: Yup.boolean().required(),
    description: Yup.string().required()
})     