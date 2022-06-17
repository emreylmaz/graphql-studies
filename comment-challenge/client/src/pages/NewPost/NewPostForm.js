import {Button, Form, Input, Select} from "antd";

import React from 'react';
import TextArea from "antd/es/input/TextArea";
const {Option} = Select;

function NewPostForm() {
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
                        placeholder="Select your user"
                        size="large"
                        allowClear
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                    </Select>
                </Form.Item>



                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default NewPostForm;