import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/199ab14d0081866cfe1c965fc876f29d~c5_300x300.webp?x-expires=1695373200&x-signature=pr7MVSnNFHvMtlltuLcMl8p5%2B7s%3D"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Toan</span>
                    <FontAwesomeIcon className={cx('info-icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Toanf2103</span>
            </div>
        </div>
    );
}

export default AccountItem;
