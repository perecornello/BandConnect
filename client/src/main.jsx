import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  announceLoader,
  announceDetailLoader,
} from "./services/AnnounceLoader";

import AnnounceEditAction from "./services/AnnounceEditAction";
import Announce from "./pages/Announce";
import App from "./App";
import AddAnnounce from "./pages/AddAnnounce";
import AnnounceAction from "./services/AnnounceAction";
import HomePage from "./pages/HomePage";
import EditAnnounce from "./pages/EditAnnounce";
import AnnounceDetail from "./pages/AnnounceDetail";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/announce",
        element: <Announce />,
        loader: announceLoader,
      },
      {
        path: "announce/:id",
        element: <AnnounceDetail />,
        loader: announceDetailLoader,
      },
      {
        path: "/AddAnnounce",
        element: <AddAnnounce />,
        action: AnnounceAction,
      },
      {
        path: "announce/:id/edit",
        element: <EditAnnounce />,
        action: AnnounceEditAction,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
