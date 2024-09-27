import React from "react";

import DefaultLayout from "@/layouts/Default";
import { RouteConfig } from "@/types";

const Dashboard = React.lazy(() => import("@/pages/Dashboard"));

export const routes: RouteConfig[] = [
  {
    path: "/",
    page: Dashboard,
    layout: DefaultLayout,
  },
];
