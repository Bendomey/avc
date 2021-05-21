import { Service } from "./service";
import { User } from "./shared";

export interface Package {
  id: string;
  name: string;
  amountPerYear: number;
  amountPerMonth: number;
  description: string;
  status: "PENDING" | "APPROVED";
  createdAt: Date;
  updatedAt: Date;
  requestedBy: User;
}

export interface GetPackagesInputProps {
  filter?: {
    user?: string;
  };
  skip?: number;
  limit?: number;
}

export interface GetPackagesOutputProps {
  packages: Package[];
  packagesLength: number;
}

export interface PackageService {
  id: string;
  isActive: boolean;
  quantity: number;
  type: "NUMBER" | "BOOLEAN";
  description: string;
  package: Package;
  service: Service;
  createdAt: Date;
  updatedAt: Date;
}

export interface GetPackageServicesInputProps {
  filter?: {
    package?: string;
  };
  skip?: number;
  limit?: number;
}

export interface GetPackageServicesOutputProps {
  packageServices: PackageService[];
  packageServicesLength: number;
}

export interface CreatePackageInputProps {
  name?: string;
  description?: string;
  amountPerMonth: number;
  amountPerYear: number;
  packageServices: InputPackageService[];
}

export interface InputPackageService {
  serviceId: string;
  quantity: number | undefined;
  isActive: boolean | undefined;
}

export interface CreatePackageOutputProps {
  createPackage: Package;
}
