import Link from "next/link"
import SearchIcon from '@material-ui/icons/Search';

const HomePageGallery = () => {

    const slides = [
        { title: "/images/is2.jpg", link: 'VIEW PROJECTS', details: 'Our design studio often deals with office remodeling and redesign. We can successfully transform your office into a visually attractive center of business activity.' },
        { title: "/images/is3.jpg ", link: 'VIEW PROJECTS', details: 'Our design studio often deals with office remodeling and redesign. We can successfully transform your office into a visually attractive center of business activity.' },
        { title: "/images/is6.jpg", link: 'VIEW PROJECTS', details: 'Our design studio often deals with office remodeling and redesign. We can successfully transform your office into a visually attractive center of business activity.' },
        { title: "/images/is10.jpg ", link: 'VIEW PROJECTS', details: 'Our design studio often deals with office remodeling and redesign. We can successfully transform your office into a visually attractive center of business activity.' },
        { title: "/images/is11.jpg ", link: 'VIEW PROJECTS', details: 'Our design studio often deals with office remodeling and redesign. We can successfully transform your office into a visually attractive center of business activity.' },
        { title: "/images/is12.jpg", link: 'VIEW PROJECTS', details: 'Our design studio often deals with office remodeling and redesign. We can successfully transform your office into a visually attractive center of business activity.' },

    ];


    return (
        <div className="p-0 mt-4 container-fliud mbo">
            <h2 className="text-center my-5 py-5"><b>WHAT WE WORK ON</b></h2>
            <div className="container">
                <div className="p-0 m-0 row">
                    {slides.map((data1, i) => {
                        return <div className="p-1 col-lg-4 col-md-4 col-sm-6 col-xs-12" key={i}>
                            <div class="parent">
                                <div class="child card">
                                    <img src={data1?.title} />
                                    <Link href="Gallery">
                                        <a className="a_1">
                                            <SearchIcon className="a_11" />
                                        </a>
                                    </Link>
                                </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title   pb-5" style={{ lineHeight: "1.7" }}>{data1?.details} </h5>
                                    <Link href="Gallery">
                                        <a className="" style={{ color: "#00bcd4" }}>{data1?.link} </a>
                                    </Link>

                                </div>
                            </div>

                        </div>
                    })}
                </div>
            </div> 
        </div>
    )
}
export default HomePageGallery;