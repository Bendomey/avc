import * as React from "react";
import { getYears } from "../../../services/broker";

const Setup = () => {
  const [type, setType] = React.useState<string>("");
  return (
    <React.Fragment>
      <div className="pt-10 max-w-3xl mx-auto sm:px-6 lg:max-w-7xl">
        <h1 className={"text-3xl font-bold mx-3 sm:mx-3 md:mx-0"}>
          Setup Your Account
        </h1>
        <div className={"mt-0 sm:mt-0 md:mt-5"}>
          <div className="w-full md:grid md:grid-cols-3 md:gap-6">
            <div className="mt-10 col-span-3 sm:mt-0">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Personal Information
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Enter your Personal Details here
                    </p>
                  </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <form action="#" method="POST">
                    <div className="shadow overflow-hidden sm:rounded-md">
                      <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="last_name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Last name{" "}
                              <span className={"text-rose-500"}>*</span>
                            </label>
                            <input
                              type="text"
                              name="last_name"
                              id="last_name"
                              placeholder={"Enter Last Name here..."}
                              autoComplete="family-name"
                              className="mt-1 focus:ring-rose-500 bg-gray-50 py-3 focus:border-rose-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="first_name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              First name{" "}
                              <span className={"text-rose-500"}>*</span>
                            </label>
                            <input
                              type="text"
                              name="first_name"
                              id="first_name"
                              placeholder={"Enter First Name here..."}
                              autoComplete="given-name"
                              className="mt-1 focus:ring-rose-500 bg-gray-50 py-3 focus:border-rose-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                          <div className="col-span-6 sm:col-span-6">
                            <label
                              htmlFor="first_name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Other Names
                            </label>
                            <input
                              type="text"
                              name="first_name"
                              id="first_name"
                              placeholder={"Enter Other Names here..."}
                              autoComplete="given-name"
                              className="mt-1 focus:ring-rose-500 bg-gray-50 py-3 focus:border-rose-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="email_address"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Tax Identification Number{" "}
                              <span className={"text-rose-500"}>*</span>
                            </label>
                            <input
                              type="text"
                              placeholder={"TIN here ..."}
                              className="mt-1 focus:ring-rose-500 py-3 bg-gray-50 focus:border-rose-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                          <div className="col-span-6 sm:col-span-2">
                            <label
                              htmlFor="email_address"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Phone Number{" "}
                              <span className={"text-rose-500"}>*</span>
                            </label>
                            <input
                              type="text"
                              placeholder={"Phone here ..."}
                              className="mt-1 focus:ring-rose-500 py-3 bg-gray-50 focus:border-rose-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                          <div className="col-span-6 sm:col-span-1">
                            <button
                              type="button"
                              className="inline-flex mt-5 justify-center py-3 w-full px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                            >
                              Verify Now
                            </button>
                            {/* <div
                              className={
                                "mt-5 flex flex-row items-center text-green-600 h-12"
                              }
                            >
                              <span className={"mr-1"}>No. Verified</span>
                              <svg
                                className={"h-5 w-5"}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                  <div className="border-t border-gray-200"></div>
                </div>
              </div>
            </div>

            <div className="mt-10 col-span-3 sm:mt-0">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Address Information
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Enter your address details here
                    </p>
                  </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <form action="#" method="POST">
                    <div className="shadow overflow-hidden sm:rounded-md">
                      <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-6">
                            <label
                              htmlFor="country"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Country <span className={"text-red-500"}>*</span>
                            </label>
                            <select
                              id="country"
                              name="country"
                              autoComplete="country"
                              className="mt-1 block w-full py-3 bg-gray-50 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                            >
                              <option>United States</option>
                              <option>Canada</option>
                              <option>Mexico</option>
                            </select>
                          </div>

                          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium text-gray-700"
                            >
                              City <span className={"text-red-500"}>*</span>
                            </label>
                            <input
                              type="text"
                              placeholder={"City Name here ..."}
                              name="city"
                              id="city"
                              required
                              className="mt-1 focus:ring-rose-500 py-3 bg-gray-50 focus:border-rose-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label
                              htmlFor="postal_code"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Address Number
                            </label>
                            <input
                              type="text"
                              name="postal_code"
                              placeholder={"Address Number here ..."}
                              id="postal_code"
                              autoComplete="postal-code"
                              className="mt-1 focus:ring-rose-500 py-3 bg-gray-50 focus:border-rose-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label
                              htmlFor="state"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Digital Address
                            </label>
                            <input
                              type="text"
                              placeholder={"Digital Address here ..."}
                              className="mt-1 focus:ring-rose-500 py-3 bg-gray-50 focus:border-rose-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                          <div className="col-span-6">
                            <label
                              htmlFor="street_address"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Street Name
                            </label>
                            <input
                              type="text"
                              name="street_address"
                              id="street_address"
                              placeholder={"Street Name Information here ..."}
                              autoComplete="street-address"
                              className="mt-1 focus:ring-rose-500 py-3 bg-gray-50 focus:border-rose-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                  <div className="border-t border-gray-200"></div>
                </div>
              </div>
            </div>
            <div className="mt-10 col-span-3 sm:mt-0">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Lawyer Related Information
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Enter your lawyer related details here
                    </p>
                  </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <form action="#" method="POST">
                    <div className="shadow overflow-hidden sm:rounded-md">
                      <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-6 lg:col-span-4">
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium text-gray-700"
                            >
                              License Number{" "}
                              <span className={"text-red-500"}>*</span>
                            </label>
                            <input
                              type="text"
                              placeholder={"License Number here ..."}
                              required
                              className="mt-1 focus:ring-rose-500 py-3 bg-gray-50 focus:border-rose-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium text-gray-700"
                            >
                              First yeal of BAR Admission{" "}
                              <span className={"text-red-500"}>*</span>
                            </label>
                            <select
                              required
                              className="mt-1 block w-full py-3 bg-gray-50 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                            >
                              <option className={""}>Please select</option>
                              {getYears(
                                1990,
                                new Date().getFullYear() - 7
                              )?.map((year: number, i: number) => {
                                return (
                                  <React.Fragment key={i}>
                                    <option value={year.toString()}>
                                      {year}
                                    </option>
                                  </React.Fragment>
                                );
                              })}
                            </select>
                          </div>

                          <div className="col-span-6 sm:col-span-6 lg:col-span-5">
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium text-gray-700"
                            >
                              National ID (Front){" "}
                              <span className={"text-red-500"}>*</span>
                            </label>
                            <input
                              type="file"
                              required
                              className="mt-1 focus:ring-rose-500 py-3 bg-gray-50 focus:border-rose-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                          <button
                            type="button"
                            className="inline-flex mt-5 justify-center py-4 w-full px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                          >
                            Upload
                          </button>
                          <div className="col-span-6 sm:col-span-6 lg:col-span-5">
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium text-gray-700"
                            >
                              National ID (Back){" "}
                              <span className={"text-red-500"}>*</span>
                            </label>
                            <input
                              type="file"
                              required
                              className="mt-1 focus:ring-rose-500 py-3 bg-gray-50 focus:border-rose-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                          <button
                            type="button"
                            className="inline-flex mt-5 justify-center py-4 w-full px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                          >
                            Upload
                          </button>
                          <div className="col-span-6 sm:col-span-6 lg:col-span-5">
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium text-gray-700"
                            >
                              BAR membership card{" "}
                              <span className={"text-red-500"}>*</span>
                            </label>
                            <input
                              type="file"
                              required
                              className="mt-1 focus:ring-rose-500 py-3 bg-gray-50 focus:border-rose-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                          <button
                            type="button"
                            className="inline-flex mt-5 justify-center py-4 w-full px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                          >
                            Upload
                          </button>
                          <div className="col-span-6 sm:col-span-6 lg:col-span-5">
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Copy of law certificate{" "}
                              <span className={"text-red-500"}>*</span>
                            </label>
                            <input
                              type="file"
                              required
                              className="mt-1 focus:ring-rose-500 py-3 bg-gray-50 focus:border-rose-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                          <button
                            type="button"
                            className="inline-flex mt-5 justify-center py-4 w-full px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                          >
                            Upload
                          </button>
                          <div className="col-span-6 sm:col-span-6 lg:col-span-5">
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium text-gray-700"
                            >
                              CV <span className={"text-red-500"}>*</span>
                            </label>
                            <input
                              type="file"
                              required
                              className="mt-1 focus:ring-rose-500 py-3 bg-gray-50 focus:border-rose-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                          <button
                            type="button"
                            className="inline-flex mt-5 justify-center py-4 w-full px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                          >
                            Upload
                          </button>
                          <div className="col-span-6 sm:col-span-6 lg:col-span-5">
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Letter of good standing from BAR
                              <span className={"text-red-500"}>*</span>
                            </label>
                            <input
                              type="file"
                              required
                              className="mt-1 focus:ring-rose-500 py-3 bg-gray-50 focus:border-rose-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                          <button
                            type="button"
                            className="inline-flex mt-5 justify-center py-4 w-full px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                          >
                            Upload
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                  <div className="border-t border-gray-200"></div>
                </div>
              </div>
            </div>

            <div className="px-4 py-3 col-span-3 bg-gray-50 text-right sm:px-6 mb-5">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
              >
                Setup Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Setup;
