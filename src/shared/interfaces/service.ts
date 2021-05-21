import { User } from "./shared";

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  type: "BOTH" | "SUBSCRIBE" | "UNSUBSCRIBE";
  variant: "BOOLEAN" | "NUMBER";
  createdAt: Date;
  updatedAt: Date;
  requestedBy: User;
}

export interface GetServicesInputProps {
  filter?: {};
  skip?: number;
  limit?: number;
}

export interface GetServicesOutputProps {
  services: Service[];
  servicesLength: number;
}
