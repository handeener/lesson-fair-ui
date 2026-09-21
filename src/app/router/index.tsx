import { createBrowserRouter as Router} from "react-router-dom";

import Dashboard from "../../pages/Dashboard";
import Employees from "../../pages/Employee";
import Settings from "../../pages/Settings";
import RootLayout from "./RootLayout";

export const router = Router([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "employees",
        element: <Employees />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);