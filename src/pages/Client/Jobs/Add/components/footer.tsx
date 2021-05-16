import { BadgeCheckIcon, ShieldCheckIcon } from "@heroicons/react/solid";
import * as React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <div className={"w-11/12 sm:w-11/12 md:w-7/12 mt-7"}>
        <div
          className={
            "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-8"
          }
        >
          <div className={"col-span-1"}>
            <div className={"flex flex-row items-start"}>
              <div>
                <BadgeCheckIcon className={"h-12 w-12 text-red-600"} />
              </div>
              <div className={"ml-2"}>
                <h1 className={"font-semibold text-gray-700"}>
                  SATISFACTION GUARANTEED
                </h1>
                <span className={"text-xs text-gray-500"}>
                  On All jobs booked with a verified attorney and paid for over
                  African Venture Counsel.
                </span>
              </div>
            </div>
          </div>
          <div className={"col-span-1"}>
            <div className={"flex flex-row items-start"}>
              <div>
                <ShieldCheckIcon className={"h-12 w-12 text-red-600"} />
              </div>
              <div className={"ml-2"}>
                <h1 className={"font-semibold text-gray-700"}>SAFE & SECURE</h1>
                <span className={"text-xs text-gray-500"}>
                  Your confidential information is encrypted to remain private,
                  safe, and secure.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export { Footer };
