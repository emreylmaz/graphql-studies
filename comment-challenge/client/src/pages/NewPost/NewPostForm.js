import {Button, Form, Input, Select,message} from "antd";
import styles from "./styles.module.css";
import React from 'react';
import {useHistory} from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import {useQuery, useMutation} from "@apollo/client";
import {GET_USERS, NEW_POST_MUTATION} from "./queries";
const {Option} = Select;

function NewPostForm() {
    const history = useHistory();

    const [savePost,{loading}] = useMutation(NEW_POST_MUTATION);

    const {data:users_data, loading:get_users_loading} = useQuery(GET_USERS);


    const handleSubmit = async (values) => {
        try {
            await savePost({variables:{data: values}});

            message.success('Post created successfully');
            history.push("/");
        }catch (e){
            console.log(e)

            message.error('Post not saved!');
        }
    }


    return (
        <div>
            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={handleSubmit}
                //onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="title"
                    rules={[{required: true, message: 'Please input your title!'}]}
                >
                    <Input  disabled={loading} size="large" placeholder="Title" />
                </Form.Item>

                <Form.Item


                    name="short_description"
                >
                    <Input disabled={loading} size="large" placeholder="Short Description" />

                </Form.Item>

                <Form.Item

                    name="description"
                >
                    <TextArea disabled={loading} size="large" placeholder="Description" />

                </Form.Item>

                <Form.Item

                    name="cover"
                >
                    <Input disabled={loading} size="large" placeholder="Cover" />

                </Form.Item>

                <Form.Item
                    name="user_id"
                    rules={[
                        {
                            required: true,
                            message: 'Please select user!'
                        },
                    ]}
                >
                    <Select
                        disabled={get_users_loading || loading}
                        loading={get_users_loading}
                        placeholder="Select your user"
                        size="large"
                        allowClear
                    >
                        {
                            users_data && users_data.users.map((item) => <Option key={item.id} value={item.id}>{item.fullName}</Option>)
                        }
                    </Select>
                </Form.Item>



                <Form.Item  className={styles.buttons}>
                    <Button disabled={loading} size="large" type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default NewPostForm;