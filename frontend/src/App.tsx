import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Job from "./pages/Job";
import ViewJobDetails from "./components/Job/ViewJobDetails";
import JobPostForm from "./components/Job/PostJobForm";
import AlumniDirectory from "./pages/AlumniDriectory";
import ErrorPage from "./components/Error";
import ViewAlumniDetails from "./components/AlumniDriectory/ViewAlumniDetails";
import Event from "./pages/Event";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import AlumniRegistrationForm from "./components/auth/AlumniRegisterForm";
import SuccessfullAccount from "./components/shared/SuccessfullAccount";
import Profile from "./components/shared/Profile";


const appRoute = createBrowserRouter([
  { path: "/", element: <Home /> },

  { path: "/alumni/register", element: <AlumniRegistrationForm />},
  {path: "/alumni/successfull", element: <SuccessfullAccount />},
  { path: "/profile", element: <Profile />},

  { path: "/login", element: <Login />},
  { path: "/signup", element: <Signup />},

  { path: "/directory", element: <AlumniDirectory />, errorElement: <ErrorPage /> },
  {path: "/alumni", element: <ViewAlumniDetails />},

  // job related pathing
  { path: "/jobs", element: <Job /> },
  { path: "/jobs/details", element: <ViewJobDetails /> },
  { path: "/jobpost", element: <JobPostForm /> },

  // Event related pathing
  {path: "/event", element: <Event />},

]);

function App() {
    return <RouterProvider router={appRoute} />;
}

export default App
