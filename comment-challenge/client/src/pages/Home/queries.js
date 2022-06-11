import {gql} from "@apollo/client";

export const GET_POSTS = gql`
    query getAllPosts{
        posts{id title short_description user{profile_photo}}
    }
`;
