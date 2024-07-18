import Link from "next/link"
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import CodeIcon from '@material-ui/icons/Code';
import RedeemIcon from '@material-ui/icons/Redeem';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

const HomeOurProject = () => {

    const slides = [
        { title: "/images/is2.jpg", link: 'VIEW MORE', details: 'Our design studio often deals with office remodeling and redesign. We can successfully transform your office into a visually attractive center of business activity.' },
        { title: "/images/is3.jpg ", link: 'VIEW MORE', details: 'Our design studio often deals with office remodeling and redesign. We can successfully transform your office into a visually attractive center of business activity.' },
        { title: "/images/is6.jpg", link: 'VIEW MORE', details: 'Our design studio often deals with office remodeling and redesign. We can successfully transform your office into a visually attractive center of business activity.' },
        { title: "/images/is10.jpg ", link: 'VIEW MORE', details: 'Our design studio often deals with office remodeling and redesign. We can successfully transform your office into a visually attractive center of business activity.' },
        { title: "/images/is11.jpg ", link: 'VIEW MORE', details: 'Our design studio often deals with office remodeling and redesign. We can successfully transform your office into a visually attractive center of business activity.' },
        { title: "/images/is12.jpg", link: 'VIEW MORE', details: 'Our design studio often deals with office remodeling and redesign. We can successfully transform your office into a visually attractive center of business activity.' },

    ];

    return (
        <div className="p-0 container-fliud">
            <h2 className="text-center"><b>OUR PROJECTS</b></h2>
            <div className="container py-5 ">
                <div className="row ">
                    {slides.map((data1, i) => {
                        return <div className="  col-lg-4 col-md-4 col-sm-6 col-xs-12 m-0 p-0" key={i}>
                            <div class="flip-card parent mt-3  ">
                                <div class="flip-card-inner  child ">
                                    <div class="flip-card-front   ">
                                        <img src={data1?.title} className="img_ft_cd" alt="Avatar" style={{ width: "100%", height: "300px" }} />
                                        <h4 className="text-light a_12">
                                            <b>    OFFICE CENTER</b>
                                        </h4>
                                    </div>
                                    <div class="flip-card-back">
                                        <img src={data1?.title} alt="Avatar" className="img_bk_cd" style={{ width: "300px", height: "300px" }} />
                                        <div className="a_12 ">
                                            <h4 className="text-light">
                                                <b>    OFFICE CENTER</b>
                                            </h4>
                                            <Link href="Gallery">
                                                <a className="text-light">
                                                    {data1?.link}
                                                </a>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    })}

                </div>
            </div>
            <div className="p-0 container-fliud bg-opacity">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 content text-light text-center pt-5">
                            <h3 className="mt-5 pt-5"><b> IF YOU CAN ENVISION IT, THEN WE CAN DESIGN IT.
                            </b> </h3>
                            <h3> <b>I  TELL US MORE ABOUT YOUR PROJECT!</b></h3>
                            <div className="mt-5 pt-5">
                                <Link href="#">
                                    <button className="Read_mr">CONTACT US</button>
                                </Link>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default HomeOurProject;