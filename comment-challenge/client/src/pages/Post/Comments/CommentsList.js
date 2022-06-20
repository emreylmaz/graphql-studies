import { Divider, Button } from 'antd';
import { Comment, List } from 'antd';
import styles from './styles.module.css';
import { useLazyQuery } from '@apollo/client'
import { GET_POST_COMMENTS, COMMENTS_SUBSCRIPTIONS } from '../queries';
import { useEffect, useState } from 'react';
import NewCommentForm from "./NewCommentForm";

function CommentsList({ post_id }) {
    const [btnIsVisible, setBtnIsVisible] = useState(true);

    const [loadComments, { called, loading, data, subscribeToMore }] = useLazyQuery(GET_POST_COMMENTS, {
        variables: { id: post_id },
    });

    useEffect(() => {
        if(!loading && called) {
            subscribeToMore({
                document: COMMENTS_SUBSCRIPTIONS,
                updateQuery: (prev, { subscriptionData }) => {
                    if(!subscriptionData.data) return prev;

                    const newCommentItem = subscriptionData.data.commentCreated;

                    return {
                        post: {
                            ...prev.post,
                            comments: [
                                ...prev.post.comments,
                                newCommentItem
                            ],
                        }
                    }
                }
            })
        }
    }, [loading, called, subscribeToMore])


    useEffect(() => {
        if(!loading && data) {
            setBtnIsVisible(false);
        }
    }, [loading, data]);

    return (
        <>
            <Divider orientation="left" >Comments</Divider>
            <div className={styles.showCommentsBtnContainer}>
                {
                    btnIsVisible && <Button onClick={() => loadComments()}>Show Comments</Button>
                }
            </div>
            {
                !loading && data &&
                <>
                    <List
                        className="comment-list"
                        // header={`${data.length} replies`}
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
                    <Divider orientation="left">New Comment</Divider>
                    <NewCommentForm />
                </>
            }
        </>

    )
}

export default CommentsList