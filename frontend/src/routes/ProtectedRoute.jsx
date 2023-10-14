import { Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = () => {
    const auth = true;
    return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;