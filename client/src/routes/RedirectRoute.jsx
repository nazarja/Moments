import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const RedirectRoute = () => {
    const isAuthenticated = useSelector(state => state.user.auth.isAuthenticated);
    return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default RedirectRoute;