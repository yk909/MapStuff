import gql from "graphql-tag";

const USER_QUERY = gql`
  query($query: UserQueryInput) {
    user(query: $query) {
      email
      _id
      password
      role_id
      stripe_customer_id
    }
  }
`;

export { USER_QUERY };
