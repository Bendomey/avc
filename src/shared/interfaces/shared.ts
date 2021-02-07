export interface User {
  id: string;
  firstName: string;
  otherNames: string;
  lastName: string;
  email: string;
  emailVerifiedAt: Date;
  phone: string;
  phoneVerifiedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Lawyer {
  id: string;
  addressCity: string;
  addressCountry: string;
  addressNumber: string;
  addressStreetNumber: string;
  barMembershipCard: string;
  coverLetter: string;
  cv: string;
  digitalAddress: string;
  firstYearOfBarAdmission: string;
  lawCertificate: string;
  licenseNumber: string;
  nationalIDBack: string;
  nationalIDFront: string;
  tin: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Customer {
  id: string;
  addressCity: string;
  addressCountry: string;
  addressNumber: string;
  addressStreetNumber: string;
  companyCountryOfRegistration: string;
  companyDateOfRegistration: Date;
  companyEntityType: string;
  companyEntityTypeOther: string;
  companyName: string;
  companyRegistrationNumber: string;
  digitalAddress: string;
  tin: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
}
