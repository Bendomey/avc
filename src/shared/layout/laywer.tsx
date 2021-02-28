import * as React from "react";
import { Switch, Link } from "react-router-dom";
import { RouteType as IRoute } from "../interfaces/misc";
import routes from "../../routes";
import { PageLoader } from "../../components/atoms/loadingComponents";
import LawyerSettings from "../../pages/Lawyer/Settings";
import LawyerSetup from "../../pages/Lawyer/Setup";
import Route from "../../services/protectedRoutes";
import Resources from "../../components/resources";

const LawyerDashboard = ({ state }: any) => {
  return (
    <React.Fragment>
      <React.Suspense fallback={PageLoader()}>
        {state?.userToken?.user?.setupAt ? (
          <React.Fragment>
            <Switch>
              <Route
                path={"/settings"}
                exact={true}
                name={"Settings"}
                component={LawyerSettings}
              />
              <div className="pt-5">
                <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
                  <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
                    <nav
                      aria-label="Sidebar"
                      className="sticky top-4 divide-y divide-gray-300"
                    >
                      <div className="pb-8 space-y-1">
                        <Link
                          to="/"
                          className="bg-gray-200 text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                          aria-current="page"
                        >
                          <svg
                            className="text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                            />
                          </svg>
                          <span className="truncate">Overview</span>
                        </Link>

                        {/* <Link
                          to="/jobs"
                          className="text-gray-600 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                          aria-current="false"
                        >
                          <svg
                            className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>

                          <span className="truncate">My Jobs</span>
                        </Link>

                        <Link
                          to="documents"
                          className="text-gray-600 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                          aria-current="false"
                        >
                          <svg
                            className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>

                          <span className="truncate">My Documents</span>
                        </Link>

                        <Link
                          to="/invoices"
                          className="text-gray-600 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                          aria-current="false"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                            />
                          </svg>
                          <span className="truncate">My Invoices</span>
                        </Link>
                        <Link
                          to="/transactions"
                          className="text-gray-600 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                          aria-current="false"
                        >
                          <svg
                            className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            />
                          </svg>
                          <span className="truncate">My Transactions</span>
                        </Link> */}
                      </div>
                      <div className="pt-10">
                        <Resources />
                      </div>
                    </nav>
                  </div>
                  <main className="lg:col-span-9 xl:col-span-10 overflow-y-auto mainClientDashboardContainer">
                    {routes?.["lawyer"]?.map((route: IRoute, i: number) => (
                      <React.Fragment key={i}>
                        <Route
                          name={route.name}
                          path={route.path}
                          component={route.component as any}
                          exact={route.exact}
                        />
                      </React.Fragment>
                    ))}
                  </main>
                </div>
              </div>
            </Switch>
          </React.Fragment>
        ) : (
          <LawyerSetup />
        )}
      </React.Suspense>
      );
    </React.Fragment>
  );
};

export default LawyerDashboard;
