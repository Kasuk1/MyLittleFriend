import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectUser } from "../store/userSlice/user.slice";

export const PublicRoutes = ({ children }) => {
    const user = useSelector(selectUser);

    return user ? <Navigate to='/' /> : children;
};
