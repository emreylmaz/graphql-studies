
export const User = {
    posts: async (parent,__,{_db}) => await _db.Post.find({user:parent.id}),
    comments: async (parent,__,{_db}) => await _db.Comment.find({user:parent.id}),
};
