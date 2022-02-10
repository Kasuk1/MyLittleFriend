import React from 'react';
import { Spin } from 'antd';

export const SpinLoading = ({ text, children }) => {
    return (
        <Spin size="large"
            className='spin-loading'
            tip={text}
        >
            {children}
        </Spin>
    );
};
