export const Query = {
    // Users
    users: async (_,__, {_db}) => {
        const users = await _db.User.find();
        return users;
    },
    user: async (parent, args,{_db}) => {
        // db.users.find((user) => user.id === args.id)
        const user = await _db.User.findById( args.id );
        return user ;
    },

    // Posts
    posts: async (_, __, { _db }) => {
        const posts = await _db.Post.find();
        return posts;
    },
    post: async (_, args, { _db }) => {
        const post = await _db.Post.findById(args.id);
        return post;
    },
    // CommentsList
    comments: async (_, __, { _db }) => {
        const comments = await _db.Comment.find();
        return comments;
    },
    comment: async (_, args, { _db }) => {
        const comment = await _db.Comment.findById(args.id);
        return comment;
    },

}

