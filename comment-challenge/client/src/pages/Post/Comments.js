import React from 'react';
import {Button, Comment, Divider, List} from "antd";
import styles from "./styles.module.css";

import { useLazyQuery } from '@apollo/client';
import {GET_POST_COMMENTS} from "./queries";

function Comments({post_id}) {
    const [btnIsVisible, setBtnIsVisible] = React.useState(true);


    const [loadComments, { loading, data }] = useLazyQuery(GET_POST_COMMENTS,{
        variables: {
            id:post_id,
        }
    });


    React.useEffect(() => {
        if (!loading && data) {
            setBtnIsVisible(false);
        }
    }, [loading, data]);

    return (
        <>
            <Divider>Comments</Divider>

            {
                btnIsVisible && (
                    <div className={styles.showCommentsBtnContainer}>
                        <Button loading={loading} onClick={() => loadComments()}>Show Comments</Button>
                    </div>
                )
            }

            {
                !loading && data && (
                    <List
                        className="comment-list"
                        itemLayout="horizontal"
                        dataSource={data.post.comments}
                        renderItem={item => (
                            <li>
                                <Comment
                                    author={item.user.fullName}
                                    avatar={item.user.profile_photo}
                                    content={item.text}
                                />
                            </li>
                        )}
                    />
                )
            }
        </>
    );
}

export default Comments;