
export const Post = {
    user: async (parent,__,{_db}) => await _db.User.findById(parent.user),
    comments: (parent,__,{db}) => db.comments.filter((comment) => comment.post_id === parent.id)
};

