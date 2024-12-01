import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from '../../Home/home.module.scss';
import portfolio from './portfolio.module.scss'
import partnerships from '../../../Image/Solution/logos_clients.jpg'
const Portfolio = () => {
    return (
        <>
            <div className={`${portfolio.titles} ${portfolio.titleContent}`}>
                <h2>Partnerships Built on Trust</h2>
            </div>
            <div className={`${portfolio.content} ${"container"}`}>
                <div className={portfolio.paragraph}>
                    <p>We recognize that trust is the most important value in an outsourcing partnership. And that's why from day one, our clients experience superior customer service and results that enhance their business' performance.</p>
                </div>
                <div className={portfolio.paragraph}>
                    <p>Our current client list includes businesses representing a range of industries, sizes and requirements. Here's a sampling of our client list:</p>
                </div>
                <img src={partnerships} alt="partnerships" />
            </div>
        </>
    )
}

export default Portfolio;