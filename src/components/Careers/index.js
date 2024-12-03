import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCalendar, faLocationDot, faEnvelope, faPen } from "@fortawesome/free-solid-svg-icons";
import hiringDataProcessingImage from '../../Image/Careers/hiring_dataProcessing.png'
import nhanvienhanhchinhImage from '../../Image/Careers/nhanvienhanhchinhposter.jpg'
import ketoannoiboImage from '../../Image/Careers/ketoannoibo.jpg'
import Realtime from "../RealTime/realtime";
const CareersList = [
    {
        image: <img src={hiringDataProcessingImage} alt='Hiring Data Processing' />,
        jobName: 'Data Processing Staff',
        hashtag: 'VN & PH | Fulltime',
        address: '78/2A Binh Loi, Ward 13, Binh Thanh District, Ho Chi Minh City, Vietnam.',
        datePublish: <Realtime />,
        description: [
            {
                title: "Job Mission",
                content: ["Receive records, photos, documents, and requests from customers.",
                    "Processing information, Key/VR/RS/Preqc and accurately extracting information according to customer requirements.",
                    "Enter the extracted information on the customer's system.",
                    "Report work at the request of the Team Leader.",
                    "Perform other jobs as assigned by the Team Leader."],

            },
            {
                title: "Responsibility",
                content: [
                    "Collaborate with colleagues and Team Leader to complete Team tasks.",
                    "Properly and fully implement the duties as prescribed by the Company to ensure timely, efficient, and professional.",
                    "Sign information security agreements before accessing the information systems of the Company, which specifically provide for information security.",
                    "All company policies/standards/regulations must be followed.",
                    "Complete reports as required by the Team Leader."
                ],
            },
            {
                title: "Benefits",
                content: [
                    "Pay social insurance, unemployment insurance, health insurance and the benefits in accordance with the Labor Law.",
                    "Opportunity to learn and improve ENGLISH skills.",
                    "Professional, young and friendly working environment.",
                    "Be trained and guided enthusiasm in order to be prompt to work effectively."
                ],
            },
            {
                title: "Required Knowledge and Skills",
                content: [
                    "No experience is required, staff will receive training at the start of the job.",
                    "Graduated from high school / vocational school, no specialization required.",
                    "Basic computer skills, fast typing skills.",
                    "Basic English skills in listening, speaking, reading, and writing.",
                    "Hard-working, careful, and have the spirit of learning and progress at work."
                ]
            },
            {
                title: 'Work Address',
                content: [
                    "78/2A Binh Loi, Ward 13, Binh Thanh District, Ho Chi Minh City, Vietnam.",
                    "hr@1stvirtue.com - hr@transcendpeople.com"
                ]
            }
        ],
        iconContent: <FontAwesomeIcon icon={faCircle} />,
        icontitle: <FontAwesomeIcon icon={faPen} />,
        iconCalendar: <FontAwesomeIcon icon={faCalendar} />,
        iconAddress: <FontAwesomeIcon icon={faLocationDot} />,
        iconEmail: <FontAwesomeIcon icon={faEnvelope} />
    },
    {
        image: <img src={nhanvienhanhchinhImage} alt='Nhan Vien Hanh Chinh' />,
        jobName: 'Nhân Viên Nhân Sự Tổng Hợp - C&B',
        address: '78/2A Binh Loi, Ward 13, Binh Thanh District, Ho Chi Minh City, Vietnam.',
        hashtag: 'HCMC | Fulltime',
        datePublish: <Realtime />,
        description: [
            {
                title: "Mô tả công việc:",

                content: [
                    "Kiểm tra, giám sát việc chấm công và thực hiện nội quy lao động về giờ giấc làm việc của toàn bộ nhân viên. Quản lý chế độ về nghỉ phép, nghỉ bù, tăng ca và các chế độ khác theo nội quy, quy định của công ty.",
                    "Đảm bảo nhân viên tuân thủ nội quy lao động; Thiết lập và Phát triển quan hệ lao động, cũng như hướng dẫn, giải đáp mọi thắc mắc cho nhân viên về quyền lợi, chính sách, xử lý khen thưởng - kỷ luật lao động. Báo cáo công tác quản lý nhân sự hàng tuần, hàng tháng.",
                    "Cập nhật các quy định của pháp luật về chế độ, chính sách, lương, kịp thời bổ sung, sửa đổi chế độ, chính sách của công ty phù hợp với quy định của pháp luật.",
                    "Tổ chức lưu trữ, sắp xếp, cập nhật và bảo quản hồ sơ nhân sự.",
                    "Thực hiện tăng giảm, chế độ BHXH, BHYT, BHTN cho người lao động. Đối chiếu số liệu với cơ quan BHXH hàng tháng. Hoàn thiện các hồ sơ, thủ tục theo đúng quy định.",
                    "Thực hiện các báo cáo nhân sự, đăng ký với cơ quan nhà nước theo quy định.",
                    "Giải quyết thôi việc cho nhân viên theo đúng quy định của pháp luật.",
                    "Thuế TNCN: làm thủ tục đăng ký thuế cho nhân viên, ủy quyền quyết toán thuế.",
                    "Tham gia thiết lập công cụ đo lường và tiêu chí đánh giá, Tổ chức đo lường và đánh giá hiệu quả công việc (KPIs), Tổng hợp kết quả đánh giá, Tham gia phân tích kết quả & đề xuất ý kiến cải thiện.",
                    "Hỗ trợ các công tác tuyển dụng nhân sự khi có yêu cầu.",
                    "Phối hợp giám sát dịch vụ Vệ sinh, Bảo vệ hàng ngày.",
                    "Phối hợp tổ chức các sự kiện nội bộ của công ty.",
                    "Các công việc khác theo sự sắp xếp của cấp trên."
                ],

            },
            {
                title: "Yêu cầu ứng viên: ",
                content: [
                    "Tối thiểu 2 năm làm việc tại vị trí nhân viên C&B, chuyên viên C&B hoặc các vị trí tương đương.",
                    "Kiến thức về chính sách, pháp luật lao động và các quy định liên quan đến nhân sự.",
                    "Thành thạo tin học văn phòng, đặc biệt Excel.",
                    "Nhanh nhẹn, giao tiếp tốt, có thể giao tiếp bằng tiếng Anh là một lợi thế.",
                    "Khả năng giải quyết vấn đề tốt.",
                    "Bảo mật thông tin, trung thực và cẩn thận.",
                ],
            },

            {
                title: "Phúc lợi:",
                content: [
                    "Tiền lương: từ 12.000.000, thỏa thuận theo năng lực.",
                    "Thưởng hiệu quả KPI hàng tháng, thưởng cuối năm theo năng lực.",
                    "Phúc lợi theo luật lao động.",
                    "Nâng cao kỹ năng tiếng Anh, kỷ luật, chuyên nghiệp.",
                    "Môi trường năng động, có cơ hội thăng tiến.",
                    "Tham gia xây dựng đội ngũ, đào tạo lãnh đạo."
                ],
            },
            {
                title: "Địa chỉ làm việc:",
                content: [
                    "Văn phòng: 78/2A Bình Lợi, P. 13, Q. Bình Thạnh, TP. HCM",
                ]
            },
            {
                title: "Thời gian làm việc:",
                content: [
                    "Từ 07:00 đến 16:00.",
                    "Thứ 2 - Thứ 6, và Thứ 7 luân phiên.",
                ]
            },
            {
                title: "Thông tin liên hệ:",
                content: [
                    "Email: hr@1stvirtue.com; hr@transcendpeople.com",
                    "Ms Linh: 0983 317 011",
                    "Ms Sen: 0935 552 184",
                    "Tel: 028 3948 4086",
                ]
            },
        ],
        iconContent: <FontAwesomeIcon icon={faCircle} />,
        icontitle: <FontAwesomeIcon icon={faPen} />,
        iconCalendar: <FontAwesomeIcon icon={faCalendar} />,
        iconAddress: <FontAwesomeIcon icon={faLocationDot} />,
        iconEmail: <FontAwesomeIcon icon={faEnvelope} />
    },
    {
        image: <img src={ketoannoiboImage} alt='Ke toan noi bo' />,
        jobName: 'Nhân Viên Kế Toán',
        address: '78/2A Binh Loi, Ward 13, Binh Thanh District, Ho Chi Minh City, Vietnam.',
        hashtag: 'HCMC | Fulltime',
        datePublish: <Realtime />,
        description: [
            {
                title: "Mô tả công việc:",
                content: [
                    "Kiểm tra, lưu hóa đơn mua vào. Xuất hóa đơn bán ra.",
                    "Theo dõi, báo cáo thu chi quỹ tiền mặt, tài khoản ngân hàng.",
                    "Thanh toán chi phí hàng tháng.",
                    "Theo dõi công nợ.",
                    "Tổng hợp, báo cáo tất cả các chi phí công ty, căn hộ cho thuê.",
                    "Báo cáo chi phí thẻ tín dụng.",
                    "Thu chi tài chính công đoàn.",
                    "Các công việc khác theo yêu cầu của Quản lý."
                ],
            },
            {
                title: "Thời gian: ",
                content: [
                    "Thứ 2 đến thứ 7 ( Thứ 7 luân phiên)",
                    "Time: 7:00 - 16:00",
                ],
            },

            {
                title: "Yêu cầu:",
                content: [
                    "Không yêu cầu kinh nghiệm.",
                    "Nhanh nhẹn. chịu khó, có tinh thần cầu tiến.",
                    "Bảo mật thông tin, trung thực và cẩn thận.",
                    "Có thể giao tiếp bằng tiếng Anh là một lợi thế.",
                ],
            },
            {
                title: "Phúc lợi:",
                content: [
                    "Tiền lương, từ 8 - 12 triệu.",
                    "Thưởng hiệu quả, thưởng cuối năm.",
                    "Phúc lợi theo luật lao động.",
                    "Nâng cao kỹ năng tiếng Anh, kỷ luật, chuyên nghiệp.",
                    "Môi trường trẻ năng động, có cơ hội thăng tiến.",
                ]
            },
            {
                title: "Quyền Lợi:",
                content: [
                    "Đào tạo nội bộ các kỹ năng.",
                    "Môi trường làm việc tích cực, có cơ hội thăng tiến.",
                    "Cơ hội nâng cao khả năng tiếng anh.",
                    "Lương, thưởng KPI theo năng lực.",
                    "Các chế độ phúc lợi khác theo quy định và theo luật lao động.",
                ]
            },
            {
                title: "Liên hệ phòng nhân sự:",
                content: [
                    "Email: hr@1stvirtue.com; hr@transcendpeople.com",
                    "Ms Linh: 0983 317 011",
                    "Ms Sen: 0935 552 184",
                    "Tel: 028 3948 4086",
                ]
            },
            {
                title: "Địa chỉ làm việc: ",
                content: [
                    "78/2A Binh Loi, Ward 13, Binh Thanh District, Ho Chi Minh City, Vietnam."
                ]
            },

        ],
        iconContent: <FontAwesomeIcon icon={faCircle} />,
        icontitle: <FontAwesomeIcon icon={faPen} />,
        iconCalendar: <FontAwesomeIcon icon={faCalendar} />,
        iconAddress: <FontAwesomeIcon icon={faLocationDot} />,
        iconEmail: <FontAwesomeIcon icon={faEnvelope} />
    }
]
export { CareersList };