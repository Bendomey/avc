import * as React from "react";
import Header from "./header";
import { PageLoader } from "../../components/atoms/loadingComponents";
import ClientLayout from "./client";
import LawyerLayout from "./laywer";
import { AuthContext } from "../../services/context";

const Layout = () => {
  const [, state] = React.useContext(AuthContext);
  React.useEffect(() => {
    document.title = "Welcome Back - African Venture Counsel";
  }, []);

  return (
    <React.Fragment>
      <div className="min-h-screen bg-gray-100">
        <Header state={state} />
        <React.Suspense fallback={PageLoader()}>
          {state?.userToken?.user?.type === "Customer" ? (
            <ClientLayout state={state} />
          ) : (
            <LawyerLayout />
          )}
        </React.Suspense>
      </div>
    </React.Fragment>
  );
};

export default Layout;
