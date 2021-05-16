import * as React from "react";

interface Props {
  step: number;
}

export const Topbar: React.FC<Props> = ({ step }) => {
  return (
    <React.Fragment>
      <div className={"w-1/3 bg-gray-200 h-1.5 rounded-full"}>
        {step > 0 && (
          <div className={`w-${step}/2 bg-red-600 h-full rounded-full`}></div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Topbar;
