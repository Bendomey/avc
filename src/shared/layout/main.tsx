import * as React from "react";
import Header from "./header";
import { PageLoader } from "../../components/atoms/loadingComponents";
import ClientLayout from "./client";
import LawyerLayout from "./laywer";

let user: "client" | "lawyer" = "lawyer";
const Layout = () => {
  return (
    <React.Fragment>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <React.Suspense fallback={PageLoader()}>
          {user === "client" ? <ClientLayout /> : <LawyerLayout />}
        </React.Suspense>
      </div>
    </React.Fragment>
  );
};

export default Layout;
