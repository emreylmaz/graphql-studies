import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    fullName: {
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    profile_photo:{
        type: String,
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post',
        },
    ],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment',
        }
    ]
});

export default mongoose.model("User", UserSchema);