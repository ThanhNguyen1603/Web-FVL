import React, { useEffect, useState } from 'react';
import FormSubmitSolutions from '../FormSubmitSolutions/FormSubmitSolutions';
import footer from '../Footer/footer.module.scss';

const FormSubmitWrapper = () => {
    const [isFixed, setIsFixed] = useState(true);
    const [bottomOffset, setBottomOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const footerElement = document.querySelector(`.${footer.inforfooter}`); // Sử dụng đúng class SCSS
            if (!footerElement) return; // Kiểm tra nếu footer không tồn tại
            const form = document.querySelector('.form-wrapper');
            if (!form) return; // Kiểm tra nếu form không tồn tại

            const formHeight = form.offsetHeight;
            const footerTop = footerElement.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (footerTop <= windowHeight - formHeight) {
                setIsFixed(false);
                setBottomOffset(windowHeight - footerTop);
            } else {
                setIsFixed(true);
                setBottomOffset(0);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div
                        className={`form-wrapper ${isFixed ? 'fixed-form' : 'stop-at-footer'
                            }`}
                        style={{
                            bottom: isFixed ? 'auto' : `${bottomOffset}px`, // Điều chỉnh vị trí khi chạm footer
                            position: isFixed ? 'fixed' : 'absolute', // Cố định hoặc tĩnh
                            // right: '5px', // Canh phải
                            // Đặt chiều rộng cố định
                        }}>
                        <FormSubmitSolutions />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormSubmitWrapper;
