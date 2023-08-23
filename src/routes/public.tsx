// import { lazyImport } from '../utils/lazyImport';

import AuthRoutes from "../feature/auth/routes";

// const { AuthRoutes } = lazyImport(() => import('../feature/auth/routes'), '');


export const publicRoutes = [
    {
        path: '/',
        element: <AuthRoutes></AuthRoutes>
    }
]