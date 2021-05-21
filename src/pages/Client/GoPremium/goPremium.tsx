import { useQuery } from "@apollo/client";
import * as React from "react";
import { AuthContext } from "../../../services/context";
import { GET_PACKAGES } from "../../../services/graphql/queries";
import {
  GetPackagesInputProps,
  GetPackagesOutputProps,
  Package,
} from "../../../shared/interfaces/package";
import { AddPackage } from "./Add";
import { ApproveSubscription } from "./ApproveSubscription";
import { EmptyTemplate } from "./Components/emptyTemplate";
import { SetPeriod } from "./Components/set-period";
import PackageCard from "./Package";
import PuffLoader from "react-spinners/PuffLoader";
import {
  EmptyAlertComponent,
  ErrorAlertComponent,
} from "../../../components/atoms/alertComponents";

export default function GoPremium() {
  const [, state] = React.useContext(AuthContext);
  const [period, setPeriod] = React.useState<"monthly" | "yearly">("monthly");
  const [add, setAdd] = React.useState(false);

  const [approve, setApprove] = React.useState(false);
  const [selected, setSelected] = React.useState<any>(null);

  const { data, loading, refetch } = useQuery<
    GetPackagesOutputProps,
    GetPackagesInputProps
  >(GET_PACKAGES, {
    variables: {
      filter: {
        user: state?.userToken?.user?.id,
      },
    },
  });

  return (
    <React.Fragment>
      <div className="">
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
            <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
              Pricing Plans
            </h1>
            <p className="mt-5 text-xl w-full sm:w-full md:w-2/3 mx-auto text-gray-500 sm:text-center">
              Choose a plan that fits the needs of your business and work with
              your assigned lawyer to complete all tasks according to an agreed
              schedule
            </p>
            {data && data?.packagesLength > 0 && (
              <SetPeriod period={period} setPeriod={setPeriod} />
            )}
          </div>

          {loading ? (
            <React.Fragment>
              <div className={"h-56 flex justify-center items-center"}>
                <PuffLoader color={"red"} size={50} />
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {data ? (
                <React.Fragment>
                  {data?.packagesLength === 0 ? (
                    <EmptyAlertComponent model={"packages"} />
                  ) : (
                    <React.Fragment>
                      <div className="relative mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
                        {data?.packages.map((tier: Package, i: number) => (
                          <React.Fragment key={i}>
                            <PackageCard
                              onChoose={() => {
                                setSelected(tier);
                                setApprove(true);
                              }}
                              tier={tier}
                              period={period}
                            />
                          </React.Fragment>
                        ))}
                        {add ? (
                          <AddPackage setAdd={setAdd} refetch={refetch} />
                        ) : (
                          <EmptyTemplate setAdd={setAdd} />
                        )}
                      </div>
                    </React.Fragment>
                  )}
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <ErrorAlertComponent model={"packages"} />
                </React.Fragment>
              )}
            </React.Fragment>
          )}
        </div>
      </div>
      <ApproveSubscription
        show={approve}
        setShow={setApprove}
        data={selected}
      />
    </React.Fragment>
  );
}
