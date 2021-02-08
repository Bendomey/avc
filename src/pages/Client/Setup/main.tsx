import * as React from "react";
import Address from "./tabs/address";
// import Business from "./tabs/business";
import Personal from "./tabs/personal";
import CustomerTypeComponent from "./tabs/type";
import Step from "./steps";
import { useMutation } from "@apollo/client";
import {
  UpdateCustomerDetailsInputProps,
  UpdateCustomerDetailsOutputProps,
} from "../../../shared/interfaces/setup";
import { UPDATE_CUSTOMER } from "../../../services/graphql/mutations";
// import { toaster } from "evergreen-ui";
import { AuthContext } from "../../../services/context";

const Setup = () => {
  const [{ signIn }] = React.useContext(AuthContext);
  //for type
  const [type, setType] = React.useState<string>("");

  //for persoanl
  const [lastName, setLastName] = React.useState<string>("");
  const [firstName, setFirstName] = React.useState<string>("");
  const [otherNames, setOtherNames] = React.useState<string>("");
  const [tin, setTin] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [phoneVerified, setPhoneVerified] = React.useState<boolean>(false);

  //for business
  const [companyName, setCompanyName] = React.useState<string>("");
  const [
    companyRegistrationNumber,
    setCompanyRegistrationNumber,
  ] = React.useState<string>("");
  const [companyEntity, setCompanyEntity] = React.useState<string>("");
  const [companyEntityOther, setCompanyEntityOther] = React.useState<string>(
    ""
  );
  const [companyCountry, setCompanyCountry] = React.useState<string>("");
  const [
    companyRegistrationDate,
    setCompanyRegistrationDate,
  ] = React.useState<string>("");

  //for address
  const [addressCountry, setAddressCountry] = React.useState<string>("");
  const [addressCity, setAddressCity] = React.useState<string>("");
  const [addressNumber, setAddressNumber] = React.useState<string>("");
  const [
    addressDigitalAddress,
    setAddressDigitalAddress,
  ] = React.useState<string>("");
  const [addressStreetName, setAddressStreetName] = React.useState<string>("");

  //for steps
  const [step, setStep] = React.useState<number>(0);

  //handle submit
  const [updateCustomerInvoker, { loading }] = useMutation<
    UpdateCustomerDetailsOutputProps,
    UpdateCustomerDetailsInputProps
  >(UPDATE_CUSTOMER);
  const HandleSubmit = () => {
    return updateCustomerInvoker({
      variables: {
        type: type === "business" ? "Business" : "Individual",
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        otherNames: otherNames.trim() === "" ? undefined : otherNames.trim(),
        phone: phone.trim(),
        tin: tin.trim(),
        addressCountry: addressCountry.trim(),
        addressCity: addressCity.trim(),
        addressNumber:
          addressNumber.trim() === "" ? undefined : addressNumber.trim(),
        digitalAddress:
          addressDigitalAddress.trim() === ""
            ? undefined
            : addressDigitalAddress.trim(),
        companyEntityTypeOther:
          companyEntityOther.trim() === ""
            ? undefined
            : companyEntityOther.trim(),
        companyEntityType:
          companyEntity.trim() === "" ? undefined : companyEntity.trim(),
        companyRegistrationNumber: companyRegistrationNumber.trim(),
        companyName: companyName.trim(),
        companyDateOfRegistration: new Date(companyRegistrationDate),
      },
    }).then(async ({ data }) => {
      if (data) {
        await signIn(data?.updateUserAndCustomer);
      }
    });
  };
  return (
    <React.Fragment>
      <div className="pt-10 max-w-3xl mx-auto sm:px-6 lg:max-w-7xl">
        <h1 className={"text-3xl font-bold mx-3 sm:mx-3 md:mx-0"}>
          Setup Your Account
        </h1>
        <div className={"mt-0 sm:mt-0 md:mt-5"}>
          <div className={"my-10 flex justify-center"}>
            <Step type={type} step={step} setStep={setStep} />
          </div>
          <form onSubmit={HandleSubmit}>
            <div className="w-full md:grid md:grid-cols-3 md:gap-6">
              {step === 0 ? (
                <CustomerTypeComponent
                  type={type}
                  setType={setType}
                  setStep={setStep}
                />
              ) : step === 1 ? (
                <React.Fragment>
                  <Personal
                    lastName={lastName}
                    setLastName={setLastName}
                    firstName={firstName}
                    setFirstName={setFirstName}
                    type={type}
                    otherNames={otherNames}
                    setOtherNames={setOtherNames}
                    phone={phone}
                    setPhone={setPhone}
                    phoneVerified={phoneVerified}
                    setPhoneVerified={setPhoneVerified}
                    tin={tin}
                    setTin={setTin}
                    companyName={companyName}
                    setCompanyName={setCompanyName}
                    companyRegistrationNumber={companyRegistrationNumber}
                    setCompanyRegistrationNumber={setCompanyRegistrationNumber}
                    companyEntity={companyEntity}
                    setCompanyEntity={setCompanyEntity}
                    companyEntityOther={companyEntityOther}
                    setCompanyEntityOther={setCompanyEntityOther}
                    companyCountry={companyCountry}
                    setCompanyCountry={setCompanyCountry}
                    companyRegistrationDate={companyRegistrationDate}
                    setCompanyRegistrationDate={setCompanyRegistrationDate}
                    setStep={setStep}
                  />
                </React.Fragment>
              ) : (
                <Address
                  setStep={setStep}
                  addressCountry={addressCountry}
                  setAddressCountry={setAddressCountry}
                  addressCity={addressCity}
                  setAddressCity={setAddressCity}
                  addressNumber={addressNumber}
                  setAddressNumber={setAddressNumber}
                  addressDigitalAddress={addressDigitalAddress}
                  setAddressDigitalAddress={setAddressDigitalAddress}
                  addressStreetName={addressStreetName}
                  setAddressStreetName={setAddressStreetName}
                  loadSubmit={loading}
                  submitData={HandleSubmit}
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Setup;
