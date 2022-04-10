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
