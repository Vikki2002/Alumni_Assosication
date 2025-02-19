import { useRouteError } from "react-router-dom";

interface RouterError {
  message?: string;
  statusText?: string;
}

const ErrorPage = () => {
  const error = useRouteError() as RouterError;
  console.error(error); // Log the error for debugging

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Oops! Something went wrong.</h1>
      <p>{error?.message || "An unexpected error occurred."}</p>
      <a href="/" style={{ textDecoration: "none", color: "#1976d2" }}>
        Go back to Home
      </a>
    </div>
  );
};

export default ErrorPage;
