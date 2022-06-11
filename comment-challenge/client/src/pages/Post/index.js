import React from 'react';
import styles from './styles.module.css';
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {GET_POST} from "./queries";
import Loading from "components/Loading";

import {Typography,Image} from "antd";
import Comments from "./Comments";

const {Title} = Typography;

function Post() {
    const {id} = useParams();

    const {data, loading, error} = useQuery(GET_POST, {
        variables: {
            id,
        }
    });

    if (loading){
        return <Loading/>
    }

    if (error){
        return <div>Error!: {error.message}</div>
    }


    console.log(data)

    const {post} = data;

    return (
        <div>
            <Title level={3}>{post.title}</Title>
            <Image src={post.cover} alt="cover" />
            <div className={styles.description}>{post.description}</div>


            <Comments post_id={id}/>
        </div>
    );
}

export default Post;
