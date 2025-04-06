import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import HotelProvider from "./context/HotelProvider"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HotelProvider>
      <RouterProvider router={router} />;
    </HotelProvider>
  </React.StrictMode>
);
