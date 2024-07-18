import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import SendMoney from "../Components/SendMoney/SendMoney";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import CashOut from "../Components/CashOut/CashOut";
import CashIn from "../Components/CashIn/CashIn";

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
            },
            {
                path: 'cash-out',
                element: <CashOut></CashOut>
            },
            {
                path: 'cash-in',
                element: <CashIn></CashIn>
            },
            {
                path: 'cash-in',
                element: <CashIn></CashIn>
            }
        ]
    }
])

export default router