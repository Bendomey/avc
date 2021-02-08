import * as React from "react";
import { GET_COUNTRIES } from "../../../../services/graphql/queries";
import { ApolloError, useMutation, useQuery } from "@apollo/client";
import {
  GetCountriesOutputProps,
  GetCountriesInputProps,
  SendVerificationCodeInputProps,
  SendVerificationCodeOutputProps,
} from "../../../../shared/interfaces/setup";
import { Country } from "../../../../shared/interfaces/shared";
import { toaster } from "evergreen-ui";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { SEND_PHONE_VERIFICATION_CODE } from "../../../../services/graphql/mutations";
import _ from "lodash";
import VerifyPhoneModal from "./verify-phone";
import moment from "moment";

interface Props {
  lastName: string;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  firstName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  otherNames: string;
  setOtherNames: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  tin: string;
  setTin: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  phoneVerified: boolean;
  setPhoneVerified: React.Dispatch<React.SetStateAction<boolean>>;
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
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const Personal: React.FC<Props> = ({
  lastName,
  setLastName,
  firstName,
  setFirstName,
  otherNames,
  setOtherNames,
  tin,
  setTin,
  phone,
  setPhone,
  phoneVerified,
  setPhoneVerified,
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
  setStep,
  type,
}) => {
  const [showPhoneModal, setShowPhoneModal] = React.useState<boolean>(false);
  const { loading, data: countries } = useQuery<
    GetCountriesOutputProps,
    GetCountriesInputProps
  >(GET_COUNTRIES);
  const [sendPhoneCodeInvoker, { loading: loadSendCode }] = useMutation<
    SendVerificationCodeOutputProps,
    SendVerificationCodeInputProps
  >(SEND_PHONE_VERIFICATION_CODE);

  const HandleSendCode = () => {
    toaster.closeAll();
    if (!isValidPhoneNumber(phone.trim())) {
      return toaster.warning("Please enter a valid phone number");
    }
    sendPhoneCodeInvoker({
      variables: {
        phone: phone.trim(),
      },
    })
      .then(() => {
        setShowPhoneModal(true); // show modal so they enter their code sent to them
      })
      .catch((e: ApolloError) => {
        if (e?.graphQLErrors?.length > 0) {
          toaster.danger(_.startCase(_.camelCase(e.graphQLErrors[0]?.message)));
          return;
        }
      });
  };

  const HandleSubmit = () => {
    toaster.closeAll();
    //check if no required is left blank
    if (
      lastName.trim() === "" ||
      firstName.trim() === "" ||
      tin.trim() === "" ||
      phone.trim() === ""
    ) {
      return toaster.warning(
        "Please fill in all required fields before you continue"
      );
    }

    if (type === "business") {
      if (
        companyName.trim() === "" ||
        companyRegistrationNumber.trim() === "" ||
        companyEntity.trim() === "" ||
        companyCountry.trim() === "" ||
        companyRegistrationDate.trim() === ""
      ) {
        return toaster.warning(
          "Please fill in all required fields before you continue"
        );
      }

      if (companyEntity.trim() === "Other") {
        if (companyEntityOther.trim() === "") {
          return toaster.warning("Please specify your entity");
        }
      }

      if (moment(new Date(companyRegistrationDate)).isAfter()) {
        return toaster.warning("Please enter a valid registration date");
      }
    }

    //check if phone is verified
    if (!phoneVerified) {
      return toaster.warning("Please verify your Phone Number");
    }
    setStep((step) => step + 1);
  };
  return (
    <React.Fragment>
      <div className={"ml-3 mb-5"}>
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
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name <span className={"text-rose-500"}>*</span>
                    </label>
                    <input
                      type="text"
                      value={lastName}
                      required
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setLastName(event.target.value)
                      }
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
                      First name <span className={"text-rose-500"}>*</span>
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      required
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setFirstName(event.target.value)
                      }
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
                      value={otherNames}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setOtherNames(event.target.value)
                      }
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
                      required
                      value={tin}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setTin(event.target.value)
                      }
                      placeholder={"TIN here ..."}
                      className="mt-1 focus:ring-rose-500 py-3 bg-gray-50 focus:border-rose-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-2">
                    <label
                      htmlFor="email_address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number <span className={"text-rose-500"}>*</span>
                    </label>
                    <PhoneInput
                      international
                      defaultCountry="GH"
                      value={phone}
                      className={"h-14  px-3 focus:outline-none"}
                      onChange={(val: string) => setPhone(val)}
                    />
                    {/* <input
                      type="text"
                      value={phone}
                      required
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setPhone(event.target.value)
                      }
                      placeholder={"Phone here ..."}
                      className="mt-1 focus:ring-rose-500 py-3 bg-gray-50 focus:border-rose-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    /> */}
                  </div>
                  <div className="col-span-6 sm:col-span-1">
                    {phoneVerified ? (
                      <div
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
                      </div>
                    ) : (
                      <button
                        onClick={HandleSendCode}
                        disabled={loadSendCode}
                        type="button"
                        className="inline-flex mt-5 justify-center py-3 w-full px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                      >
                        {loadSendCode ? "Sending..." : "Verify Now"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200"></div>
          </div>
        </div>
      </div>
      {type === "business" && (
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
                          Type Of Entity{" "}
                          <span className={"text-red-500"}>*</span>
                        </label>
                        <select
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
                            Specify here{" "}
                            <span className={"text-red-500"}>*</span>
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
              </div>
            </div>
            <div className="hidden sm:block" aria-hidden="true">
              <div className="pt-5">
                <div className="border-t border-gray-200"></div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}

      <div className="px-4 py-3 col-span-3 text-center sm:px-6">
        <button
          type="button"
          onClick={HandleSubmit}
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
      <VerifyPhoneModal
        show={showPhoneModal}
        setShow={setShowPhoneModal}
        phone={phone.trim()}
        setPhoneVerified={setPhoneVerified}
      />
    </React.Fragment>
  );
};

export default Personal;
