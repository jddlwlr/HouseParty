import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query allUsers {
    users {
      _id
      username
      email
      party
    }
  }
`;



export const QUERY_RULE = gql`
  query allRules {
    rule {
      _id
      name
    }
  }
`;

export const QUERY_PARTY = gql`
  query allParty {
    _id
    name
    users
    rules
    startDate
    endDate
  }
`
