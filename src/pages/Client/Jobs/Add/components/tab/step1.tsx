import * as React from "react";
import ServiceCard from "../service-card";

interface Props {
  next: () => void;
  type: number;
  setType: React.Dispatch<React.SetStateAction<number>>;
}

const StepOne: React.FC<Props> = ({ next, setType, type }) => {
  return (
    <React.Fragment>
      <div className={"mt-5 sm:mt-5 md:mt-7 flex flex-col items-center "}>
        <h1
          className={
            "font-semibold text-gray-600 text-xl sm:text-md text-center md:text-3xl"
          }
        >
          What type of legal assistance do you need?
        </h1>

        <div
          className={
            "mt-5 bg-white w-11/12 sm:w-11/12 md:w-7/12 h-full sm:h-full md:h-80"
          }
        >
          <div
            className={
              " h-full sm:h-full md:h-64 overflow-auto scrollContainer border border-gray-200"
            }
          >
            {[1, 2, 3].map((a, i) => (
              <React.Fragment key={i}>
                <ServiceCard
                  type={type}
                  setType={() => {
                    setType(i);
                  }}
                  selected={type === i}
                />
              </React.Fragment>
            ))}
          </div>

          <div className={"flex justify-center py-3"}>
            <button
              type={"button"}
              disabled={type === -1}
              onClick={next}
              className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm ${
                type === -1
                  ? " bg-gray-400 cursor-not-allowed   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                  : "bg-rose-600 hover:bg-rose-700 cursor-pointer"
              } text-white`}
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
