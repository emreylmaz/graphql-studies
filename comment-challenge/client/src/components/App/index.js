import { Row, Col } from "antd";
import {
    Switch,
    Route
} from "react-router-dom";

import styles from "./styles.module.css";
import Home from "pages/Home";
import NewPost from "pages/NewPost";
import Post from "pages/Post";
import HeaderMenu from "./HeaderMenu";


function App() {
    return (
        <div className={styles.container}>
            <Row justify="center">
                <Col span={14}  className={styles.col}>
                    <HeaderMenu />
                    <div className={styles.content} >
                    <Switch>
                        <Route path="/new" component={NewPost} />
                        <Route path="/post/:id" component={Post} />
                        <Route path="/" component={Home} />
                    </Switch>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default App;