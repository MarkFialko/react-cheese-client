import React from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes/routes";
import {useAppSelector} from "../hooks/useAppSelector";
import Layout from "./BuildComponents/Layout";

const AppRouter = () => {

    const {isAuth} = useAppSelector(state => state.auth)

    return (

        <Layout>
            <Routes>
                {isAuth &&
                    privateRoutes.map(({path, Component}) =>
                        <Route key={path} path={path} element={<Component/>}/>
                    )
                }
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>}/>
                )}
            </Routes>
        </Layout>
    );
};

export default AppRouter;