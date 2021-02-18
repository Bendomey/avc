import { gql } from "@apollo/client";

//for login
export const LOGIN = gql`
  mutation($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        id
        firstName
        otherNames
        lastName
        email
        type
        emailVerifiedAt
        phone
        phoneVerifiedAt
        setupAt
        createdAt
        updatedAt
      }
      lawyer {
        id
        addressCity
        addressCountry
        addressNumber
        addressStreetNumber
        barMembershipCard
        coverLetter
        createdAt
        updatedAt
        cv
        digitalAddress
        firstYearOfBarAdmission
        lawCertificate
        licenseNumber
        nationalIDBack
        nationalIDFront
        tin
      }
      customer {
        id
        addressCity
        addressCountry
        addressNumber
        addressStreetName
        companyCountryOfRegistration
        companyDateOfRegistration
        companyEntityType
        companyEntityTypeOther
        companyName
        companyRegistrationNumber
        createdAt
        digitalAddress
        tin
        type
        updatedAt
      }
    }
  }
`;

//for resending verification code
export const RESEND_VERIFICATION_CODE = gql`
  mutation($id: ID!) {
    resendUserCode(userId: $id) {
      id
    }
  }
`;

//for verifying email code
export const VERIFY_EMAIL = gql`
  mutation($id: ID!, $code: String!) {
    verifyUserEmail(userId: $id, code: $code) {
      token
      user {
        id
        firstName
        otherNames
        lastName
        email
        type
        emailVerifiedAt
        phone
        phoneVerifiedAt
        setupAt
        createdAt
        updatedAt
      }
      lawyer {
        id
        addressCity
        addressCountry
        addressNumber
        addressStreetNumber
        barMembershipCard
        coverLetter
        createdAt
        updatedAt
        cv
        digitalAddress
        firstYearOfBarAdmission
        lawCertificate
        licenseNumber
        nationalIDBack
        nationalIDFront
        tin
      }
      customer {
        id
        addressCity
        addressCountry
        addressNumber
        addressStreetName
        companyCountryOfRegistration
        companyDateOfRegistration
        companyEntityType
        companyEntityTypeOther
        companyName
        companyRegistrationNumber
        createdAt
        digitalAddress
        tin
        type
        updatedAt
      }
    }
  }
`;

//for registrations
export const REGISTER = gql`
  mutation($type: UserType!, $email: String!, $password: String!) {
    createUser(type: $type, email: $email, password: $password) {
      id
    }
  }
`;

//for sending code to phone
export const SEND_PHONE_VERIFICATION_CODE = gql`
  mutation($phone: String!) {
    sendPhoneVerificationCode(phone: $phone)
  }
`;

export const VERIFY_PHONE = gql`
  mutation($phone: String!, $code: String!) {
    verifyPhoneCode(phone: $phone, code: $code)
  }
`;

//update customer
export const UPDATE_CUSTOMER = gql`
  mutation(
    $firstName: String
    $lastName: String
    $otherNames: String
    $tin: String
    $phone: String
    $addressCountry: String
    $addressCity: String
    $addressNumber: String
    $addressStreetName: String
    $digitalAddress: String
    $companyEntityTypeOther: String
    $email: String
    $companyRegistrationNumber: String
    $type: CustomerType
    $companyDateOfRegistration: DateTime
    $companyEntityType: String
    $companyCountryOfRegistration: String
    $companyName: String
  ) {
    updateUserAndCustomer(
      input: {
        firstName: $firstName
        lastName: $lastName
        otherNames: $otherNames
        tin: $tin
        phone: $phone
        addressCountry: $addressCountry
        addressCity: $addressCity
        addressNumber: $addressNumber
        addressStreetName: $addressStreetName
        digitalAddress: $digitalAddress
        companyEntityTypeOther: $companyEntityTypeOther
        email: $email
        companyRegistrationNumber: $companyRegistrationNumber
        type: $type
        companyDateOfRegistration: $companyDateOfRegistration
        companyEntityType: $companyEntityType
        companyCountryOfRegistration: $companyCountryOfRegistration
        companyName: $companyName
      }
    ) {
      token
      user {
        id
        firstName
        otherNames
        lastName
        email
        type
        emailVerifiedAt
        phone
        phoneVerifiedAt
        setupAt
        createdAt
        updatedAt
      }
      lawyer {
        id
        addressCity
        addressCountry
        addressNumber
        addressStreetNumber
        barMembershipCard
        coverLetter
        createdAt
        updatedAt
        cv
        digitalAddress
        firstYearOfBarAdmission
        lawCertificate
        licenseNumber
        nationalIDBack
        nationalIDFront
        tin
      }
      customer {
        id
        addressCity
        addressCountry
        addressNumber
        addressStreetName
        companyCountryOfRegistration
        companyDateOfRegistration
        companyEntityType
        companyEntityTypeOther
        companyName
        companyRegistrationNumber
        createdAt
        digitalAddress
        tin
        type
        updatedAt
      }
    }
  }
`;

//update lawyer
export const UPDATE_LAWYER = gql`
  mutation(
    $firstName: String
    $lastName: String
    $otherNames: String
    $tin: String
    $phone: String
    $addressCountry: String
    $addressCity: String
    $addressNumber: String
    $addressStreetName: String
    $digitalAddress: String
    $email: String
    $lawCertificate: String
    $firstYearOfBarAdmission: String
    $CV: String
    $BARMembershipCard: String
    $coverLetter: String
    $nationalIDBack: String
    $nationalIDFront: String
    $licenseNumber: String
  ) {
    updateUserAndLawyer(
      input: {
        firstName: $firstName
        lastName: $lastName
        otherNames: $otherNames
        tin: $tin
        phone: $phone
        addressCountry: $addressCountry
        addressCity: $addressCity
        addressNumber: $addressNumber
        addressStreetName: $addressStreetName
        digitalAddress: $digitalAddress
        email: $email
        lawCertificate: $lawCertificate
        firstYearOfBarAdmission: $firstYearOfBarAdmission
        CV: $CV
        BARMembershipCard: $BARMembershipCard
        coverLetter: $coverLetter
        nationalIDFront: $nationalIDFront
        nationalIDBack: $nationalIDBack
        licenseNumber: $licenseNumber
      }
    ) {
      token
      user {
        id
        firstName
        otherNames
        lastName
        email
        type
        emailVerifiedAt
        phone
        phoneVerifiedAt
        setupAt
        createdAt
        updatedAt
      }
      lawyer {
        id
        addressCity
        addressCountry
        addressNumber
        addressStreetNumber
        barMembershipCard
        coverLetter
        createdAt
        updatedAt
        cv
        digitalAddress
        firstYearOfBarAdmission
        lawCertificate
        licenseNumber
        nationalIDBack
        nationalIDFront
        tin
      }
      customer {
        id
        addressCity
        addressCountry
        addressNumber
        addressStreetName
        companyCountryOfRegistration
        companyDateOfRegistration
        companyEntityType
        companyEntityTypeOther
        companyName
        companyRegistrationNumber
        createdAt
        digitalAddress
        tin
        type
        updatedAt
      }
    }
  }
`;
