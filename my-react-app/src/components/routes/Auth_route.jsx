import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const AuthRoute = () => {
  const isAuthenticated = useAuth();
  //page utk yg belom lgin
  return isAuthenticated ? <Navigate to="/landingpage" /> : <Outlet />;
};

export default AuthRoute;
