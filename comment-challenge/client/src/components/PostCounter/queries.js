import { gql } from '@apollo/client';

export const POST_COUNT_SUBS = gql`
    subscription postCount {
        postCount
    }
`;