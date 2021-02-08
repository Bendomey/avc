import * as React from "react";
import { AuthContext } from "../../../services/context";
import Step from "./steps";
import Personal from "./tabs/personal";
import Address from "./tabs/address";
import LawRelated from "./tabs/law-related";
import {
  UpdateLawyerDetailsInputProps,
  UpdateLawyerDetailsOutputProps,
} from "../../../shared/interfaces/setup";
import { UPDATE_LAWYER } from "../../../services/graphql/mutations";
import { useMutation } from "@apollo/client";

const Setup = () => {
  const [{ signIn }] = React.useContext(AuthContext);

  //for persoanl
  const [lastName, setLastName] = React.useState<string>("");
  const [firstName, setFirstName] = React.useState<string>("");
  const [otherNames, setOtherNames] = React.useState<string>("");
  const [tin, setTin] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [phoneVerified, setPhoneVerified] = React.useState<boolean>(false);

  //for address
  const [addressCountry, setAddressCountry] = React.useState<string>("");
  const [addressCity, setAddressCity] = React.useState<string>("");
  const [addressNumber, setAddressNumber] = React.useState<string>("");
  const [
    addressDigitalAddress,
    setAddressDigitalAddress,
  ] = React.useState<string>("");
  const [addressStreetName, setAddressStreetName] = React.useState<string>("");

  //law related
  const [firstYearOfBARAdmission, setFirstYearOfBARAdmission] = React.useState(
    ""
  );
  const [licenseNumber, setLicenseNumber] = React.useState("");
  const [nationalIDFront, setNationalIDFront] = React.useState("");
  const [nationalIDBack, setNationalIDBack] = React.useState("");
  const [barMembershipCard, setBarMembershipCard] = React.useState("");
  const [lawCert, setLawCert] = React.useState("");
  const [cv, setCV] = React.useState("");
  const [letter, setLetter] = React.useState("");

  //for steps
  const [step, setStep] = React.useState<number>(0);

  //handle submit
  const [updatelawyerInvoker, { loading }] = useMutation<
    UpdateLawyerDetailsOutputProps,
    UpdateLawyerDetailsInputProps
  >(UPDATE_LAWYER);

  const HandleSubmit = () => {
    return updatelawyerInvoker({
      variables: {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        otherNames: otherNames.trim() === "" ? undefined : otherNames.trim(),
        phone: phone.trim(),
        tin: tin.trim(),
        addressCountry: addressCountry.trim(),
        addressCity: addressCity.trim(),
        addressStreetName:
          addressStreetName.trim() === ""
            ? undefined
            : addressStreetName.trim(),
        addressNumber:
          addressNumber.trim() === "" ? undefined : addressNumber.trim(),
        digitalAddress:
          addressDigitalAddress.trim() === ""
            ? undefined
            : addressDigitalAddress.trim(),
        licenseNumber: licenseNumber.trim(),
        nationalIDBack: nationalIDBack.trim(),
        nationalIDFront: nationalIDFront.trim(),
        coverLetter: letter.trim(),
        BARMembershipCard: barMembershipCard.trim(),
        CV: cv.trim(),
        firstYearOfBarAdmission: firstYearOfBARAdmission.trim(),
        lawCertificate: lawCert.trim(),
      },
    }).then(async ({ data }) => {
      if (data) {
        await signIn(data?.updateUserAndLawyer);
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
            <Step step={step} />
          </div>
          <form onSubmit={HandleSubmit}>
            <div className="w-full md:grid md:grid-cols-3 md:gap-6">
              {step === 0 ? (
                <React.Fragment>
                  <Personal
                    lastName={lastName}
                    setLastName={setLastName}
                    firstName={firstName}
                    setFirstName={setFirstName}
                    otherNames={otherNames}
                    setOtherNames={setOtherNames}
                    phone={phone}
                    setPhone={setPhone}
                    phoneVerified={phoneVerified}
                    setPhoneVerified={setPhoneVerified}
                    tin={tin}
                    setTin={setTin}
                    setStep={setStep}
                  />
                </React.Fragment>
              ) : step === 1 ? (
                <React.Fragment>
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
                  />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <LawRelated
                    setStep={setStep}
                    licenseNumber={licenseNumber}
                    setLicenseNumber={setLicenseNumber}
                    firstYearOfBARAdmission={firstYearOfBARAdmission}
                    setFirstYearOfBARAdmission={setFirstYearOfBARAdmission}
                    nationalIDFront={nationalIDFront}
                    setNationalIDFront={setNationalIDFront}
                    nationalIDBack={nationalIDBack}
                    setNationalIDBack={setNationalIDBack}
                    barMembershipCard={barMembershipCard}
                    setBarMembershipCard={setBarMembershipCard}
                    lawCert={lawCert}
                    setLawCert={setLawCert}
                    cv={cv}
                    setCV={setCV}
                    letter={letter}
                    setLetter={setLetter}
                    loadSubmit={loading}
                    submitData={HandleSubmit}
                  />
                </React.Fragment>
              )}
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Setup;
