import React, {useEffect} from 'react';
import AppRouter from "./components/AppRouter";
import {useAppDispatch} from "./hooks/useAppDispatch";
import {checkAuth} from "./store/actions/authAction";
import {useNavigate} from "react-router-dom";
import {getAll} from "./store/actions/basketAction";


function App() {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("token")) {
            dispatch(checkAuth())
            dispatch(getAll())
        }
        navigate('/')
    }, [])

    return (
        <AppRouter/>
    );
}

export default App;
