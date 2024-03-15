import { createBrowserRouter } from "react-router-dom";

// Route
import ProtectedRoute from "../components/routes/ProtectedRoute";
import AuthRoute from "../components/routes/AuthRoute";

// Pages
import LoginPage from "../components/pages/LoginPage";
import RegisterPage from "../components/pages/RegisterPage";
import Question from "../components/home/question/Question";
import Question2 from "../components/home/question/Question2";
import Acc_Success from "../components/home/Acc_Success";
import Landing_Page from "../components/pages/Landing_Page";
import Subscribtion from "../components/pages/Subscription";
import Payment from "../components/ui/Payment";
import Dashboard from "../components/pages/Dashboard";

const router = createBrowserRouter([
  {
    element: <AuthRoute />,
    children: [
      {
        path: "/",
        element: <Landing_Page />,
      },
      {
        path: "/landingpage",
        element: <Landing_Page />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
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
      {
        path: "/question2",
        element: <Question2 />,
      },
      {
        path: "/subscription",
        element: <Subscribtion />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
