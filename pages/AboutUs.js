import Link from "next/link";
import DevicesIcon from '@material-ui/icons/Devices';

const SchoolFacilities = () => {
    return (
        <div className="container-fluid ASbg_color" >
            <div className="row mt-5 pt-5">
                <div className=" col-sm-6 ">
                    <div className="about_pdig">
                        <h2><b> ABOUT US</b></h2>
                        <p style={{ lineHeight: "2", color: "#333" }} >We are a team of professional, energetic individuals with talented designers and experienced managers available to guide our clients through the flawless and timely execution of any residential design project. Since day one, we have been delivering creative and cozy interiors to our clients worldwide.</p>
                    </div>
                    <div className="row  about_pdig1 ">
                        <div className="col-sm-6 p-5  pac ">
                            <div className="row">
                                <div className="col-lg-2 pe-3 d-flex justify-content-center">
                                    <DevicesIcon className="lt_blu" style={{ fontSize: "60px" }} />
                                </div>
                                <div className="col-lg-10">
                                    <Link href="#" className="col-lg-9 mt-2"><a className="Infrastructure_clr">
                                        Infrastructure
                                    </a></Link>
                                    <p className="col-lg-12 mt-3" style={{ lineHeight: "2" }}>Maitretech Academy Public School has a
                                        state-of-the-art infrastructure
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 p-5  pac ">
                            <div className="row">
                                <div className="col-lg-2 pe-3 d-flex justify-content-center">
                                    <DevicesIcon className="lt_blu" style={{ fontSize: "60px" }} />
                                </div>
                                <div className="col-lg-10">
                                    <Link href="#" className="col-lg-9 mt-2"><a className="Infrastructure_clr">
                                        Infrastructure
                                    </a></Link>
                                    <p className="col-lg-12 mt-3" style={{ lineHeight: "2" }}>Maitretech Academy Public School has a
                                        state-of-the-art infrastructure
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Interior Design</p>
                             
                            <div class="progress">
                                <div class="progress-bar mt-3 " style={{ width: "49%", height: "7px", backgroundColor: "#00bcd4" }}>

                                </div>
                                <div class="progress-bar   mt-4" style={{ width: "51%", height: "2px", backgroundColor: "black" }}>

                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Interior Planning</p>
                            <div class="progress">
                                <div class="progress-bar mt-3 " style={{ width: "29%", height: "7px", backgroundColor: "#00bcd4" }}>

                                </div>
                                <div class="progress-bar   mt-4" style={{ width: "71%", height: "2px", backgroundColor: "black" }}>

                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Consultations</p>
                            <div class="progress">
                                <div class="progress-bar mt-3 " style={{ width: "86%", height: "7px", backgroundColor: "#00bcd4" }}>

                                </div>
                                <div class="progress-bar   mt-4" style={{ width: "14%", height: "2px", backgroundColor: "black" }}>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className=" col-sm-6">
                    <img src="/images/glr3.jpg" style={{ width: "100%", height: "700px" }} />
                </div>
            </div>

        </div>
    )
}
export default SchoolFacilities;