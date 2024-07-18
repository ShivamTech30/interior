import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Link from "next/link";
const Footer = () => {
    return (
        <>
            <div className="pb-5 mt-4 container-fluid bg-dark  ">
                <div className="container">
                    <div className="row">
                        <div className="mt-5 col-lg-3 text-light">
                            <img src="/images/logoftr.png" alt="no_img" style={{ width: "100%" }} />
                            <h4>We are one of the leading interior design and remodeling studios available
                                for all of your residential and commercial interior design needs. Our team brings
                                a high level of ingenuity and creativity to each project. Our desire is to create
                                a design that represents your personal and unique style, creating an environment
                                that you will love for years to come.
                            </h4>
                        </div>
                        <div className="mt-5 col-lg-3 text-light ">
                            <h4><b>NAVIGATION</b></h4>
                            <div style={{ color: "#00bcd4" }}>
                                <Link href="#">
                                    <h4>News and Updates</h4>
                                </Link>
                            </div>
                            <div style={{ color: "#00bcd4" }}>

                                <Link href="#">

                                    <h4> Latest Projects</h4>

                                </Link>
                            </div>
                            <div style={{ color: "#00bcd4" }}>

                                <Link href="#">

                                    <h4>Our Services</h4>

                                </Link>
                            </div>
                            <div style={{ color: "#00bcd4" }}>

                                <Link href="#">

                                    <h4>Contacts</h4>
                                </Link>
                            </div>
                        </div>
                        <div className="mt-5 col-lg-3 text-light m-0 p-0 ">
                            <h4>CONTACTS</h4>
                            <div style={{ color: "#888" }}>
                                <h4 className="mt-4">
                                    Address :   4000 maitrtech Road, Glasgow, D0hs 89GR
                                </h4>

                                <h4 className="my-5">
                                    Phones : 0000000 99999999
                                </h4>
                                <h4>
                                    E-mail :maitretech@example.com
                                </h4>
                            </div>
                        </div>
                        <div className=" col-lg-3   mt-5 ">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.48129412968!2d77.06889969035102!3d28.52728034389636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1629289342325!5m2!1sen!2sin"
                                style={{ width: "100%", height: "350px" }} allowfullscreen="" loading="lazy"></iframe>

                        </div>
                    </div>
                </div>
            </div>
            <div className="row m-0 p-0 py-2 h4" style={{ backgroundColor: "lightskyblue" }}>
                <div className="col-lg-6      col-md-6 text-center text-light ">
                    © Maitretech Design 
                </div>
                <div className="col-lg-6 col-md-4 text-center text-light      ">
                    Made with    <FavoriteIcon className="text-danger " /> 	   by Maitretech
                </div>
            </div>
        </>
    )
}
export default Footer;