import React, {useEffect} from 'react';
import {Button, Comment, Divider, List} from "antd";
import styles from "./styles.module.css";

import { useLazyQuery } from '@apollo/client';
import {COMMENTS_SUBSCRIPTION, GET_POST_COMMENTS} from "./queries";

function Comments({post_id}) {
    const [btnIsVisible, setBtnIsVisible] = React.useState(true);


    const [loadComments, { called,loading, data, subscribeToMore }] = useLazyQuery(GET_POST_COMMENTS,{
        variables: {
            id:post_id,
        }
    });

    useEffect(() => {
        if (!loading && called) {
            subscribeToMore(
                {
                    document: COMMENTS_SUBSCRIPTION,
                    updateQuery: (prev, { subscriptionData }) => {
                        if (!subscriptionData.data) return prev;
                        const newCommentItem = subscriptionData.data.commentCreated;
                        return {
                            post:{
                                ...prev.post,
                                comments: [...prev.post.comments, newCommentItem]
                            }
                        }
                    }
                }
            )
        }
    }, [loading, called, subscribeToMore]);



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