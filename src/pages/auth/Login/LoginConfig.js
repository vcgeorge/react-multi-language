import Login from './Login';
import authRoles from 'core/auth/authRole';

const LoginConfig = {
    route: {
        path: '/',
        element: <Login />,
    },
    layout: {
        header: {
            display: true,
        },
        sidebar: {
            display: false,
        },
        footer: {
            display: false,
        },
    },
    auth: authRoles.onlyGuest
}

export default LoginConfig