
export const Comment = {
    user: (parent, __,{db}) => db.users.find((user) => user.id === parent.user_id),
    post: (parent,__, {db}) => db.posts.find((post) => post.id === parent.post_id)
};

