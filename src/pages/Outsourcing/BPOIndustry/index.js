import bpoindustryStyle from './bpoindustry.module.scss'
import { BPOList } from './BpoList';
import bpoImage from "../../../Image/Outsourcing/bpo-industry-advantages-benefits.webp"
const BPOIndustry = () => {
    return (
        <>
            <div className={bpoindustryStyle.wrapper}>
                <div className='container-fluid pt-3 pb-3'>
                    <div className={bpoindustryStyle.titleContent}>
                        <h2>Advantages of the BPO Industry</h2>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12 d-flex align-items-center'>
                            <img className={bpoindustryStyle.BPOImage} src={bpoImage} alt="BPO" />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12'>
                            {
                                BPOList.map((item, index) => {
                                    return (
                                        <div key={index} className={bpoindustryStyle.detailsContent}>
                                            <p className={bpoindustryStyle.content}><span className={bpoindustryStyle.title}>{index + 1}. {item.title}: </span>{item.content}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default BPOIndustry;