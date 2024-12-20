import formSubmitStyle from './formsubmit.module.scss'
import { useState, useEffect, useRef } from "react";
import home from "../../pages/Home/home.module.scss"
const FormSubmit = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const wrapperRef = useRef(null);
    useEffect(() => {
        if (wrapperRef.current && wrapperRef.current.parentElement) {
            const parentClassList = wrapperRef.current.parentElement.classList;
            // Kiểm tra class compile từ home.module.scss
            if (parentClassList.contains(home.content)) {
                wrapperRef.current.style.backgroundColor = "#fff"; // Nền đỏ nếu là home.content
            } else {
                wrapperRef.current.style.backgroundColor = "#232730"; // Nền đen nếu không phải
            }
        }
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault(); // Ngăn chuyển hướng mặc định
        setSuccessMessage("");
        setErrorMessage("");

        const formData = new FormData(e.target); // Thu thập dữ liệu form
        try {
            const response = await fetch(
                "https://docs.google.com/forms/d/e/1FAIpQLSeky-6YPNpR0Dy251p_ziReQlCGG_6_jq5TAc1D_XVUWtRjxg/formResponse",
                {
                    method: "POST",
                    body: formData,
                    mode: "no-cors", // Google Forms không hỗ trợ CORS
                }
            );

            if (response.ok || response.status === 0) {
                // Thành công
                setSuccessMessage("Your submission has been sent successfully!");
                e.target.reset(); // Reset form
            } else {
                throw new Error("Failed to submit. Please try again later.");
            }
        } catch (error) {
            setErrorMessage(error.message || "An error occurred. Please try again.");
        }
    };
    return (
        <>
            <div ref={wrapperRef} className={formSubmitStyle.wrapper}>
                <div className="container pt-3 pb-3">
                    <div className="row">
                        <div className="col-lg-12">
                            <form onSubmit={handleSubmit}>

                                <div className={formSubmitStyle.ctcContent}>
                                    <h3>We love to hear from you</h3>
                                    <h5>We appreciate your interest in us. Please submit your questions below.</h5>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                name="entry.1118792528"
                                                placeholder="Name*"
                                                className={formSubmitStyle.ctcInput}
                                                required
                                            />
                                            <br />
                                            <input
                                                type="text"
                                                name="entry.1090082395"
                                                placeholder="Organization*"
                                                className={formSubmitStyle.ctcInput}
                                                required
                                            />
                                            <br />
                                            <input
                                                type="text"
                                                name="entry.2137226694"
                                                placeholder="Region*"
                                                className={formSubmitStyle.ctcInput}
                                                required
                                            />
                                            <br />
                                        </div>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                name="entry.798698470"
                                                placeholder="Email*"
                                                className={formSubmitStyle.ctcInput}
                                                required
                                            />
                                            <br />
                                            <input
                                                type="text"
                                                name="entry.2065993141"
                                                placeholder="Contact Number*"
                                                className={formSubmitStyle.ctcInput}
                                                required
                                            />
                                            <br />
                                            <input
                                                type="text"
                                                name="entry.944157045"
                                                placeholder="Inquiry Type*"
                                                className={formSubmitStyle.ctcInput}
                                                required
                                            />
                                            <br />
                                        </div>
                                    </div>
                                    <textarea
                                        type="text"
                                        name="entry.105227074"
                                        placeholder="Message"
                                        className={formSubmitStyle.ctcInput}
                                    ></textarea>
                                    <br />
                                    <button type="submit" className={formSubmitStyle.ctcButton}>
                                        Submit
                                    </button>
                                    {successMessage && (
                                        <div className="alert alert-success mt-3">
                                            {successMessage}
                                        </div>
                                    )}
                                    {errorMessage && (
                                        <div className="alert alert-danger mt-3">
                                            {errorMessage}
                                        </div>
                                    )}
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}
export default FormSubmit