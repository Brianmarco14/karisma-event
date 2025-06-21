import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";

const ProtectedLayout = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return isAuthenticated ? <Outlet/> : <Navigate to={'/login'}/>;
};

export default ProtectedLayout;
