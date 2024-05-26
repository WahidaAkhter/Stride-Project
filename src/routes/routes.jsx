import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layoutes/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import DashboardLayout from "../layoutes/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Registration from "../pages/Registration";


export const router = createBrowserRouter([
    {
      path: "/",
        element: <MainLayout />,
        errorElement : <ErrorPage/>,
        children: [
            {
            path: '/',
                element: <Home />,
            loader : ()=>fetch("http://localhost:3000/shoes"),
            },
            {
                path: '/about',
                element: <About/>,
            },
            {
                path: '/login',
                element:<Login/>,
            },
            {
                path: '/register',
                element: <Registration/>,
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        errorElement: <ErrorPage />,
        children: [{ path: "", element: <Dashboard/> }],
    }
   
  ]);


