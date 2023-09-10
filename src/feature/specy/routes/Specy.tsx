import React, { useEffect } from 'react'
import ListLayout from '../../../components/layout/ListLayout'
import TableElement from '../../../shared/components/TableElement'
import { useAppDispatch, useAppSelector } from '../../../hooks/selctor.dispatch.hook'
import { useDispatch } from 'react-redux'
import { fetchSpecies } from '../state/specy.slice'

const Specy = () => {
    const species = useAppSelector((state) => state.specy.species)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchSpecies({ limit: 0, offset: 0, order: 'DESC' }))
    }, [])
    const headings = ['id','createdAt','name','status']

    return (
        <ListLayout>
            <TableElement headingProps={headings} data={species}></TableElement>
        </ListLayout>
    )
}

export default Specy