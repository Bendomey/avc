import { DocumentTextIcon, ClipboardListIcon } from "@heroicons/react/outline";
import { EyeIcon } from "@heroicons/react/outline";
import * as React from "react";
import userPng from "../../../../assets/images/male.jpeg";

interface Props {
  data: any;
}

const Card: React.FC<Props> = () => {
  return (
    <React.Fragment>
      <div className={"bg-white w-full overflow-x-auto"}>
        <div
          className={"p-4 flex w-full flex-row items-center justify-between"}
        >
          <div className={"flex flex-row items-center"}>
            <div>
              <DocumentTextIcon className={"h-6 w-6 text-gray-300"} />
            </div>
            <div className={"ml-3"}>
              <h1 className={"font-semibold"}>Register Company Posting</h1>
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs bg-gray-100 text-gray-400 font-bold">
                <ClipboardListIcon className={"h-4 w-4 text-gray-400 mr-1"} />{" "}
                Service
              </span>
            </div>
          </div>
          <div className={"flex flex-row items-center"}>
            <div>
              <img
                src={userPng}
                alt={"lawyer"}
                className={"h-10 w-10 rounded-full"}
              />
            </div>
            <div className={"ml-3 flex flex-col"}>
              <span className={"font-semibold"}>Domey Benjamin</span>
              <span className=" text-xs text-gray-400 font-bold">
                Assigned To
              </span>
            </div>
          </div>

          <div className={"flex flex-row items-center "}>
            <div
              className={
                "flex flex-row items-center mr-10 border py-2 px-4 rounded-b-xl rounded-tr-xl"
              }
            >
              <div className={"rounded-full h-2 w-2 bg-gray-600 mr-2"} />
              <span className={"text-sm text-gray-500"}>Pending</span>
            </div>
            <div
              className={
                "rounded-full bg-gray-50 hover:bg-gray-100 cursor-pointer p-2"
              }
            >
              <EyeIcon className={"h-5 w-5 text-gray-500"} />
            </div>
          </div>
        </div>
        <div className={"border-t border-gray-100 py-1 px-12 "}>
          <span className={"text-sm text-gray-400"}>
            {new Date().toLocaleString()}
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
