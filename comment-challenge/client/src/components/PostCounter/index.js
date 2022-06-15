import { useSubscription } from "@apollo/client";
import { Badge, Avatar } from "antd";


import styles from "./styles.module.css";
import {POST_COUNT_SUBS} from './queries'



function PostCounter(props) {



    const { loading, data } = useSubscription(POST_COUNT_SUBS)
    return (
        <div className={styles.container}>
            <Badge count={loading ? '?' : data.postCount} size="small">
                <Avatar shape="square" size="medium" >
                    <span className={styles.counterTitle}>Posts</span>
                </Avatar>
            </Badge>
        </div>
    );
}

export default PostCounter;