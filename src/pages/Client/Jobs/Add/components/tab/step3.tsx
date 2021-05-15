import * as React from "react";
import { BusinessForm, TrademarkForm, DocumentForm } from "../forms";

interface Props {
  back: () => void;
  type: number;
}

const StepOne: React.FC<Props> = ({ back, type }) => {
  return (
    <React.Fragment>
      <div className={"mt-5 sm:mt-5 md:mt-10 flex flex-col items-center "}>
        <h1
          className={
            "font-semibold text-gray-600 text-xl sm:text-xl md:text-3xl"
          }
        >
          Register Company Posting
        </h1>
        {type === 0 && <BusinessForm back={back} />}
        {type === 1 && <TrademarkForm back={back} />}
        {type === 2 && <DocumentForm back={back} />}
      </div>
    </React.Fragment>
  );
};

export default StepOne;
