import { lazy } from "react";
import { RouteType } from "../shared/interfaces/misc";

const Overview = lazy(() => import("../pages/Client/Overview"));

// for jobs
const AddJob = lazy(() => import("../pages/Client/Jobs/Add"));
const ManageJobs = lazy(() => import("../pages/Client/Jobs/Manage"));

// for transactions
const ManageTransactions = lazy(() => import("../pages/Client/Transactions"));

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
  {
    name: "Manage Transactions",
    component: ManageTransactions,
    exact: true,
    path: "/transactions",
  },
];

export default routes;
