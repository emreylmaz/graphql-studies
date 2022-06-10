import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import styles from './styles.module.css';



function Loading() {
    const antIcon = (
        <LoadingOutlined
            style={{
                fontSize: 32,
                color: '#1890ff',
            }}
            spin
        />
    );


    return (
        <div className={styles.loading}>
        <Spin indicator={antIcon} />
        </div>
    );
}

export default Loading;