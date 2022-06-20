import { gql } from '@apollo/client';

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
// Maalesef fragment kullanımı burada hata veriyor. Subscription ile ilgili bir sorun var. Bu sorunu çözmek için fragment kullanımını kaldırmalıyız.
// TODO: Subscription ile ilgili bir sorun var. Bunu bir kontrol edelim daha sonra emrejim :) .
const commentsFragment = gql`
    fragment CommentsFragment on Comment{
        id
        text
        user{
            fullName
            profile_photo
        }
    }
`

export const GET_POST_COMMENTS = gql`
    query getComments($id: ID!){
        post(id: $id){
            comments{
                ...CommentsFragment
            }
        }
    }
    ${commentsFragment}
`;

export const COMMENTS_SUBSCRIPTIONS = gql`
    subscription CommentCreated($post_id: ID) {
        commentCreated(post_id: $post_id) {
            ...CommentsFragment
        }
    }
    ${commentsFragment}
`;