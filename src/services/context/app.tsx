import React, { Fragment, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CenterLoader } from "../../components/atoms/loadingComponents";

const Login = lazy(() => import("../../pages/Auth/login"));
const Register = lazy(() => import("../../pages/Auth/register"));
const Layout = lazy(() => import("../../shared/layout"));

const SettingsConfig = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Suspense fallback={CenterLoader()}>
          <Switch>
            <Route exact={true} component={Login} path={"/login"} />
            <Route exact={true} component={Register} path={"/register"} />
            <Route exact={false} component={Layout} path={"/"} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Fragment>
  );
};

export { SettingsConfig };
