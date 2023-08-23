import React, { useState } from 'react'
import { publicRoutes } from './public';
import { useRoutes } from 'react-router-dom';
import { protectedRoutes } from './protected';

const AppRoute = () => {
    const [auth, setAuth] = useState(true)

    const routes = auth ? protectedRoutes : publicRoutes;
    console.log('routes', routes)
    const element = useRoutes([...routes]);
    console.log('elemnt', element)
    return <>{element}</>;
}

export default AppRoute