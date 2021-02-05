import * as React from "react";
import Header from "./header";
import { Route, Switch } from "react-router-dom";
import { RouteType as IRoute } from "../interfaces/misc";
import routes from "../../routes";
import { PageLoader } from "../../components/atoms/loadingComponents";
import ClientSettings from "../../pages/Client/Settings";
import LawyerSettings from "../../pages/Lawyer/Settings";

let user: "client" | "lawyer" = "lawyer";
const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <React.Suspense fallback={PageLoader()}>
        <Switch>
          {user === "lawyer" ? (
            <Route path={"/settings"} exact={true} component={LawyerSettings} />
          ) : (
            <Route path={"/settings"} exact={true} component={ClientSettings} />
          )}
          {routes?.[user]?.map((route: IRoute, i: number) => (
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
    </React.Fragment>
  );
};

export default Layout;
