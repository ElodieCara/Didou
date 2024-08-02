import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import NewsDetail from "./pages/NewsDetail";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./sass/style.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/news/:id",
    element: <NewsDetail />, // Add the NewsDetail route
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
