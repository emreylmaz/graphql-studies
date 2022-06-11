import {gql} from "@apollo/client";

export const GET_POST = gql`
    query getPost($id: ID!) {
        post(id: $id){
            id
            title
            description
            cover
        }
    }
`;
