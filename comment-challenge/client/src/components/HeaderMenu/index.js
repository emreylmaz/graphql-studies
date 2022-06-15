import { Menu } from "antd";
import { HomeFilled, PlusSquareOutlined} from '@ant-design/icons';

import { Link } from "react-router-dom";

import styles from './styles.module.css';

function HeaderMenu() {
    return (
        <Menu mode="horizontal" className={styles.HeaderMenu} defaultSelectedKeys={['home']}>
            <Menu.Item key="home" icon={<HomeFilled />}>
                Home <Link to='/'></Link>
            </Menu.Item>
            <Menu.Item key="new" icon={<PlusSquareOutlined />}>
                New Post <Link to='/new'></Link>
            </Menu.Item>

        </Menu>
    )
}

export default HeaderMenu;