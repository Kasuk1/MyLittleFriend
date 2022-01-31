import { Navigate } from "react-router-dom";

export const PublicRoutes = ({ children }) => {
    const user = {
        logged: false,
    }

    return user.logged ? <Navigate to='/' /> : children;
};
