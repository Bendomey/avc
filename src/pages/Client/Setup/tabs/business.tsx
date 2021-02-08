import { useQuery } from "@apollo/client";
import * as React from "react";
import { GET_COUNTRIES } from "../../../../services/graphql/queries";
import {
  GetCountriesOutputProps,
  GetCountriesInputProps,
} from "../../../../shared/interfaces/setup";
import { Country } from "../../../../shared/interfaces/shared";

interface Props {
  companyName: string;
  setCompanyName: React.Dispatch<React.SetStateAction<string>>;
  companyRegistrationNumber: string;
  setCompanyRegistrationNumber: React.Dispatch<React.SetStateAction<string>>;
  companyEntity: string;
  setCompanyEntity: React.Dispatch<React.SetStateAction<string>>;
  companyEntityOther: string;
  setCompanyEntityOther: React.Dispatch<React.SetStateAction<string>>;
  companyCountry: string;
  setCompanyCountry: React.Dispatch<React.SetStateAction<string>>;
  companyRegistrationDate: string;
  setCompanyRegistrationDate: React.Dispatch<React.SetStateAction<string>>;
}
const Business: React.FC<Props> = ({
  companyName,
  setCompanyName,
  companyRegistrationNumber,
  setCompanyRegistrationNumber,
  companyEntity,
  setCompanyEntity,
  companyEntityOther,
  setCompanyEntityOther,
  companyCountry,
  setCompanyCountry,
  companyRegistrationDate,
  setCompanyRegistrationDate,
}) => {
  const { loading, data: countries } = useQuery<
    GetCountriesOutputProps,
    GetCountriesInputProps
  >(GET_COUNTRIES);
  return (
    <React.Fragment>
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
                        Company Name <span className={"text-red-500"}>*</span>
                      </label>
                      <input
                        type="text"
                        placeholder={"Company Name here ..."}
                        required
                        value={companyName}
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => setCompanyName(event.target.value)}
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
                        value={companyRegistrationNumber}
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => setCompanyRegistrationNumber(event.target.value)}
                        className="mt-1 focus:ring-rose-500 py-3 bg-gray-50 focus:border-rose-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Type Of Entity <span className={"text-red-500"}>*</span>
                      </label>
                      <select
                        id="country"
                        required
                        value={companyEntity}
                        onChange={(
                          event: React.ChangeEvent<HTMLSelectElement>
                        ) => setCompanyEntity(event.target.value)}
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
                    {companyEntity === "Other" && (
                      <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Specify here <span className={"text-red-500"}>*</span>
                        </label>
                        <input
                          type="text"
                          placeholder={"Type Of Entity here ..."}
                          required
                          value={companyEntityOther}
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => setCompanyEntityOther(event.target.value)}
                          className="mt-1 focus:ring-rose-500 py-3 bg-gray-50 focus:border-rose-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    )}
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
                        required
                        value={companyCountry}
                        onChange={(
                          event: React.ChangeEvent<HTMLSelectElement>
                        ) => setCompanyCountry(event.target.value)}
                        autoComplete="country"
                        className="mt-1 block w-full py-3 bg-gray-50 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                      >
                        {loading ? (
                          <option value="">Please wait...</option>
                        ) : (
                          <React.Fragment>
                            {countries ? (
                              <React.Fragment>
                                {countries?.countriesLength === 0 ? (
                                  <option value="">
                                    No countries available
                                  </option>
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
                                  Oops, something happened. Can't fetch
                                  countries right now
                                </option>
                              </React.Fragment>
                            )}
                          </React.Fragment>
                        )}
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
                        value={companyRegistrationDate}
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => setCompanyRegistrationDate(event.target.value)}
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
          <div className="pt-5">
            <div className="border-t border-gray-200"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Business;
