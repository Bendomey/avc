import * as React from "react";
import Header from "./header";
import { PageLoader } from "../../components/atoms/loadingComponents";
import ClientDashbaord from "./client";
import LawyerDashboard from "./laywer";

let user: "client" | "lawyer" = "client";
const Layout = () => {
  return (
    <React.Fragment>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <React.Suspense fallback={PageLoader()}>
          {user === "client" ? <ClientDashbaord /> : <LawyerDashboard />}
        </React.Suspense>
      </div>
    </React.Fragment>
  );
};

export default Layout;
