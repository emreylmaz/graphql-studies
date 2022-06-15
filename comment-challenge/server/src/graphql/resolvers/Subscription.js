import {withFilter}  from "graphql-yoga";
export const Subscription = {
    userCreated:  {
        subscribe: (parent,args, {pubsub}) => pubsub.asyncIterator('userCreated')

    },
    userUpdated:  {
        subscribe: (parent,args, {pubsub}) => pubsub.asyncIterator('userUpdated')

    },
    userDeleted:  {
        subscribe: (parent,args, {pubsub}) => pubsub.asyncIterator('userDeleted')

    },

    // POST
    postCreated:  {
        subscribe: withFilter(
            (parent,args, {pubsub}) => pubsub.asyncIterator('postCreated'),
            (payload,variables) => {
                console.log('payload', payload);
                console.log('variables', variables);
                return variables.user_id ? payload.postCreated.user_id === variables.user_id : true;
            }
        ),

    },
    postUpdated:  {
        subscribe: (parent,args, {pubsub}) => pubsub.asyncIterator('postUpdated')

    },
    postDeleted:  {
        subscribe: (parent,args, {pubsub}) => pubsub.asyncIterator('postDeleted')

    },
    postCount:  {
        subscribe: (parent,args, {pubsub}) => pubsub.asyncIterator('postCount')
    },

    // COMMENT
    commentCreated:  {
        subscribe: withFilter(
            (parent,args, {pubsub}) => pubsub.asyncIterator('commentCreated'),
            (payload,variables) => {

                return variables.post_id ? payload.commentCreated.post_id === variables.post_id : true;
            }
        ),

    },
    commentUpdated:  {
        subscribe: (parent,args, {pubsub}) => pubsub.asyncIterator('commentUpdated')

    },
    commentDeleted:  {
        subscribe: (parent,args, {pubsub}) => pubsub.asyncIterator('commentDeleted')

    },
};

