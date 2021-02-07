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
        emailVerifiedAt
        phone
        phoneVerifiedAt
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
        addressStreetNumber
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
export const VERIFY_EMIAL = gql`
  mutation($id: ID!, $code: String!) {
    verifyUserEmail(userId: $id, code: $code) {
      token
      user {
        id
        firstName
        otherNames
        lastName
        email
        emailVerifiedAt
        phone
        phoneVerifiedAt
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
        addressStreetNumber
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
