import * as React from "react";

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
                      Choose Type
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Select the type of customer you opt for
                    </p>
                  </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <form action="#" method="POST">
                    <div className="shadow overflow-hidden sm:rounded-md">
                      <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3">
                          <div
                            className={"cursor-pointer"}
                            onClick={() => setType("business")}
                          >
                            <div
                              className={`w-full inline-flex  py-2 px-4 border ${
                                type === "business"
                                  ? "border-red-300"
                                  : "border-gray-300"
                              } rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 group hover:border-red-300`}
                            >
                              <div className="flex flex-row items-center justify-between w-full">
                                <div>
                                  <h4
                                    className={`${
                                      type === "business"
                                        ? "text-red-500"
                                        : "text-gray-500"
                                    } text-lg font-bold group-hover:text-red-500`}
                                  >
                                    Business
                                  </h4>
                                </div>
                                <div className="">
                                  <svg
                                    className={`${
                                      type === "business"
                                        ? "text-red-500"
                                        : "text-gray-500"
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
                                type === "individual"
                                  ? "border-red-300"
                                  : "border-gray-300"
                              } rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 group hover:border-red-300`}
                            >
                              <div className="flex flex-row items-center justify-between w-full">
                                <div>
                                  <h4
                                    className={`${
                                      type === "individual"
                                        ? "text-red-500"
                                        : "text-gray-500"
                                    } text-lg font-bold group-hover:text-red-500`}
                                  >
                                    Individual
                                  </h4>
                                </div>
                                <div className="ml-4 flex-shrink-0">
                                  <svg
                                    className={`${
                                      type === "individual"
                                        ? "text-red-500"
                                        : "text-gray-500"
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
                              type="submit"
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
                      Business Information
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Enter your business details here
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
                              Company Name{" "}
                              <span className={"text-red-500"}>*</span>
                            </label>
                            <input
                              type="text"
                              placeholder={"Company Name here ..."}
                              required
                              className="mt-1 focus:ring-rose-500 py-3 bg-gray-50 focus:border-rose-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Registration Number{" "}
                              <span className={"text-red-500"}>*</span>
                            </label>
                            <input
                              type="text"
                              placeholder={"Registration Number here ..."}
                              required
                              className="mt-1 focus:ring-rose-500 py-3 bg-gray-50 focus:border-rose-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="country"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Type Of Entity{" "}
                              <span className={"text-red-500"}>*</span>
                            </label>
                            <select
                              id="country"
                              required
                              className="mt-1 block w-full py-3 bg-gray-50 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                            >
                              <option className={""}>Please select</option>
                              <option className={"SOLE PROPRIETOR"}>
                                SOLE PROPRIETOR
                              </option>
                              <option className={"LIMITED LIABLITY"}>
                                LIMITED LIABLITY
                              </option>
                              <option value="PARTNERSHIP">PARTNERSHIP</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                          <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Specify here{" "}
                              <span className={"text-red-500"}>*</span>
                            </label>
                            <input
                              type="text"
                              placeholder={"Type Of Entity here ..."}
                              required
                              className="mt-1 focus:ring-rose-500 py-3 bg-gray-50 focus:border-rose-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="country"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Country Of Registration{" "}
                              <span className={"text-red-500"}>*</span>
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

                          <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Date Of Company Registration{" "}
                              <span className={"text-red-500"}>*</span>
                            </label>
                            <input
                              type="date"
                              required
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
