import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {Bounce, ToastContainer} from "react-toastify";
import store from '../src/store/store'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
            <ToastContainer
                transition={Bounce}
                autoClose={1500}
                draggable={true}
            />
        </BrowserRouter>
    </Provider>
);

