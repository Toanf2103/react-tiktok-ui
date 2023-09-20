import Header from '@/components/Layout/components/Header';
import Sidebar from '@/components/Layout/DefaultLayout/Sidebar';

import classNames from 'classnames/bind';
import styles from '@/components/Layout/DefaultLayout/DefaultLayout.module.scss';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('container')}>
                <Sidebar></Sidebar>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
