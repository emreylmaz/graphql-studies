import {nanoid} from 'nanoid';
import pubsub from "../../pubsub";

export const Mutation = {
    //User
    createUser: async (parent, {data},{pubsub, _db }) => {

        const newUser = new _db.User({
            ...data,
        });

        const user = await newUser.save();

        pubsub.publish('userCreated', { userCreated :user})
        return user;
    },
    updateUser: async (parent, {id, data}, {pubsub, _db }) => {
        const is_user_exist = await _db.User.findById(id);

        if (!is_user_exist) {
            throw new Error('User not found');
        }

        const updated_user = await _db.User.findByIdAndUpdate(id, data, {new: true});

        pubsub.publish('userUpdated', { userUpdated:updated_user})

        return updated_user;
    },
    deleteUser: async (parent, {id}, {pubsub,_db}) => {
        const is_user_exist = await _db.User.findById(id);

        if (!is_user_exist) {
            throw new Error('User not found');
        }

        const deleted_user = await _db.User.findByIdAndDelete(id);

        pubsub.publish('userDeleted', { userDeleted:deleted_user})

        return deleted_user;
    },
    deleteAllUsers: (parent, args, {_db}) => {
        const deleted_users = _db.User.deleteMany({});

        return {
            count: deleted_users.deletedCount,
        };
    },
    //Post
    createPost: (parent, {data},{pubsub, db}) => {
        const post = {
            id: nanoid(),
            title: data.title,
            user_id: data.user_id,
            short_description: data.short_description,
            cover: data.cover,
            description: data.description,
        };
        db.posts.unshift(post);
        pubsub.publish('postCreated', { postCreated :post})
        pubsub.publish('postCount', {postCount: db.posts.length })
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
        pubsub.publish('postCount', {postCount: db.posts.length })
        return deleted_post[0];
    },
    deleteAllPosts: (parent, args, {db}) => {
        const length = db.posts.length;
        db.posts.splice(0, length);

        pubsub.publish('postCount', {postCount: db.posts.length })

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

