import * as React from "react";
import { CheckIcon } from "@heroicons/react/solid";

interface Props {
  tier: any;
  period: "monthly" | "yearly";
  onChoose: () => void;
}

const PackageCard: React.FC<Props> = ({ tier, period, onChoose }) => {
  return (
    <React.Fragment>
      <div
        key={tier.name}
        className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200"
      >
        <div className="p-6">
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            {tier.name}
          </h2>
          <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
          <p className="mt-8">
            <span className="text-4xl font-extrabold text-gray-900">
              ${tier.priceMonthly}
            </span>{" "}
            <span className="text-base font-medium text-gray-500">
              /{period === "monthly" ? "mon" : "year"}
            </span>
          </p>
          <button
            onClick={onChoose}
            className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
          >
            Buy {tier.name}
          </button>
        </div>
        <div className="pt-6 pb-8 px-6">
          <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
            What's included
          </h3>
          <ul className="mt-6 space-y-4">
            {tier.includedFeatures.map((feature: string) => (
              <li key={feature} className="flex space-x-3">
                <CheckIcon
                  className="flex-shrink-0 h-5 w-5 text-green-500"
                  aria-hidden="true"
                />
                <span className="text-sm text-gray-500">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PackageCard;
