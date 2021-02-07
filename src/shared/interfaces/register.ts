import * as React from "react";
import { User } from "./shared";

export interface VerifyModalProp {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  email: string;
  id: string;
}

export interface RegisterInputProps {
  type: string;
  email: string;
  password: string;
}

export interface RegisterOutputProps {
  createUser: User;
}
