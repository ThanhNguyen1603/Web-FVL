import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import aboutusnavb from '../../components/AboutUsNav/aboutusnav.module.scss';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faPeopleRoof, faAward, faPeopleGroup, faUsersLine } from '@fortawesome/free-solid-svg-icons'
const AboutUsNav = () => {
    const navlist = [
        { to: 'OurCompanies', name: 'Our Companies', icon: faBuilding },
        { to: 'OurLeadershipTeam', name: 'Our Leadership Team', icon: faPeopleRoof },
        { to: 'OurAchievements', name: 'Our Achievements', icon: faAward },
        { to: 'OurActivities', name: 'Our Activities', icon: faPeopleGroup },
        { to: 'OurCustomers', name: 'Our Customers', icon: faUsersLine }]
    return (
        <>
            <nav className={`${aboutusnavb.navContent} ${aboutusnavb.tabs} ${"navbar navbar-expand-lg bg-light"}`}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`${aboutusnavb.subContent} ${"collapse navbar-collapse"}`} id="navbarScroll">
                        <ul className="navbar-nav mx-auto navbar-nav-scroll">
                            {
                                navlist.map((navItem, index) => {
                                    return (
                                        <div key={index}> <li className="px-5" ><NavLink to={navItem.to}  
                                        className={({ isActive}) => isActive ? `${aboutusnavb.active}` : ""}>
                                        <FontAwesomeIcon icon={navItem.icon} /> {navItem.name}</NavLink></li>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default AboutUsNav;