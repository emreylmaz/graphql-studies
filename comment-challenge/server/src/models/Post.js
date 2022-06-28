import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    short_description: String,
    cover: String,
    user: {
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment',
        }
    ]
});

export default mongoose.model('Post', PostSchema);