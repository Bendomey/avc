import { Country, Customer, Lawyer, User } from "./shared";

//fetching countries
export interface GetCountriesInputProps {
  filter?: {};
  skip?: number;
  limit?: number;
}

export interface GetCountriesOutputProps {
  countries: Country[];
  countriesLength: number;
}

//for phone verification
export interface SendVerificationCodeInputProps {
  phone: string;
}

export interface SendVerificationCodeOutputProps {
  sendPhoneVerificationCode: boolean;
}

//for verifying code
export interface VerifyPhoneCodeInputProps {
  phone: string;
  code: string;
}

export interface VerifyPhoneCodeOutputProps {
  verifyPhoneCode: boolean;
}

//modal for phone number
export interface VerifyPhoneModalProp {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setPhoneVerified: React.Dispatch<React.SetStateAction<boolean>>;
  phone: string;
}

//for updating customer details
export interface UpdateCustomerDetailsInputProps {
  firstName?: string;
  lastName?: string;
  otherNames?: string;
  tin?: string;
  phone?: string;
  addressCountry?: string;
  addressCity?: string;
  addressNumber?: string;
  digitalAddress?: string;
  companyEntityTypeOther?: string;
  email?: string;
  companyRegistrationNumber?: string;
  type?: string;
  companyDateOfRegistration?: Date;
  companyEntityType?: string;
  companyName?: string;
}

export interface UpdateCustomerDetailsOutputProps {
  updateUserAndCustomer: {
    token: string;
    user: User;
    lawyer: Lawyer;
    customer: Customer;
  };
}
