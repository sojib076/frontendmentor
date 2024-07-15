import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "sonner";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notification from "./Notification.tsx";
const router =createBrowserRouter([
      {
        path: "/",
        element: <App />,
      },

      {
        path: "/notification",
        element: <Notification />,
      }
]);
ReactDOM.createRoot(document.getElementById("root")!).render(

  <React.StrictMode>
      <RouterProvider router={router}/>
      <Toaster />
  </React.StrictMode>
);
