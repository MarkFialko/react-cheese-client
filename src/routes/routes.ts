import HomePage from "../pages/HomePage";
import LoginPage from '../pages/LoginPage'
import RegistrationPage from "../pages/RegistrationPage";
import ProfilePage from "../pages/ProfilePage";
import AdminPage from "../pages/AdminPage";

export const privateRoutes = [
    {
        path: "/profile",
        Component: ProfilePage,
    },
    {
        path: "/admin",
        Component: AdminPage,
    },
]


export const publicRoutes = [
    {
        path: "/login",
        Component: LoginPage,
    },
    {
        path: '/registration',
        Component: RegistrationPage,
    },
    {
        path: '/',
        Component: HomePage
    }
]