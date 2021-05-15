import * as React from "react";
import { ChevronLeftIcon } from "@heroicons/react/solid";

interface Props {
  back: () => void;
}

const TrademarkForm: React.FC<Props> = ({ back }) => {
  return (
    <React.Fragment>
      <div
        className={
          "mt-5 bg-white w-11/12 sm:w-11/12 md:w-8/12  p-3 sm:p-3 md:p-5"
        }
      >
        <div className={"grid grid-cols-2 gap-6"}>
          <div className={"col-span-2 sm:col-span-2 md:col-span-1"}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Country <span className={"text-rose-600"}>*</span>
              </label>
              <div className="mt-1">
                <select
                  className="shadow-sm focus:ring-gray-200 focus:border-gray-50 block w-full sm:text-sm border-gray-200 bg-gray-100 rounded-none"
                  placeholder="Name here..."
                >
                  <option value="">Please select</option>
                </select>
              </div>
            </div>
          </div>
          <div className={"col-span-2 sm:col-span-2 md:col-span-1"}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Trademark Type <span className={"text-rose-600"}>*</span>
              </label>
              <div className="mt-1">
                <select
                  className="shadow-sm focus:ring-gray-200 focus:border-gray-50 block w-full sm:text-sm border-gray-200 bg-gray-100 rounded-none"
                  placeholder="Name here..."
                >
                  <option value="">Please select</option>
                  <option value="Logo">Logo</option>
                  <option value="Word">Word</option>
                  <option value="CombinationMark">Combination Mark</option>
                </select>
              </div>
            </div>
          </div>

          <div className={"col-span-2 sm:col-span-2 md:col-span-1"}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Ownership Type <span className={"text-rose-600"}>*</span>
              </label>
              <div className="mt-1">
                <select
                  className="shadow-sm focus:ring-gray-200 focus:border-gray-50 block w-full sm:text-sm border-gray-200 bg-gray-100 rounded-none"
                  placeholder="Name here..."
                >
                  <option value="">Please select</option>
                  <option value="Individual">Logo</option>
                  <option value="Business">Word</option>
                </select>
              </div>
            </div>
          </div>

          <div className={"col-span-2 sm:col-span-2 md:col-span-1"}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Classification Of Trademark{" "}
                <span className={"text-rose-600"}>*</span>
              </label>
              <div className="mt-1">
                <select
                  className="shadow-sm focus:ring-gray-200 focus:border-gray-50 block w-full sm:text-sm border-gray-200 bg-gray-100 rounded-none"
                  placeholder="Name here..."
                >
                  <option value="">Please select</option>
                </select>
              </div>
            </div>
          </div>

          <div className={"col-span-2 sm:col-span-2 md:col-span-2"}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Registered Address <span className={"text-rose-600"}>*</span>
              </label>
              <div className="mt-1">
                <textarea
                  rows={5}
                  className="shadow-sm focus:ring-gray-200 focus:border-gray-50 block w-full sm:text-sm border-gray-200 bg-gray-100 rounded-none"
                  placeholder="Address here..."
                ></textarea>
              </div>
            </div>
          </div>
          <div className={"col-span-2 sm:col-span-2 md:col-span-2"}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Uploads{" "}
                <span className={"text-xs text-gray-400"}>
                  (You can select multiple)
                </span>
              </label>
              <div className="mt-1">
                <input
                  type={"file"}
                  multiple
                  className="shadow-sm focus:ring-gray-200 focus:border-gray-50 block w-full sm:text-sm border-gray-200 bg-gray-100 rounded-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={"flex justify-center mt-10"}>
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
            // onClick={next}
            className=" inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
          >
            Submit
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TrademarkForm;
