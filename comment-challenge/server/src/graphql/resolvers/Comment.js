
export const Comment = {
    user: async (parent, __,{_db}) => await _db.User.findById(parent.user),
    post: async (parent,__, {_db}) => await _db.Post.findById(parent.post),
};

