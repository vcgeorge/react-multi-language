import { Navigate } from "react-router";
import LoginConfig from "pages/auth/Login/LoginConfig";
import NoPageConfig from "pages/NoPage/NoPageConfig";

const routes = [
    LoginConfig.route,
    NoPageConfig.route,
    {
        path: "*",
        element: <Navigate to="/404" replace />
    }
];

export default routes;

