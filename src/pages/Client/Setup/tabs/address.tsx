import * as React from "react";
import { GET_COUNTRIES } from "../../../../services/graphql/queries";
import {
  GetCountriesOutputProps,
  GetCountriesInputProps,
} from "../../../../shared/interfaces/setup";
import { Country } from "../../../../shared/interfaces/shared";
import { ApolloError, useQuery } from "@apollo/client";
import { toaster } from "evergreen-ui";
import ClipLoader from "react-spinners/ClipLoader";
import _ from "lodash";

interface Props {
  addressCountry: string;
  setAddressCountry: React.Dispatch<React.SetStateAction<string>>;
  addressCity: string;
  setAddressCity: React.Dispatch<React.SetStateAction<string>>;
  addressNumber: string;
  setAddressNumber: React.Dispatch<React.SetStateAction<string>>;
  addressDigitalAddress: string;
  setAddressDigitalAddress: React.Dispatch<React.SetStateAction<string>>;
  addressStreetName: string;
  setAddressStreetName: React.Dispatch<React.SetStateAction<string>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  loadSubmit: boolean;
  submitData: any;
}
const Address: React.FC<Props> = ({
  addressCountry,
  setAddressCountry,
  addressCity,
  setAddressCity,
  addressNumber,
  setAddressNumber,
  addressDigitalAddress,
  setAddressDigitalAddress,
  addressStreetName,
  setAddressStreetName,
  setStep,
  loadSubmit,
  submitData,
}) => {
  const { loading, data: countries } = useQuery<
    GetCountriesOutputProps,
    GetCountriesInputProps
  >(GET_COUNTRIES);

  const HandleSubmit = () => {
    toaster.closeAll();

    if (addressCountry.trim() === "" || addressCity.trim() === "") {
      return toaster.warning("Please fill in required fields");
    }

    return submitData().catch((e: ApolloError) => {
      if (e?.graphQLErrors?.length > 0) {
        toaster.danger(_.startCase(_.camelCase(e.graphQLErrors[0]?.message)));
      }
    });
  };
  return (
    <React.Fragment>
      <div className="mt-10 col-span-3 sm:mt-0">
        <div className={"mb-5"}>
          <button
            type="button"
            onClick={() => {
              toaster.closeAll();
              setStep((step) => step - 1);
            }}
            className="inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
          >
            <svg
              className={"h-5 w-5 mr-3 text-white"}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Go Back
          </button>
        </div>
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
                      value={addressCountry}
                      onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                        setAddressCountry(event.target.value)
                      }
                      required
                      className="mt-1 block w-full py-3 bg-gray-50 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                    >
                      {loading ? (
                        <option value="">Please wait...</option>
                      ) : (
                        <React.Fragment>
                          {countries ? (
                            <React.Fragment>
                              {countries?.countriesLength === 0 ? (
                                <option value="">No countries available</option>
                              ) : (
                                <React.Fragment>
                                  <option value="">Please select</option>
                                  {countries?.countries?.map(
                                    (country: Country, i: number) => (
                                      <React.Fragment key={i}>
                                        <option value={country?.id}>
                                          {country?.name}
                                        </option>
                                      </React.Fragment>
                                    )
                                  )}
                                </React.Fragment>
                              )}
                            </React.Fragment>
                          ) : (
                            <React.Fragment>
                              <option value="">
                                Oops, something happened. Can't fetch countries
                                right now
                              </option>
                            </React.Fragment>
                          )}
                        </React.Fragment>
                      )}
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
                      value={addressCity}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAddressCity(event.target.value)
                      }
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
                      value={addressNumber}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAddressNumber(event.target.value)
                      }
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
                      value={addressDigitalAddress}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAddressDigitalAddress(event.target.value)
                      }
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
                      value={addressStreetName}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAddressStreetName(event.target.value)
                      }
                      id="street_address"
                      placeholder={"Street Name Information here ..."}
                      autoComplete="street-address"
                      className="mt-1 focus:ring-rose-500 py-3 bg-gray-50 focus:border-rose-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-10 col-span-3 text-center sm:px-6">
          {loadSubmit ? (
            <ClipLoader color={"red"} size={40} />
          ) : (
            <button
              disabled={loadSubmit}
              onClick={HandleSubmit}
              type="button"
              className="inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
            >
              Submit
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Address;
