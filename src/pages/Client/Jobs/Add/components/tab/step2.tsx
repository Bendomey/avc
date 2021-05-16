import { ChevronLeftIcon } from "@heroicons/react/solid";
import * as React from "react";

interface Props {
  next: () => void;
  back: () => void;
}

const StepOne: React.FC<Props> = ({ next, back }) => {
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

        <div className={"mt-5 bg-white w-11/12 sm:w-11/12 md:w-7/12  p-3"}>
          <div className={""}>
            <p className={"p-7 text-gray-600"}>
              We need you to complete a very brief questionnaire to make sure we
              connect you with the right lawyers. This will only take a few
              minutes.
            </p>
          </div>
          <div className={"flex justify-center"}>
            <button
              type={"button"}
              onClick={back}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md hover:text-rose-400 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
            >
              <ChevronLeftIcon className={"h-5 w-5"} />
              Back
            </button>
            <button
              type={"button"}
              onClick={next}
              className=" inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StepOne;
