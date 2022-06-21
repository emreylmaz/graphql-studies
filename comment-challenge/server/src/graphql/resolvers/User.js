
export const User = {
    posts: async (parent,__,{_db}) => await _db.Post.find({user:parent.id}),
    comments: (parent,__,{db}) => db.comments.filter((comment) => comment.user_id === parent.id)
};
