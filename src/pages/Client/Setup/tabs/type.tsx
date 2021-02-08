import { toaster } from "evergreen-ui";
import * as React from "react";

interface Props {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const CustomerTypeComponent: React.FC<Props> = ({ type, setType, setStep }) => {
  toaster.closeAll();
  const goNext = () => {
    if (type === "") return toaster.warning("Please a customer type");
    setStep((step) => step + 1);
  };
  return (
    <React.Fragment>
      <div className="mt-10 col-span-3 sm:mt-0 flex justify-center ">
        <div className={"w-10/12 sm:w-10/12 md:w-1/2"}>
          <div className={"flex justify-center mb-5"}>
            <span className={"text-center"}>Please choose</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3">
            <div
              className={"cursor-pointer"}
              onClick={() => setType("business")}
            >
              <div
                className={`w-full inline-flex  py-2 px-4 border ${
                  type === "business" ? "border-red-300" : "border-gray-200"
                } rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 group hover:border-red-300`}
              >
                <div className="flex flex-row items-center justify-between w-full">
                  <div>
                    <h4
                      className={`${
                        type === "business" ? "text-red-500" : "text-gray-500"
                      } text-lg font-bold group-hover:text-red-500`}
                    >
                      Business
                    </h4>
                    <span>
                      lorem ipsum here for something s,xjcvbxljvsdv svjsd vhs d
                      bvdf vdfuvs djvbsd{" "}
                    </span>
                  </div>
                  <div className="">
                    <svg
                      className={`${
                        type === "business" ? "text-red-500" : "text-gray-500"
                      } w-7 h-7 sm:w-7 sm:h-7 md:w-10 md:h-10 group-hover:text-red-500`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={"cursor-pointer"}
              onClick={() => setType("individual")}
            >
              <div
                className={`w-full inline-flex  py-2 px-4 border ${
                  type === "individual" ? "border-red-300" : "border-gray-300"
                } rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 group hover:border-red-300`}
              >
                <div className="flex flex-row items-center justify-between w-full">
                  <div>
                    <h4
                      className={`${
                        type === "individual" ? "text-red-500" : "text-gray-500"
                      } text-lg font-bold group-hover:text-red-500`}
                    >
                      Individual
                    </h4>
                    <span>
                      lorem ipsum here for something s,xjcvbxljvsdv svjsd vhs d
                      bvdf vdfuvs djvbsd{" "}
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <svg
                      className={`${
                        type === "individual" ? "text-red-500" : "text-gray-500"
                      } w-7 h-7 sm:w-7 sm:h-7 md:w-10 md:h-10 group-hover:text-red-500`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-3 col-span-3 text-center sm:px-6 mb-5">
        <button
          type="button"
          onClick={goNext}
          className="inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
        >
          Continue
          <svg
            className={"h-5 w-5 ml-5 text-white"}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </React.Fragment>
  );
};

export default CustomerTypeComponent;
