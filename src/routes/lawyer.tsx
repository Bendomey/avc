import { lazy } from "react";
import { RouteType } from "../shared/interfaces/misc";

const Overview = lazy(() => import("../pages/Lawyer/Overview"));

const routes: RouteType[] = [
  {
    name: "Overview",
    component: Overview,
    exact: true,
    path: "/",
  },
];

export default routes;
