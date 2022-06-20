import {useRef} from 'react';
import {Button, Form, Input, Select, message} from "antd";
import styles from "./styles.module.css";
import {GET_USERS,CREATE_COMMENT_MUTATION} from "./queries";
import {useQuery, useMutation} from "@apollo/client";

const {Option} = Select;

function NewCommentForm({post_id}) {
    const[createComment,{loading}] = useMutation(CREATE_COMMENT_MUTATION);
    const {data:users_data, loading:get_users_loading} = useQuery(GET_USERS);

    const formRef = useRef();

    const handleSubmit = async (values) => {
        try {
            await createComment({variables:{
                data: {...values, post_id: post_id}
            }});

            message.success('Comment add successfully');
            formRef.current.resetFields();
        }catch (e){
            console.log(e)

            message.error('Comment not saved!');
        }
    }

    return (
        <Form
            name="basic"
            onFinish={handleSubmit}
            autoComplete="off"
            ref={formRef}
        >


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
                            size="middle"
                            allowClear
                        >
                            {
                                users_data && users_data.users.map((item) => <Option key={item.id} value={item.id}>{item.fullName}</Option>)
                            }
                        </Select>
                    </Form.Item>




                    <Form.Item
                        disabled={loading}
                        name="text"
                        rules={[{required: true, message: 'Please enter a message!'}]}
                    >
                        <Input   size="middle" placeholder="Message" />
                    </Form.Item>


            <Form.Item  className = { styles.buttons } >
            <Button disabled={loading} size = " large " type = "primary " htmlType = " submit " >
                Submit
            </Button >
            </Form.Item >

        </Form>
    );
}

export default NewCommentForm;