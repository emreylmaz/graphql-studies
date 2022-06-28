
export const Post = {
    user: async (parent,__,{_db}) => await _db.User.findById(parent.user),
    comments: async (parent,__,{_db}) => await _db.Comment.find({post:parent.id}),
};

