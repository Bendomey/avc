import * as React from "react";
import { AddPackage } from "./Add";
import { ApproveSubscription } from "./ApproveSubscription";
import { EmptyTemplate } from "./Components/emptyTemplate";
import { SetPeriod } from "./Components/set-period";
import PackageCard from "./Package";

const tiers = [
  {
    name: "Hobby",
    href: "#",
    priceMonthly: 12,
    description: "All the basics for starting a new business",
    includedFeatures: [
      "Potenti felis, in cras at at ligula nunc.",
      "Orci neque eget pellentesque.",
    ],
  },
  {
    name: "Freelancer",
    href: "#",
    priceMonthly: 24,
    description: "All the basics for starting a new business",
    includedFeatures: [
      "Potenti felis, in cras at at ligula nunc. ",
      "Orci neque eget pellentesque.",
      "Donec mauris sit in eu tincidunt etiam.",
    ],
  },
  {
    name: "Startup",
    href: "#",
    priceMonthly: 32,
    description: "All the basics for starting a new business",
    includedFeatures: [
      "Potenti felis, in cras at at ligula nunc. ",
      "Orci neque eget pellentesque.",
      "Donec mauris sit in eu tincidunt etiam.",
      "Faucibus volutpat magna.",
    ],
  },
];

export default function GoPremium() {
  const [period, setPeriod] = React.useState<"monthly" | "yearly">("monthly");
  const [add, setAdd] = React.useState(false);

  const [approve, setApprove] = React.useState(false);
  const [selected, setSelected] = React.useState<any>(null);

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
            <SetPeriod period={period} setPeriod={setPeriod} />
          </div>
          <div className="relative mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
            {tiers.map((tier: any, i: number) => (
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
              <AddPackage setAdd={setAdd} />
            ) : (
              <EmptyTemplate setAdd={setAdd} />
            )}
          </div>
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
