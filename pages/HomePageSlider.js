
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';   
import Link from "next/link"

const HomePageSlider = () => {

    const slides = [
        { title: "/images/psd1.jpg ", description: 'Lorem ipsum' },
        { title: " /images/psd2.jpeg", description: 'Lorem ipsum' },
        // { title: " ", description: 'Lorem ipsum' }
      ];

    return (
        <div className="container-fluid">
            <div className="row  ">
                <div className="col-lg-12 p-0 m-0 slider_home_mt">
                    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} style={{ paddingTop: "-100px!important" }} >
                        {slides.map((slide, index) => {
                            return <div class="carousel-inner" role="listbox">
                                <div className='carousel items1' key={index} role="listbox">
                                    <img
                                        src={slide.title}
                                        height={500} width={1500}
                                        alt="sorry_no_img"
                                    />
                                </div>
                            </div>
                        })}
                    </Carousel> 
                </div> 
            </div>
        </div>

    )
}
export default HomePageSlider;