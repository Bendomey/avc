import { gql } from "@apollo/client";

//get countries
export const GET_COUNTRIES = gql`
  query ($filter: GetCountriesFilter, $skip: Int, $limit: Int) {
    countries(filter: $filter, pagination: { skip: $skip, limit: $limit }) {
      id
      name
      createdAt
      updatedAt
      currency
      description
    }
    countriesLength(filter: $filter)
  }
`;

//get tags
export const GET_TAGS = gql`
  query ($skip: Int, $limit: Int, $filter: GetTagsFilter) {
    tags(pagination: { skip: $skip, limit: $limit }, filter: $filter) {
      id
      name
      createdBy {
        id
        fullname
      }
      createdAt
      updatedAt
    }
    tagsLength(filter: $filter)
  }
`;

//get packages
export const GET_PACKAGES = gql`
  query ($filter: GetPackagesFilter, $skip: Int, $limit: Int) {
    packages(filter: $filter, pagination: { skip: $skip, limit: $limit }) {
      id
      name
      amountPerYear
      amountPerMonth
      description
      status
      createdAt
      updatedAt
      requestedBy {
        id
        lastName
      }
    }
    packagesLength(filter: $filter)
  }
`;

//get package services
export const GET_PACKAGE_SERVICES = gql`
  query ($filter: GetPackageServicesFilter, $skip: Int, $limit: Int) {
    packageServices(
      filter: $filter
      pagination: { skip: $skip, limit: $limit }
    ) {
      id
      isActive
      quantity
      type
      package {
        id
        name
      }
      service {
        id
        name
      }
      createdAt
      updatedAt
    }
    packageServicesLength(filter: $filter)
  }
`;

export const GET_SERVICES = gql`
  query ($filter: GetServicesFilter, $skip: Int, $limit: Int) {
    services(filter: $filter, pagination: { skip: $skip, limit: $limit }) {
      id
      name
      description
      price
      type
      variant
      createdAt
      updatedAt
    }
    servicesLength(filter: $filter)
  }
`;
