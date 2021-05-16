import * as React from "react";
import Card from "./card";

interface Props {
  data: any;
}

const Dataview: React.FC<Props> = ({ data }) => {
  return (
    <React.Fragment>
      <div className={"flex sm:flex md:hidden justify-center mb-2 "}>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          Please scroll horizontally
        </span>
      </div>
      <div className={"mb-10"}>
        {data?.servicing?.map((servicing: any, i: number) => (
          <React.Fragment key={i}>
            <div className={`${i > 0 && "mt-4"}`}>
              <Card data={servicing} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Dataview;
