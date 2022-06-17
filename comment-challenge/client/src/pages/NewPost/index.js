import React from 'react';
import {Typography} from "antd";
import NewPostForm from "./NewPostForm";
const {Title} = Typography;

function NewPost() {
    return (
        <div>
            <Title level={3}>New Post</Title>
            <NewPostForm />
        </div>

    );
}

export default NewPost;