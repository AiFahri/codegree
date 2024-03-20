import { createBrowserRouter } from "react-router-dom";

// Route
import ProtectedRoute from "../components/routes/ProtectedRoute";
import AuthRoute from "../components/routes/AuthRoute";

// Pages
import LoginPage from "../components/pages/LoginPage";
import RegisterPage from "../components/pages/RegisterPage";
import Question from "../components/pages/question/Question";
import Question2 from "../components/pages/question/Question2";
import Acc_Success from "../components/pages/question/Acc_Success";
import Landing_Page from "../components/pages/Landing_Page";
import Subscribtion from "../components/pages/Subscription";
import Payment from "../components/ui/Payment";
import Dashboard from "../components/home/Dashboard";
import Question3 from "../components/pages/question/Question3";
import ResultCourse from "../components/pages/question/ResultCourse";
import Mentoring from "../components/pages/Mentoring";
import Course from "../components/pages/Course";
import Quizz from "../components/pages/quiz/Quizz";

const router = createBrowserRouter([
  {
    path: "/landingpage",
    element: <Landing_Page />,
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
    path: "/question3",
    element: <Question3 />,
  },
  {
    path: "/result",
    element: <ResultCourse />,
  },
  {
    path: "/subscription",
    element: <Subscribtion />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/mentoring",
    element: <Mentoring />,
  },
  {
    path: "/course",
    element: <Course />,
  },
  {
    path: "/quiz",
    element: <Quizz />,
  },
//authroute
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
        path: "/question3",
        element: <Question3 />,
      },
      {
        path: "/result",
        element: <ResultCourse />,
      },
      {
        path: "/subscription",
        element: <Subscribtion />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/mentoring",
        element: <Mentoring />,
      },
      {
        path: "/course",
        element: <Course />,
      },
      {
        path: "/quiz",
        element: <Quizz />,
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
