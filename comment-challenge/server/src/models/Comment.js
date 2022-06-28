import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
    }
});

export default mongoose.model('Comment', CommentSchema);