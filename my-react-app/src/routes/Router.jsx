import { createBrowserRouter } from "react-router-dom";

// Route
import ProtectedRoute from "../components/routes/ProtectedRoute";
import AuthRoute from "../components/routes/AuthRoute";

// Pages
import LoginPage from "../components/pages/LoginPage";
import RegisterPage from "../components/pages/RegisterPage";
import Question from "../home/Question";
import Acc_Success from "../home/Acc_Success";

const router = createBrowserRouter([
  {
    element: <AuthRoute />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <RegisterPage />,
      },
      {
        path: "/acc_success",
        element: <Acc_Success />,
      },
      {
        path: "/question",
        element: <Question />,
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Acc_Success />,
      },
    ],
  },
]);

export default router;
