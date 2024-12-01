import charityStyle from "./charity.module.scss";
import nganImage from "../../../Image/AboutUs/Charity/1.png";
import turkeydashImage from "../../../Image/AboutUs/Charity/1573547088_img_1024.jpg";
import { DreamSmile } from "../../../components/EmbeddedGoogleDriveFile/DriveFilePage"
const OurCharity = () => {
    return (
        <>
            <div className={charityStyle.contentBackground}>
                <div className="container-fluid">
                    <div className="row">
                        <div className={charityStyle.titleContent}>
                            <h2>Turkey Dash - Charity Fun Run Event</h2>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <p className="text-center">
                                    With the deep sympathy, Ms. Michelle Ngo was determined to do something practical to help the underprivileged children with cleft lip and cleft palate, so Turkey Dash was born and held as an annual charity fun run event to raise funds for these underprivileged children.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className={charityStyle.content}>
                            <div className="col-md-12">
                                <div className="row pt-5">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-8">
                                        <img className={charityStyle.imageCharity} src={nganImage} alt="Ngan from Viet Nam" />
                                    </div>
                                    <div className="col-md-2"></div>
                                </div>
                                <div className="row pt-5">
                                    <div className="col-md-6 d-flex align-items-center">
                                        <p>Having the grace to be accompanied as a charity ambassador of the Turkey Dash, Do Thuy Khanh, the singer/songwriter, composed and released the song "DREAM SMILE" as a charity with a meaningful message to bring a dream smile for the less fortunate children with cleft palate from a young age. This Turkey Dash theme song was spread with the participation of more than 20 artists as: Thanh Ha, Hua Vi Van, Dieu Nhi, Thuan Nguyen...</p>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="container embed-responsive embed-responsive-21by9">
                                            <DreamSmile />
                                        </div>
                                    </div>
                                </div>
                                <div className="row pt-5 pb-3">
                                    <div className="col-md-6">
                                        <img className={charityStyle.imageCharity} src={turkeydashImage} alt="Turkey Dash" />
                                    </div>
                                    <div className="col-md-6">
                                        <p>TURKEY DASH 7 - I RUN TO GIVE SMILES has received donations of more than 2 billion VND along with more than 4,000 participants.</p>
                                        <p>The event was attended by Venerable Thich Dong Ngo - Abbot of Thien Hung Pagoda (Binh Dinh), Ms. Kathy - President of Operation Smile, Korean actress Ha Ji Won - International Ambassador of Operation Smile. Besides, there are many famous Vietnamese artists participating in the event as The Ambassadors of "Turkey Dash 7 - I Run to Give Smiles" including: Thanh Ha, Duc Tuan, John Huy Tran & UDG Team, Cao Xuan Tai, Hoang Phi Kha, Wang Tran & DMC Team, Anh Quan, Do Thuy Khanh, etc.</p>
                                        <p>Ms. Michelle Ngo - Head of the Organizing Committee of Turkey Dash 7 - I Run to Give Smile, shared: "With the noble mission and slogan of the event being 'Giving Complete Smiles', under the guidance of the Ho Chi Minh City Sponsoring Association for Poor Patients, Turkey Dash - Vietnamese Smile has, over the years, transformed the dreams and seemingly impossible hopes of many unfortunate and disadvantaged lives. With 100% of the donated funds raised, we have given more than 1,000 smiles to children in difficult circumstances."</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurCharity;