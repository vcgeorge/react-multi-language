import NoPage from "./NoPage";
import authRoles from "core/auth/authRole";

const NoPageConfig = {
    route: {
        path: "/404",

        element: <NoPage />,
    },
    layout: {
        header: {
            display: false,
        },
        sidebar: {
            display: false,
        },
        footer: {
            display: false,
        },
    },
    auth: authRoles.onlyGuest,
};

export default NoPageConfig;
