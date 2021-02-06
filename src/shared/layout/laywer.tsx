import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { RouteType as IRoute } from "../interfaces/misc";
import routes from "../../routes";
import { PageLoader } from "../../components/atoms/loadingComponents";
import LawyerSettings from "../../pages/Lawyer/Settings";

const LawyerDashboard = () => {
  return (
    <React.Fragment>
      <div className="py-10">
        <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
          <main className="">
            <React.Suspense fallback={PageLoader()}>
              <Switch>
                <Route
                  path={"/settings"}
                  exact={true}
                  component={LawyerSettings}
                />
                {routes?.["lawyer"]?.map((route: IRoute, i: number) => (
                  <React.Fragment key={i}>
                    <Route
                      path={route.path}
                      component={route.component as any}
                      exact={route.exact}
                    />
                  </React.Fragment>
                ))}
              </Switch>
            </React.Suspense>
          </main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LawyerDashboard;
