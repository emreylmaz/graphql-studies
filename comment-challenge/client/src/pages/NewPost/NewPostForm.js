import {Button, Form, Input, Select} from "antd";
import styles from "./styles.module.css";
import React from 'react';
import TextArea from "antd/es/input/TextArea";
import {useQuery} from "@apollo/client";
import {GET_USERS} from "./queries";
const {Option} = Select;

function NewPostForm() {

    const {data:users_data, loading:get_users_loading} = useQuery(GET_USERS);



    return (
        <div>
            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}
                //onFinish={onFinish}
                //onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="Title"
                >
                    <Input  size="large" placeholder="Title" />
                </Form.Item>

                <Form.Item

                    name="shortDescription"
                >
                    <Input size="large" placeholder="Short Description" />

                </Form.Item>

                <Form.Item

                    name="Description"
                >
                    <TextArea size="large" placeholder="Description" />

                </Form.Item>

                <Form.Item

                    name="Cover"
                >
                    <Input size="large" placeholder="Cover" />

                </Form.Item>

                <Form.Item
                    name="user"
                    rules={[
                        {
                            required: true,
                            message: 'Please select user!'
                        },
                    ]}
                >
                    <Select
                        disabled={get_users_loading}
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
                    <Button size="large" type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default NewPostForm;