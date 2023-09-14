import { useEffect } from 'react'
import ListLayout from '../../../components/layout/ListLayout'
import { useAppDispatch, useAppSelector } from '../../../hooks/selctor.dispatch.hook'
import TableElement from '../../../shared/components/TableElement'
import { setOffset } from '../../../store/pagination.slice'
import { fetchProductCategories } from '../state/category.slice'

const Category = () => {
    const { category, pagination } = useAppSelector((state) => state)
    const { categories } = category
    const { limit, offset, } = pagination
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setOffset(0))
        dispatch(fetchProductCategories({ limit, offset, order: 'DESC' }))
    }, [dispatch])
    useEffect(() => {
        dispatch(fetchProductCategories({ limit, offset, order: 'DESC' }))
    }, [offset])
    const headings = ['id', 'createdAt', 'name', 'status']
    return (
        <ListLayout>
            <TableElement headingProps={headings} data={categories}></TableElement>
        </ListLayout>
    )
}

export default Category


