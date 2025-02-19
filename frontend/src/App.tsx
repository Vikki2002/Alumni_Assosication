import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Job from "./pages/Job";
import ViewJobDetails from "./components/Job/ViewJobDetails";
import JobPostForm from "./components/Job/PostJobForm";
import AlumniDirectory from "./pages/AlumniDriectory";
import ErrorPage from "./components/Error";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ViewAlumniDetails from "./components/AlumniDriectory/ViewAlumniDetails";


const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue color
      light: "#42a5f5",
      dark: "#1565c0",
    },
    secondary: {
      main: "#d32f2f", // Red color
    },
  },
});

const appRoute = createBrowserRouter([
  { path: "/", element: <Home /> },

  { path: "/directory", element: <AlumniDirectory />, errorElement: <ErrorPage /> },
  {path: "/alumni", element: <ViewAlumniDetails />},

  // job related pathing
  { path: "/jobs", element: <Job /> },
  { path: "/jobs/details", element: <ViewJobDetails /> },
  { path: "/jobpost", element: <JobPostForm /> }
]);

function App() {
  return <ThemeProvider theme={theme}>
    <RouterProvider router={appRoute} />;
  </ThemeProvider>
}

export default App
