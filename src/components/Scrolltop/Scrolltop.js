import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTop = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn về đầu trang
    }, [location]); // Mỗi khi location thay đổi

    return null; // Component này không hiển thị gì
};

export default ScrollTop;
