import React, {useEffect} from 'react';
import AppRouter from "./components/AppRouter";
import {useAppDispatch} from "./hooks/useAppDispatch";
import {checkAuth} from "./store/actions/authAction";


function App() {

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (localStorage.getItem("token")) {
            console.log("token here")
            dispatch(checkAuth())
        }
    }, [])

    return (
        <AppRouter/>

    );
}

export default App;
