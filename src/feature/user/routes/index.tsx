import { Route, Routes } from 'react-router-dom'
import UserDetails from '../components/UserDetails'
import Users from '../components/Users'

const UserApp = () => {
    return (
        <></>
        // <UserRoute></UserRoute>
    )
}


const UserRoutes = () => {
    return (

        // <UserRoute/>

        <Routes>
            <Route path='' element={<Users></Users>}></Route>
            <Route path=':id' element={<UserDetails></UserDetails>}>
            </Route>
        </Routes>

    )
}

export default UserRoutes