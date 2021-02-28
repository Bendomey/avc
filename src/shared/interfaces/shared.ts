export interface Admin {
  id: string;
  fullname: string;
  email: string;
  role: string;
  phone: string;
  phoneVerifiedAt: Date;
  suspendedReason: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  firstName: string;
  otherNames: string;
  lastName: string;
  email: string;
  type: string;
  emailVerifiedAt: Date;
  setupAt: Date;
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
  addressStreetName: string;
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
  addressStreetName: string;
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

export interface Country {
  id: string;
  name: string;
  currency: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
