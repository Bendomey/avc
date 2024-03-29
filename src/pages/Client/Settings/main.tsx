import * as React from "react";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <React.Fragment>
      <main className="max-w-7xl mx-auto lg:pt-5 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
          <aside className="py-6 lg:sticky top-4 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
            <nav className="space-y-1">
              <Link
                to="/settings"
                className="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
              >
                <svg
                  className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="truncate">Profile</span>
              </Link>

              <Link
                to="/settings?tab=account"
                className="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
              >
                <svg
                  className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="truncate">Account</span>
              </Link>

              <Link
                to="/settings?tab=security"
                className="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
              >
                <svg
                  className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  />
                </svg>
                <span className="truncate">Security</span>
              </Link>

              <Link
                to="/settings?tab=notifications"
                className="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
              >
                <svg
                  className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="truncate">Notifications</span>
              </Link>

              <Link
                to="/settings?tab=pacakages-and-billing"
                className="bg-gray-50 text-rose-600 hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm font-medium"
                aria-current="page"
              >
                <svg
                  className="text-rose-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                <span className="truncate">Packages &amp; Billing</span>
              </Link>
            </nav>
          </aside>

          <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9  overflow-y-auto mainClientDashboardContainer pb-5">
            <section aria-labelledby="payment_details_heading">
              <form action="#" method="POST">
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="bg-white py-6 px-4 sm:p-6">
                    <div>
                      <h2
                        id="payment_details_heading"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        Payment details
                      </h2>
                      <p className="mt-1 text-sm text-gray-500">
                        Update your billing information. Please note that
                        updating your location could affect your tax rates.
                      </p>
                    </div>

                    <div className="mt-6 grid grid-cols-4 gap-6">
                      <div className="col-span-4 sm:col-span-2">
                        <label
                          htmlFor="first_name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          name="first_name"
                          id="first_name"
                          autoComplete="cc-given-name"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-4 sm:col-span-2">
                        <label
                          htmlFor="last_name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          name="last_name"
                          id="last_name"
                          autoComplete="cc-family-name"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-4 sm:col-span-2">
                        <label
                          htmlFor="email_address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email address
                        </label>
                        <input
                          type="text"
                          name="email_address"
                          id="email_address"
                          autoComplete="email"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-4 sm:col-span-1">
                        <label
                          htmlFor="expiration_date"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Expration date
                        </label>
                        <input
                          type="text"
                          name="expiration_date"
                          id="expiration_date"
                          autoComplete="cc-exp"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                          placeholder="MM / YY"
                        />
                      </div>

                      <div className="col-span-4 sm:col-span-1">
                        <label
                          htmlFor="security_code"
                          className="flex items-center text-sm font-medium text-gray-700"
                        >
                          <span>Security code</span>
                          <svg
                            className="ml-1 flex-shrink-0 h-5 w-5 text-gray-300"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </label>
                        <input
                          type="text"
                          name="security_code"
                          id="security_code"
                          autoComplete="cc-csc"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-4 sm:col-span-2">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Country / Region
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country"
                          className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>

                      <div className="col-span-4 sm:col-span-2">
                        <label
                          htmlFor="postal_code"
                          className="block text-sm font-medium text-gray-700"
                        >
                          ZIP / Postal
                        </label>
                        <input
                          type="text"
                          name="postal_code"
                          id="postal_code"
                          autoComplete="postal-code"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="bg-gray-800 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </section>

            <section aria-labelledby="plan_heading">
              <form action="#" method="POST">
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                    <div>
                      <h2
                        id="plan_heading"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        Packages
                      </h2>
                    </div>

                    <fieldset>
                      <legend className="sr-only">Pricing plans</legend>
                      <ul className="relative bg-white rounded-md -space-y-px">
                        <li>
                          <div className="relative border rounded-tl-md rounded-tr-md p-4 flex flex-col md:pl-4 md:pr-6 md:grid md:grid-cols-3">
                            <label className="flex items-center text-sm cursor-pointer">
                              <input
                                name="pricing_plan"
                                type="radio"
                                className="h-4 w-4 text-rose-500 cursor-pointer focus:ring-gray-900 border-gray-300"
                                aria-describedby="plan-option-pricing-0 plan-option-limit-0"
                              />
                              <span className="ml-3 font-medium text-gray-900">
                                Starter
                              </span>
                            </label>
                            <p
                              id="plan-option-pricing-0"
                              className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center"
                            >
                              <span className="font-medium">$700 / month </span>
                              <span>($8,000 / year)</span>
                            </p>
                            <a
                              href={"https://africanventurecounsel.com/pricing"}
                              target={"_blank"}
                              rel="noreferrer"
                              id="plan-option-limit-0"
                              className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right underline text-blue-500"
                            >
                              See Details here
                            </a>
                          </div>
                        </li>

                        <li>
                          <div className="relative border border-gray-200 p-4 flex flex-col md:pl-4 md:pr-6 md:grid md:grid-cols-3">
                            <label className="flex items-center text-sm cursor-pointer">
                              <input
                                name="pricing_plan"
                                type="radio"
                                className="h-4 w-4 text-rose-500 cursor-pointer focus:ring-gray-900 border-gray-300"
                                aria-describedby="plan-option-pricing-1 plan-option-limit-1"
                                checked
                              />
                              <span className="ml-3 font-medium text-gray-900">
                                Growth
                              </span>
                            </label>
                            <p
                              id="plan-option-pricing-1"
                              className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center"
                            >
                              <span className="font-medium">
                                $1000 / month{" "}
                              </span>
                              <span>($11000 / year)</span>
                            </p>
                            <a
                              href={"https://africanventurecounsel.com/pricing"}
                              target={"_blank"}
                              rel="noreferrer"
                              id="plan-option-limit-0"
                              className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right underline text-blue-500"
                            >
                              See Details here
                            </a>
                          </div>
                        </li>

                        <li>
                          <div className="relative border border-gray-200 rounded-bl-md rounded-br-md p-4 flex flex-col md:pl-4 md:pr-6 md:grid md:grid-cols-3">
                            <label className="flex items-center text-sm cursor-pointer">
                              <input
                                name="pricing_plan"
                                type="radio"
                                className="h-4 w-4 text-rose-500 cursor-pointer focus:ring-gray-900 border-gray-300"
                                aria-describedby="plan-option-pricing-2 plan-option-limit-2"
                              />
                              <span className="ml-3 font-medium text-gray-900">
                                Growth Plus
                              </span>
                            </label>
                            <p
                              id="plan-option-pricing-2"
                              className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center"
                            ></p>
                            <a
                              href={"https://africanventurecounsel.com/pricing"}
                              target={"_blank"}
                              rel="noreferrer"
                              id="plan-option-limit-0"
                              className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right underline text-blue-500"
                            >
                              Contact Us For Pricing
                            </a>
                          </div>
                        </li>
                      </ul>
                    </fieldset>

                    <div className="flex items-center">
                      <button
                        type="button"
                        className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors ease-in-out duration-200"
                        aria-pressed="true"
                        aria-labelledby="annual-billing-label"
                      >
                        <span className="sr-only">Use setting</span>
                        <span
                          aria-hidden="true"
                          className="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                        ></span>
                      </button>
                      <span className="ml-3" id="annual-billing-label">
                        <span className="text-sm font-medium text-gray-900">
                          Annual billing{" "}
                        </span>
                        <span className="text-sm text-gray-500">
                          (Save 10%)
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="bg-gray-800 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </section>

            <section aria-labelledby="billing_history_heading">
              <div className="bg-white pt-6 shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 sm:px-6">
                  <h2
                    id="billing_history_heading"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    Billing history
                  </h2>
                </div>
                <div className="mt-6 flex flex-col">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="overflow-hidden border-t border-gray-200">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Date
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Description
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Amount
                              </th>

                              <th
                                scope="col"
                                className="relative px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                <span className="sr-only">View receipt</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                1/1/2020
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                Business Plan - Annual Billing
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                CA$109.00
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a
                                  href="/"
                                  className="text-rose-600 hover:text-rose-900"
                                >
                                  View receipt
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Settings;
