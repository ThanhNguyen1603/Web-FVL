import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircle,faCalendar,faLocationDot,faEnvelope,faPen} from "@fortawesome/free-solid-svg-icons";
import hiringDataProcessingImage from '../../Image/Careers/hiring_dataProcessing.png'
import nhanvienhanhchinhImage from '../../Image/Careers/nhanvienhanhchinhposter.jpg'
import ketoannoiboImage from '../../Image/Careers/ketoannoibo.jpg'
const CareersList = [
    {
        image: <img src={hiringDataProcessingImage} alt='Hiring Data Processing' />,
        jobName: 'DATA PROCESSING STAFF 2', 
        datePublish: 'March 30, 2023',
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
                title : "Benefits",
                content: [
                    "Pay social insurance, unemployment insurance, health insurance and the benefits in accordance with the Labor Law.",
                    "Opportunity to learn and improve ENGLISH skills.",
                    "Professional, young and friendly working environment.",
                    "Be trained and guided enthusiasm in order to be prompt to work effectively."
                ],
            },
            {
                title : "Required Knowledge and Skills",
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
        iconCalendar : <FontAwesomeIcon icon={faCalendar} />,
        iconAddress : <FontAwesomeIcon icon={faLocationDot} />,
        iconEmail : <FontAwesomeIcon icon={faEnvelope} />
    },
   {
    image: <img src={nhanvienhanhchinhImage} alt='Nhan Vien Hanh Chinh' />,
        jobName: 'Nhân Viên Hành Chính', 
        datePublish: 'October 02, 2023',
        description: [
            {
                title: "Mô tả công việc:", 
                content: [
                "Quản lý, mua sắm tài sản, VPP, trang thiết bị, công cụ dụng cụ văn phòng.",
                "Quản lý tạp vụ, Bảo vệ đảm bảo văn phòng luôn sạch sẽ, chuyên nghiệp.",
                "Phối hợp tổ chức các chương trình, sự kiện, hoạt động của Công ty.",
                "Theo dõi và cấp phát thẻ xăng cho Tài xế, chi phí sửa chữa, bảo dưỡng xe và chi phí khác của Tài xế.",
                "Theo dõi, quản lý, lên lịch bảo trì, bảo dưỡng, sửa chữa, thay mới các thiết bị văn phòng: máy in, hệ thống máy lạnh…",
                "Kiểm tra hóa đơn, tình trạng sử dụng, làm báo cáo và đề nghị thanh toán các chi phí cố định: taxi, grab, điện, nước, điện thoại, internet, rác sinh hoạt, chuyển phát nhanh…",
                " Định kỳ kiểm tra, đảm bảo thực hiện các công tác liên quan đến hệ thống PCCC theo đúng quy định của pháp luật.",
                "Thực hiện các công việc khác theo sự phân công của cấp trên.",
            ],
                
            },
            {
                title: "Thời gian: ",
                content: [
                    "Thứ 2 đến thứ 7 ( Thứ 7 luân phiên)",
                    "Time: 7:30 - 16:30",
               ],
            },
            
            {
                title : "Lương cơ bản:",
                content: [
                   "Thỏa thuận"
                ],
            },
            {
                title : "Yêu cầu:",
                content: [
                    "Thành thạo Excel.",
                    "Trung thực, chăm chỉ, cẩn thận.",
                    "Có trách nhiệm trong công việc.",
                    "Tiếng anh cơ bản.",
                    "Không yêu cầu kinh nghiệm.",
                ]
            },
            {
                title: "Quyền Lợi:",
                content: [
                    "Đào tạo nội bộ các kỹ năng.",
                    "Môi trường làm việc tích cực, có cơ hội thăng tiến.",
                    "Cơ hội nâng cao khả năng tiếng anh.",
                    "Lương, thưởng KPI theo năng lực."
                ]
            },
            {
                title: "Liên hệ phòng nhân sự:",
                content: [
                    "Email: hr@transcendpeople.com",
                    "Chị Nhàn: 0968 100 763",
                    "Chị Vi: 0983 317 011",
                    "Chị Sen: 0935 552 184",
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
        iconCalendar : <FontAwesomeIcon icon={faCalendar} />,
        iconAddress : <FontAwesomeIcon icon={faLocationDot} />,
        iconEmail : <FontAwesomeIcon icon={faEnvelope} />
   },
   {
    image: <img src={ketoannoiboImage} alt='Ke toan noi bo' />,
        jobName: 'Nhân Viên Kế Toán Nội Bộ', 
        datePublish: 'September 30, 2023',
        description: [
            {
                title: "Mô tả công việc:", 
                content: [
                    "Quản lý, kiểm tra, làm đề nghị thanh toán, theo dõi và báo cáo các chi phí.",
                    "Lập phiếu thu chi, đối chiếu với thủ quỹ hàng ngày.",
                    "Tổng hợp hóa đơn, chứng từ.",
                    "Theo dõi tài khoản ngân hàng.",
                    "Mua hàng hóa, thiết bị.",
                    "Lập, kiểm tra hợp đồng dịch vụ, đối chiếu đề xuất mua hàng của các bộ phận.",
                    "Thực hiên các báo cáo doanh thu, chi phí và báo cáo nội bộ khác.",
                    "Quản lý tài sản công ty.",
                    "Sắp xếp hồ sơ, giấy tờ.",
                    "Công việc phát sinh khác theo yêu cầu của cấp trên.",
                ],   
            },
            {
                title: "Thời gian: ",
                content: [
                    "Thứ 2 đến thứ 7 ( Thứ 7 luân phiên)",
                    "Time: 7:30 - 16:30",
               ],
            },
            
            {
                title : "Lương cơ bản:",
                content: [
                   "Thỏa thuận"
                ],
            },
            {
                title : "Yêu cầu:",
                content: [
                    "Có ít nhất 1 năm kinh nghiệm ở vị trí tương đương.",
                    "Thành thạo Excel.",
                    "TTrung thực, cẩn thận, chủ động.",
                    "Có trách nhiệm trong công việc.",
                    "Tiếng anh cơ bản.",
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
                    "Email: hr@transcendpeople.com",
                    "Chị Nhàn: 0968 100 763",
                    "Chị Vi: 0983 317 011",
                    "Chị Sen: 0935 552 184",
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
        iconCalendar : <FontAwesomeIcon icon={faCalendar} />,
        iconAddress : <FontAwesomeIcon icon={faLocationDot} />,
        iconEmail : <FontAwesomeIcon icon={faEnvelope} />
   }
]
export  {CareersList};