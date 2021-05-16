import * as React from "react";
import Card from "./card";

interface Props {
  data: any;
  retry: (data: any) => void;
}

const Dataview: React.FC<Props> = ({ data, retry }) => {
  return (
    <React.Fragment>
      <div className={"flex sm:flex md:hidden justify-center mb-2 "}>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          Please scroll horizontally
        </span>
      </div>

      <div className="flex flex-col w-full">
        <div className="-my-2 overflow-x-auto ">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-0">
            <div className="overflow-hidden ">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.payments?.map((transaction: any, i: number) => (
                    <React.Fragment key={i}>
                      <tr className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <Card data={transaction} retry={retry} />
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dataview;
