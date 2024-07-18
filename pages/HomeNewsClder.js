import Link from "next/link"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

const HomeNewsClder = () => {
    const slides = [
        { title: "/images/is2.jpg", link: 'Position Name', name: 'Full Name', details: 'Our design studio often deals with office remodeling and redesign. We can successfully transform your office into a visually attractive center of business activity Our design studio often deals with office remodeling and redesign. We can successfully transform your office into a visually attractive center of business activity your office into a visually attractive center of business activity.' },
        { title: "/images/is3.jpg ", link: 'Position Name', name: 'Full Name', details: 'Our design studio often deals with office remodeling and redesign. We can successfully transform your office into a visually attractive center of business activity Our design studio often deals with office remodeling and redesign. We can successfully transform your office into a visually attractive center of business activity your office into a visually attractive center of business activity.' },
        { title: "/images/is6.jpg", link: 'Position Name', name: 'Full Name', details: 'Our design studio often deals with office remodeling and redesign. We can successfully transform your office into a visually attractive center of business activity Our design studio often deals with office remodeling and redesign. We can successfully transform your office into a visually attractive center of business activity your office into a visually attractive center of business activity.' },

    ];
    const slides1 = [
        { title: "/images/brnd.png ", description: 'View Gallery' },
        { title: "/images/brnd.png ", description: 'View Gallery' },
        { title: " /images/brnd.png", description: 'View Gallery' },
        { title: "/images/brnd.png ", description: 'View Gallery' },
        { title: "/images/brnd.png ", description: 'View Gallery' },
        { title: " /images/brnd.png", description: 'View Gallery' },
        { title: "/images/brnd.png ", description: 'View Gallery' },
        { title: " /images/brnd.png", description: 'View Gallery' },
    ];


    return (
        <div className="container-fluid m-0 p-0" >
            <div className="container-fluid bg-opacity1 mt-5  p-0 " >
                <div className="container text-light">
                    <h3 className=" text-center mt-5 pt-5   "><b>WHAT PEOPLE SAY</b></h3>
                    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} style={{ paddingTop: "-100px!important" }} >
                        {slides.map((slide, index) => {
                            return <div class="carousel-inner" role="listbox">
                                <div className='carousel items1 text-light' key={index} role="listbox">
                                    <img
                                        src={slide?.title}
                                        className="my-5"
                                        alt="sorry_no_img"
                                        style={{ borderRadius: "50px", height: "80px", width: "80px" }}
                                    />
                                    <p className="my-5">{slide?.details}</p>
                                    <p className="my-5 pb-5">{slide?.name}</p>

                                </div>
                            </div>
                        })}
                    </Carousel>

                </div>
            </div>

            <div className='container'>
                <h3 className="text-center mt-5 pt-5"><b>OUR CLIENTS</b></h3>     
                    <div className="mb-3 row">
                        {slides1.map((item, i) => {
                            return (
                                <div key={i} className="col-lg-3 col-md-3 col-sm-6 col-12">
                                   <center>  <img
                                        src={item?.title}
                                        className="mt-3 imght "
                                        alt="no_img"
                                        height={150} width={150}
                                    />
                                    </center>
                                </div>
                            );
                        })}
                    </div>
                 
            </div>
        </div>
    )
}
export default HomeNewsClder;