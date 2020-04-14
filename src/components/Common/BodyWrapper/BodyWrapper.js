import React from 'react';
import styles from './_bodyWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const BodyWrapper = ({children}) => (
  <div className={cx('body-wrapper')}>
    {children}
  </div>
);

export default BodyWrapper;
