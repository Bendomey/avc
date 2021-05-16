import { lazy } from "react";
import { RouteType } from "../shared/interfaces/misc";

const Overview = lazy(() => import("../pages/Client/Overview"));
const AddJob = lazy(() => import("../pages/Client/Jobs/Add"));
const ManageJobs = lazy(() => import("../pages/Client/Jobs/Manage"));

const routes: RouteType[] = [
  {
    name: "Overview",
    component: Overview,
    exact: true,
    path: "/",
  },
  {
    name: "Manage Jobs",
    component: ManageJobs,
    exact: true,
    path: "/jobs",
  },
  {
    name: "Add Job",
    component: AddJob,
    exact: true,
    path: "/jobs/add",
  },
];

export default routes;
