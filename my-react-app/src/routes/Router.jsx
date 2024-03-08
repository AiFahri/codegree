import { createBrowserRouter } from "react-router-dom";

// Route
import ProtectedRoute from "../components/routes/ProtectedRoute";
import AuthRoute from "../components/routes/AuthRoute.jsx";

// Pages
import Acc_Success from "../home/Acc_Success.jsx";
import LoginPage from "../components/pages/LoginPage";
import RegisterPage from "../components/pages/RegisterPage";
import Question from "../home/Question.jsx";

const router = createBrowserRouter([
  {
    element: <AuthRoute />,
    children: [
      {
        path: "/acc",
        element: <Acc_Success />,
      },
      {
        path: "/question",
        element: <Question />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <RegisterPage />,
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/overview",
        element: <Acc_Success />,
      },
    ],
  },
]);

export default router;
