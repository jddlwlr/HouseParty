import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query allUsers {
    users {
      _id
      username
      email
      partyName
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
    party(partyName: $partyName) {
      _id
      name
      users
      partyName
      rules
      startDate
      endDate
    }
  }
`;
