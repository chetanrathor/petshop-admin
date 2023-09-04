import { Navigate, Outlet, useLocation } from "react-router-dom"
import MainLayout from "../components/layout/MainLayout"
import DashboardRoute from "../feature/dashboard/routes";
import UserRoutes from "../feature/user/routes";
import UserDetails from "../feature/user/components/UserDetails";
import OrderRoutes from "../feature/order/routes";
import ProductRoute from "../feature/product/routes";
import ConsultationRoutes from "../feature/consultation/routes";
import CategoryRoute from "../feature/category/routes";
import SpecyRoutes from "../feature/specy/routes";
import BlogRoutes from "../feature/blog/routes";
import AppointmentRoutes from "../feature/appointment/routes";

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
        path: '',
        element: <App />,
        children: [
            { path: '', element: <DashboardRoute></DashboardRoute> },

            {
                path: '/users/*', element: <UserRoutes></UserRoutes>,
            },
            {
                path: '/orders/*', element: <OrderRoutes></OrderRoutes>,
            },
            {
                path: '/Products/*', element: <ProductRoute></ProductRoute>,
            },
            {
                path: '/Consultations/*', element: <ConsultationRoutes></ConsultationRoutes>,
            },
            {
                path: '/categories/*', element: <CategoryRoute></CategoryRoute>,
            },
            {
                path: '/species/*', element: <SpecyRoutes></SpecyRoutes>,
            },
            {
                path: '/blogs/*', element: <BlogRoutes></BlogRoutes>,
            },
            {
                path: '/appointments/*', element: <AppointmentRoutes></AppointmentRoutes>,
            },
            { path: '*', element: <Navigate to="." /> },
        ],
    },
];