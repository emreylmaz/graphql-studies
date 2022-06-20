import React from 'react';
import {Button, Form, Input, Row, Select,Col} from "antd";
import styles from "./styles.module.css";
import {GET_USERS} from "./queries";
import {useQuery} from "@apollo/client";

const {Option} = Select;

function NewCommentForm(props) {
    const {data:users_data, loading:get_users_loading} = useQuery(GET_USERS);

    const handleSubmit = async (values) => {
        console.log(values);
    }

    return (
        <Form
            name="basic"
            onFinish={handleSubmit}
            autoComplete="off"
        >
            <Row gutter = { 24 } >

                <Col span={10}>

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
                            disabled={get_users_loading }
                            loading={get_users_loading}
                            placeholder="Select your user"
                            size="middle"
                            allowClear
                        >
                            {
                                users_data && users_data.users.map((item) => <Option key={item.id} value={item.id}>{item.fullName}</Option>)
                            }
                        </Select>
                    </Form.Item>

                </Col>

                <Col span={14}>
                    <Form.Item
                        name="text"
                        rules={[{required: true, message: 'Please enter a message!'}]}
                    >
                        <Input   size="middle" placeholder="Message" />
                    </Form.Item>
                </Col>


            </Row >

            <Form.Item className = { styles.buttons } >
            <Button size = " large " type = " hidden " htmlType = " submit " >
                Submit
            </Button >
            </Form.Item >

        </Form>
    );
}

export default NewCommentForm;