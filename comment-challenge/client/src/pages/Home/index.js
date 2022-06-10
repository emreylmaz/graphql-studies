import React from 'react';
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
                                title={<a href="https://ant.design">{item.title}</a>}
                                description={item.description}
                            />
                    </List.Item>
                )}
            />
        </div>
    );
}

export default Home;