import { useQuery } from "@apollo/client";
import * as React from "react";
import { GET_PACKAGE_SERVICES } from "../../../../services/graphql/queries";
import { CheckIcon } from "@heroicons/react/solid";
import {
  GetPackageServicesInputProps,
  GetPackageServicesOutputProps,
  Package,
  PackageService,
} from "../../../../shared/interfaces/package";
import PuffLoader from "react-spinners/PuffLoader";

interface Props {
  tier: Package;
  period: "monthly" | "yearly";
  onChoose: () => void;
}

const PackageCard: React.FC<Props> = ({ tier, period, onChoose }) => {
  const { data, loading } = useQuery<
    GetPackageServicesOutputProps,
    GetPackageServicesInputProps
  >(GET_PACKAGE_SERVICES, {
    variables: {
      filter: {
        package: tier?.id,
      },
    },
  });
  return (
    <React.Fragment>
      <div className={"relative h-full"}>
        {tier?.status === "PENDING" && (
          <div
            className={
              "absolute h-full w-full bg-black opacity-90 rounded-md flex justify-center items-center"
            }
          >
            <div className={"flex flex-col items-center"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span className={"font-extrabold text-3xl mt-3 text-white"}>
                PENDING
              </span>
            </div>
          </div>
        )}
        <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
          <div className="p-6">
            <h2 className="text-lg leading-6 font-medium text-gray-900">
              {tier.name}
            </h2>
            <p className="mt-4 text-sm text-gray-500">
              {tier.description || "Not Specified"}
            </p>
            <p className="mt-8">
              {tier?.status === "PENDING" ? (
                <h1 className={"font-bold text-4xl"}>TBD</h1>
              ) : (
                <React.Fragment>
                  <span className="text-4xl font-extrabold text-gray-900">
                    $
                    {period === "monthly"
                      ? tier.amountPerMonth
                      : tier.amountPerYear}
                  </span>{" "}
                  <span className="text-base font-medium text-gray-500">
                    /{period === "monthly" ? "mon" : "year"}
                  </span>
                </React.Fragment>
              )}
            </p>
            <button
              onClick={onChoose}
              className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
            >
              Buy {tier.name}
            </button>
          </div>
          {loading ? (
            <React.Fragment>
              <div className={"h-56 flex justify-center items-center"}>
                <PuffLoader color={"red"} size={50} />
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h3>
                <ul className="mt-6 space-y-4">
                  {data?.packageServices.map(
                    (feature: PackageService, i: number) => (
                      <li key={i} className="flex space-x-3">
                        {feature?.type === "BOOLEAN" ? (
                          <CheckIcon
                            className="flex-shrink-0 h-5 w-5 text-green-500"
                            aria-hidden="true"
                          />
                        ) : (
                          <span>{feature?.quantity | 0}</span>
                        )}
                        <span className="text-sm text-gray-500">
                          {feature?.service?.name}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default PackageCard;
