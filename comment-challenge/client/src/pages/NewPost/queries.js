import {gql} from "@apollo/client";

export const GET_USERS = gql`
    query getAllUsers {
        users
        {
            id
            fullName
        }
    }
`;

export const NEW_POST_MUTATION = gql`
mutation addNewPost( $data:CreatePostInput!) {
    createPost(data: $data ) {
        id
        title
    }
 }
`;