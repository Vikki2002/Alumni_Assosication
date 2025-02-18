import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Job from "./pages/Job";
import ViewJobDetails from "./components/Job/ViewJobDetails";
import JobPostForm from "./components/Job/PostJobForm";


const appRoute = createBrowserRouter([
  { path: "/", element: <Home />},

  // job related pathing
  { path: "/jobs", element: <Job />},
  { path: "/jobs/details", element:<ViewJobDetails />},
  {path: "/jobpost", element:<JobPostForm />}
]); 

function App() {
  return <RouterProvider router={appRoute} />;
}

export default App
