import { Row, Col } from "antd";
import { List, Avatar, Skeleton } from "antd";


import styles from "./styles.module.css";

const data = [
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Edward",
            last: "Cooper",
        },
        email: "edward.cooper@example.com",
        picture: {
            large: "https://randomuser.me/api/portraits/men/89.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/89.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/89.jpg",
        },
        nat: "NZ",
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Marshall",
            last: "Erikson",
        },
        email: "dasurh.urgod@example.com",
        picture: {
            large: "https://randomuser.me/api/portraits/men/81.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/81.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/81.jpg",
        },
        nat: "NZ",
    },
];
function App() {
    return (
        <div className={styles.container}>
            <Row justify="center">
                <Col span={14} className={styles.content}>
                    <List
                        className="demo-loadmore-list"
                        loading={false}
                        itemLayout="horizontal"
                        //loadMore={loadMore}
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item>
                                <Skeleton avatar title={false} loading={item.loading} active>
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.picture.large} />}
                                        title={<a href="https://ant.design">{item.name?.last}</a>}
                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    />
                                </Skeleton>
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default App;