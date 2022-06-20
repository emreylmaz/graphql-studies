export const Query = {
    // Users
    users: (_,__, {db}) => db.users,
    user: (parent, args,{db}) => db.users.find((user) => user.id === args.id),

    // Posts
    posts: (_,__, {db}) => db.posts,
    post: (parent, args, {db}) => db.posts.find((post) => post.id === args.id),
    // CommentsList
    comments: (_,__, {db}) => db.comments,
    comment: (parent, args, {db}) => db.comments.find((comment) => comment.id === args.id),

}

