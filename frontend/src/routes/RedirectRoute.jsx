import { Navigate, Outlet } from "react-router-dom";

const RedirectRoute = () => {
    const auth = false;
    return auth ? <Navigate to="/" /> : <Outlet />;
};

export default RedirectRoute;