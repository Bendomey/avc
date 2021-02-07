import * as React from "react";

export interface VerifyModalProp {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  email: string;
  id: string;
}
