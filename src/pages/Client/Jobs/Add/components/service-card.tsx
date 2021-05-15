import { CashIcon, CheckCircleIcon } from "@heroicons/react/solid";
import * as React from "react";

interface Props {
  type: number;
  setType: () => void;
  selected: boolean;
}

const ServiceCard: React.FC<Props> = ({ type, setType, selected }) => {
  return (
    <React.Fragment>
      <div
        onClick={setType}
        className={`border-b border-gray-100 p-5 cursor-pointer  ${
          selected ? "bg-rose-600 " : "bg-white hover:bg-gray-50"
        }`}
      >
        <div className={"flex flex-row justify-between items-center"}>
          <div>
            <h1
              className={`font-semibold ${
                selected ? "text-white" : "text-gray-700"
              }`}
            >
              Register Company
            </h1>
            <div
              className={`flex flex-row my-1 items-center ${
                selected ? "text-white" : "text-rose-500"
              }`}
            >
              <CashIcon className={"h-5 w-5 "} />
              <span className={" ml-2 text-xs font-medium"}>USD 500.00</span>
            </div>
          </div>
          <div>
            {selected && <CheckCircleIcon className={"text-white h-5 w-5"} />}
          </div>
        </div>
        <p className={`text-sm ${selected ? "text-white" : "text-gray-400"}`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </React.Fragment>
  );
};

export default ServiceCard;
