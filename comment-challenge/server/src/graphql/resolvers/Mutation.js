import {nanoid} from 'nanoid';

export const Mutation = {
    //User
    createUser: (parent, {data},{pubsub, db }) => {
        const user = {
            id: nanoid(),
            fullName: data.fullName,
            age: data.age,
        };
        db.users.push(user);
        pubsub.publish('userCreated', { userCreated :user})
        return user;
    },
    updateUser: (parent, {id, data}, {pubsub, db }) => {
        const user_index = db.users.findIndex(user => user.id === id);

        if (user_index === -1) {
            throw new Error('User not found');
        }

        const updated_user = db.users[user_index] = {
            ...db.users[user_index],
            ...data,
        };

        pubsub.publish('userUpdated', { userUpdated:updated_user})

        return updated_user;
    },
    deleteUser: (parent, {id}, {pubsub,db}) => {
        const user_index = db.users.findIndex(user => user.id === id);

        if (user_index === -1) {
            throw new Error('User not found');
        }

        const deleted_user = db.users.splice(user_index, 1);

        pubsub.publish('userDeleted', { userDeleted:deleted_user[0]})

        return deleted_user[0];
    },
    deleteAllUsers: (parent, args, {db}) => {
        const length = db.users.length;
        db.users.splice(0, length);

        return {
            count: length,
        };
    },
    //Post
    createPost: (parent, {data},{pubsub, db}) => {
        const post = {
            id: nanoid(),
            title: data.title,
            user_id: data.user_id,
        };
        db.posts.push(post);
        pubsub.publish('postCreated', { postCreated :post})
        return post;
    },
    updatePost: (parent, {id, data},{pubsub, db}) => {
        const post_index = db.posts.findIndex(post => post.id === id);

        if (post_index === -1) {
            throw new Error('Post not found');
        }

        const updated_post = db.posts[post_index] = {
            ...db.posts[post_index],
            ...data,
        };
        pubsub.publish('postUpdated', { postUpdated :updated_post})
        return updated_post;
    },
    deletePost: (parent, {id},{pubsub, db}) => {
        const post_index = db.posts.findIndex(post => post.id === id);

        if (post_index === -1) {
            throw new Error('Post not found');
        }

        const deleted_post = db.posts.splice(post_index, 1);
        pubsub.publish('postDeleted', { postDeleted :deleted_post[0]})
        return deleted_post[0];
    },
    deleteAllPosts: (parent, args, {db}) => {
        const length = db.posts.length;
        db.posts.splice(0, length);

        return {
            count: length,
        };
    },


    //Comment
    createComment: (parent, {data},{pubsub, db}) => {
        const comment = {
            id: nanoid(),
            text: data.text,
            user_id: data.user_id,
            post_id: data.post_id,
        };
        db.comments.push(comment);
        pubsub.publish('commentCreated', { commentCreated :comment})
        return comment;
    },
    updateComment: (parent, {id, data},{pubsub, db}) => {
        const comment_index = db.comments.findIndex(comment => comment.id === id);

        if (comment_index === -1) {
            throw new Error('Post not found');
        }

        const updated_comment = db.comments[comment_index] = {
            ...db.comments[comment_index],
            ...data,
        }
        pubsub.publish('commentUpdated', { commentUpdated :updated_comment})
        return updated_comment;
    },
    deleteComment: (parent, {id},{pubsub, db}) => {
        const comment_index = db.comments.findIndex(post => post.id === id);

        if (comment_index === -1) {
            throw new Error('Post not found');
        }

        const deleted_comment = db.comments.splice(comment_index, 1);
        pubsub.publish('commentDeleted', { commentDeleted :deleted_comment})
        return deleted_comment[0];
    },
    deleteAllComments: (parent, args, {db}) => {
        const length = db.comments.length;
        db.comments.splice(0, length);

        return {
            count: length,
        };
    },
};

