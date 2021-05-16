import * as React from "react";
import { WaitForModal } from "../../../../components/atoms/loadingComponents";
import Dataview from "../Dataview";

const RetryModal = React.lazy(() => import("../Retry"));

const data = {
  payments: [
    {
      name: "Jane Cooper",
      title: "Regional Paradigm Technician",
      role: "Admin",
      type: "SERVICE",
    },
    {
      name: "Cody Fisher",
      title: "Product Directives Officer",
      role: "Owner",
      type: "SERVICE",
    },
    {
      name: "Cody Fisher",
      title: "Product Directives Officer",
      role: "Owner",
      type: "SUBSCRIPTION",
    },
    {
      name: "Cody Fisher",
      title: "Product Directives Officer",
      role: "Owner",
      type: "SERVICE",
    },
    {
      name: "Cody Fisher",
      title: "Product Directives Officer",
      role: "Owner",
      type: "SERVICE",
    },
    {
      name: "Cody Fisher",
      title: "Product Directives Officer",
      role: "Owner",
      type: "SUBSCRIPTION",
    },
  ],
  paymentsLength: 2,
};

const Manage = () => {
  const [retry, setRetry] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<any>(null);

  return (
    <React.Fragment>
      <div
        className={"mb-5 mt-2 mx-6 sm:mx-6 md:mx-0 flex flex-row items-center"}
      >
        <div className={"border-b-2 border-red-500"}>
          <h1 className={"font-extrabold text-xl text-gray-700"}>
            All Your Transactions (50)
          </h1>
        </div>
      </div>

      <div className={"bg-white p-5  w-full"}>
        <div className="flex flex-col w-full sm:flex-col md:flex-row justify-between items-center">
          <div>
            <label
              htmlFor="jobs"
              className="block text-sm font-medium text-gray-700"
            >
              FILTER BY TYPE
            </label>
            <div className="mt-1">
              <select
                className="shadow-sm focus:ring-gray-200 focus:border-gray-50 block w-80 sm:w-80 md:w-96 sm:text-sm border-gray-200 bg-gray-100 rounded-none"
                placeholder="Search for jobs by title here..."
              >
                <option value="">All</option>
                <option value="Subscriptions">Subscriptions</option>
                <option value="OneTime">One Time</option>
              </select>
            </div>
          </div>
          <div className={"mt-5 sm:mt-5 md:mt-0"}>
            <label
              htmlFor="jobs"
              className="block text-sm  font-medium text-gray-700"
            >
              FILTER TRANSACTIONS
            </label>
            <div className="mt-1">
              <select className="shadow-sm  focus:ring-gray-200 focus:border-gray-50 block w-80 sm:w-80 md:w-56 sm:text-sm border-gray-200 bg-gray-100 rounded-none">
                <option value="">All</option>
                <option value="Pending">Pending</option>
                <option value="Success">Success</option>
                <option value="Failed">Failed</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className={"mt-5"}>
        <Dataview
          data={data}
          retry={(data: any) => {
            setSelected(data);
            setRetry(true);
          }}
        />
      </div>

      <React.Suspense fallback={<WaitForModal />}>
        <RetryModal show={retry} setShow={setRetry} data={selected} />
      </React.Suspense>
    </React.Fragment>
  );
};

export default Manage;
