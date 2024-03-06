import { gql } from "@apollo/client";

// nama query harus sama dengan nama di backend
export const GET_AUTHENTICATED_USER = gql`
  query GetAuthenticatedUser {
    authUser {
      _id
      username
      name
      profilePicture
    }
  }
`;
