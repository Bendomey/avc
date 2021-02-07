import { Customer, Lawyer, User } from "./shared";

export interface LoginInputProps {
  email: string;
  password: string;
}

export interface LoginOutputProps {
  loginUser: {
    token: string;
    user: User;
    lawyer: Lawyer;
    customer: Customer;
  };
}

//for resending verification code
export interface ResendVerificationCodeInputProps {
  id: string;
}

export interface ResendVerificationCodeOutputProps {
  resendUserCode: {
    id: string;
  };
}

//for verifying email
export interface VerifyEmailInputProps {
  id: string;
  code: string;
}

export interface VerifyEmailOutputProps {
  verifyUserEmail: {
    token: string;
    user: User;
    lawyer: Lawyer;
    customer: Customer;
  };
}
