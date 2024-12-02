import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from '../Home/home.module.scss';
import contact from '../Contact/contact.module.scss';
import ContactBanner from '../../components/Banner/ContactBanner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import FormSubmit from "../../components/FormSubmit/FormSubmit";
const Contact = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

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
    const contactList = [
        { title: 'Phone', content: ['+1 (650) 472 2233 (USA)', '+84 (28) 3948 4086 (Vietnam)'] },
        // { title: '', content: ['+ (84) 28 3948 4086 (Vietnam)'] },
        { title: 'General Inquiries', content: ['info@1stvirtue.com', 'info@transcendpeople.com'] },
        // { title: 'Careers:', content: ['hr@1stvirtue.com - hr@transcendpeople.com'] },
        // {
        //     title: 'Address:', content: [
        //         'First Virtue Limited Liability Company',
        //         'Transcend People Limited Liability Company',
        //         '78/2A Binh Loi, Ward 13, Binh Thanh District, Ho Chi Minh City, Vietnam.'
        //     ]
        // },
    ]

    return (
        <>
            <ContactBanner />
            <div className={home.content}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 pt-3">
                            <div className={contact.ctcContent}>
                                <div className="row">
                                    {/* <h6>
                                    Please contact our managers to learn more about how your business can make the most of business process outsourcing (BPO) solutions.
                                    Any information you provide will be kept strictly confidential. We look forward to hearing from you.
                                </h6> */}
                                    {
                                        contactList.map((contactItem, index) => {
                                            return (
                                                <div className="col-lg-4" key={index}>
                                                    <h3>{contactItem.title}</h3>
                                                    {
                                                        contactItem.content.map((contentItem, index) => {
                                                            return (
                                                                <p>{contentItem}</p>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                    <div className="col-lg-4">
                                        <h3>
                                            Our Location
                                        </h3>
                                        <a href="https://maps.app.goo.gl/5rwZTfwYciDf5qSe8" target="_blank"><FontAwesomeIcon icon={faLocationDot} /> Binh Loi address</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-6 pt-3">
                            <Iframe
                                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7664454057117!2d106.70432401515346!3d10.829177192285716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528bc115d2bfb%3A0x44aef6a404d4fbaa!2s1st%20Virtue%20Ltd.!5e0!3m2!1sen!2s!4v1679882255371!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                allowFullScreen=""
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div> */}
                    </div>
                </div>
                <FormSubmit />


            </div>
        </>
    );
}

export default Contact;