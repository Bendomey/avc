import * as React from "react";

interface Props {
  step: number;
}

const Steps: React.FC<Props> = ({ step }) => {
  return (
    <nav aria-label="Progress">
      <ol className="flex items-center">
        <li className="relative pr-8 sm:pr-20">
          {/* <!-- Completed Step --> */}
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            {step === 0 ? (
              <div className="h-0.5 w-full bg-gray-200"></div>
            ) : (
              <div className="h-0.5 w-full bg-rose-600"></div>
            )}
          </div>
          {step === 0 ? (
            <span
              className="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-rose-600 rounded-full"
              aria-current="step"
            >
              <span
                className="h-2.5 w-2.5 bg-rose-600 rounded-full"
                aria-hidden="true"
              ></span>
            </span>
          ) : (
            <span className="relative w-8 h-8 flex items-center justify-center bg-rose-600 rounded-full hover:bg-rose-900">
              <svg
                className="w-5 h-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          )}
        </li>

        <li className="relative pr-8 sm:pr-20">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            {[0, 1].includes(step) ? (
              <div className="h-0.5 w-full bg-gray-200"></div>
            ) : (
              <div className="h-0.5 w-full bg-rose-600"></div>
            )}
          </div>

          {step === 0 ? (
            <span className="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400">
              <span
                className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Step 5</span>
            </span>
          ) : step === 1 ? (
            <span
              className="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-rose-600 rounded-full"
              aria-current="step"
            >
              <span
                className="h-2.5 w-2.5 bg-rose-600 rounded-full"
                aria-hidden="true"
              ></span>
            </span>
          ) : (
            <span className="relative w-8 h-8 flex items-center justify-center bg-rose-600 rounded-full hover:bg-rose-900">
              <svg
                className="w-5 h-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          )}
        </li>

        <li className="relative">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="h-0.5 w-full bg-gray-200"></div>
          </div>
          {step === 2 ? (
            <span
              className="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-rose-600 rounded-full"
              aria-current="step"
            >
              <span
                className="h-2.5 w-2.5 bg-rose-600 rounded-full"
                aria-hidden="true"
              ></span>
            </span>
          ) : (
            <span className="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400">
              <span
                className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Step 5</span>
            </span>
          )}
        </li>
      </ol>
    </nav>
  );
};

export default Steps;
