import { gql } from "@apollo/client";

//get countries
export const GET_COUNTRIES = gql`
  query($filter: GetCountriesFilter, $skip: Int, $limit: Int) {
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
  query($skip: Int, $limit: Int, $filter: GetTagsFilter) {
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
