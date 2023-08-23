import { Navigate, Outlet, useLocation } from "react-router-dom"
import MainLayout from "../components/layout/MainLayout"
import DashboardRoute from "../feature/dashboard/routes";
import UserRoutes from "../feature/user/routes";
import UserDetails from "../feature/user/components/UserDetails";

const App = () => {
    const location = useLocation()
    console.log('location', location)
    return (
        <>
            <MainLayout>
                <Outlet></Outlet>
            </MainLayout>
        </>
    )
}

export const protectedRoutes = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: <DashboardRoute></DashboardRoute> },

            {
                path: '/users/*', element: <UserRoutes></UserRoutes>,
            },
            // { path: '/profile', element: <Profile /> },
            // { path: '/', element: <Dashboard /> },
            // { path: '*', element: <Navigate to="." /> },
        ],
    },
];