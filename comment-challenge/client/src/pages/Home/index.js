import React from 'react';
import {Link} from 'react-router-dom';
import styles from './styles.module.css';
import {Avatar, List} from "antd";
import {  useQuery } from '@apollo/client';
import Loading from "components/Loading";
import {GET_POSTS} from "./queries";



function Home() {
    const { loading, error, data } = useQuery(GET_POSTS);

    if (loading){
        return <Loading/>
    }

    if (error){
        return <div>Error!: {error.message}</div>
    }

    console.log(data);
    return (
        <div>
            <List
                className="demo-loadmore-list"
                loading={false}
                itemLayout="horizontal"
                //loadMore={loadMore}
                dataSource={data.posts}
                renderItem={(item) => (
                    <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src={item.user.profile_photo} />}
                                title={<Link to={`/post/${item.id}`} className={styles.listTitle} >{item.title}</Link>}
                                description={<Link to={`/post/${item.id}`} className={styles.listItem}>{item.short_description}</Link>}
                            />
                    </List.Item>
                )}
            />
        </div>
    );
}

export default Home;