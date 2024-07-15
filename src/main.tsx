import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Toaster } from "sonner";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notification from "./Notification.tsx";
import Newsletter from "./Newsletter.tsx";
const router =createBrowserRouter([

      {
        path: "/",
        element: <Notification />,
      },
      {
        path: "/notification",
        element: <Notification />,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
      }
]);
ReactDOM.createRoot(document.getElementById("root")!).render(

  <React.StrictMode>
      <RouterProvider router={router}/>
      <Toaster />
  </React.StrictMode>
);
