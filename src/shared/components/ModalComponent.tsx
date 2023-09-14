import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel'
import { Modal } from '@mui/material'
import { ModalChild } from '../../constants/modal-child'
import BrandAdd from '../../feature/brand/components/BrandAdd'
import CategoryAdd from '../../feature/category/routes/CategoryAdd'
import SpecyAdd from '../../feature/specy/components/SpecyAdd'
import { useAppDispatch, useAppSelector } from '../../hooks/selctor.dispatch.hook'
import { setOpen } from '../../store/modalSlice'
import { theme } from '../../theme/theme'
const ModalComponent = () => {
    const { children, open } = useAppSelector((state) => state.modal)
    const dispatch = useAppDispatch()
    const getChild = () => {
        switch (children) {
            case ModalChild.Category:
                return <CategoryAdd></CategoryAdd>
            case ModalChild.Specy:
                return <SpecyAdd></SpecyAdd>
            case ModalChild.Brand:
                return <BrandAdd></BrandAdd>
            default:
                return <></>
        }
    }
    const primaryColor = theme.palette.primary.main
    return (
        <Modal open={open} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
            <>
                <CancelIcon sx={{ color: primaryColor }} onClick={() => { dispatch(setOpen(false)) }}></CancelIcon>
                {getChild()}
            </>
        </Modal>
    )
}
export default ModalComponent