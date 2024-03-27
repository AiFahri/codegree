import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const ProtectedRoute = () => {
  const isAuthenticated = useAuth();
//page yg bisa diakses utk yg udh login
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace={true} />;
};

export default ProtectedRoute;
