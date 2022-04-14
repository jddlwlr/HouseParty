import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      username
      email
      party
    }
  }
`;

export const QUERY_USER = gql`
  query User($id: ID!) {
    user(_id: $id) {
      parties {
        name
        _id
      }
    }
  }
`;

export const QUERY_RULES = gql`
  query allRules {
    rule {
      _id
      name
    }
  }
`;

export const QUERY_PARTIES = gql`
  query allParty {
    _id
    name
    users
    rules
    startDate
    endDate
  }
`;

export const QUERY_PARTY = gql`
  query party($id: ID!) {
    party(_id: $id) {
      rules {
        name
      }
    }
  }
`;
