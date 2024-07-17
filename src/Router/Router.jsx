import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import SendMoney from "../Components/SendMoney/SendMoney";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Register></Register>
            },
            {
                path: 'login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard',
                element: <SendMoney></SendMoney>
            }
        ]
    }
])

export default router