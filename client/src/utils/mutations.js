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
