import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!) {
    addUser(name: $username) {
      _id
      username
      email
      parties
    }
    {
       updateUser($username: String!
         $email: String!
          $password: String!)
    }
    {
        token
        user {
          _id
        }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const RULE = gql`
  mutation addRule($name: String!, $party: Party) {
    addRule(name: $name, Party: $party) {
      _id
      name
      party
    }
  }
`;

export const ADD_PARTY = gql`
  mutation addParty(
    $name: String!
    $users: [User]
    $rules: [Rule]
    $startDate: String!
    $endDate: String!
  ) {
    addParty(
      name: $name
      user: $users
      rule: $rules
      startdate: $startDate
      endDate: $endDate
    ) {
      name
      users
      rules
      startDate
      endDate
    }
  }
`;
