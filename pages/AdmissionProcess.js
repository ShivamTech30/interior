
import Layout from '../Component/Layout'
import Link from "next/link"
const AdmissionProcess = () => {

    return (
        <Layout>
            <div className="mb-5 container-fluid" >
                <div className="row head_line">
                    <div className="col-lg-12">
                        <h4 className="pt-2">Admission Procedure</h4>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 ap_head">
                            <h3>Important message to Prospective Parents/ Students</h3>
                        </div>
                    </div>
                    <div className="row ap_head1">
                        <div className="pt-4 col-lg-12 ap_head1">
                            <p>Dear Prospective Parents / Students,</p>
                            <span>Due to Covid-19 Pandemic, the country was under a complete lockdown since 22nd March, 2020
                                . Though the lockdown has been partially eased at some zones, the travel restrictions, social
                                stancing and other protective measures are likely to stay for a long time. These measures are
                                necessary in order to curb the spread of Corona virus infection. However, it has created hurdles
                                for prospective parents to visit the school for consultation of their queries related to
                                admission, such as procedure, Fees, Hostel, etc. Therefore, to address the queries of prospective
                                parents / students, the Admission Team is facilitating two modes of communication as given below:
                            </span>
                            <ul>
                                <li><span> <b>Through Telephone :</b> The parents / students can call the admission team on the following numbers
                                    between 9AM to 6PM on all week days.
                                    99999999, 111111111
                                </span>
                                </li>
                            </ul>
                            <ul>
                                <li><span> <b>Through Online Meeting :</b> Online one
                                    to one interactive meeting will be scheduled for prospective parents
                                    / students with Admission Team Members using various online meeting platforms such as
                                    Zoom, Microsoft Teams, what’s app etc. The details of these online sessions will be notified
                                    to parents who have made request for online meeting.
                                    99999999, 111111111
                                </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-4 row">
                        <div className=" col-lg-6 col-md-6 col-sm-12 ap_head2">
                            <div className="whit_bordr">
                                <h3>Registration / Admission open for Session 2021-22</h3>
                                <p>Read Admission Procedure & Documentation for Admission carefully
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 ap_head3">
                            <div className="whit_bordr">
                                <h3>Registration Form</h3>
                                <Link href="#">
                                    <a> <button>DOWNLOAD</button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 ap_head5 ">
                            <p>Admission Procedure</p>
                            <span type="button" class="float-end" data-toggle="collapse" data-target="#demo" style={{ marginTop: "-34px" }}><b style={{  fontSize:"22px"}}> +</b></span>
                        </div>
                        <div id="demo" class="collapse  ">
                            0Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            0Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            0Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                        <div className="col-sm-12 ap_head5">
                            <p>Registration Form</p>
                            <span type="button" class="float-end" data-toggle="collapse" data-target="#demo1" style={{ marginTop: "-34px" }}><b style={{  fontSize:"22px"}}> +</b></span>
                        </div>
                        <div id="demo1" class="collapse  ">
                            1Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            0Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            0Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            0Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        </div>
                        <div className="col-sm-12 ap_head5">
                            <p>Guidelines for Admission</p>
                            <span type="button" class="float-end" data-toggle="collapse" data-target="#demo2" style={{ marginTop: "-34px" }}><b style={{  fontSize:"22px"}}> +</b></span>
                        </div>
                        <div id="demo2" class="collapse  ">
                            2Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            0Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            0Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            0Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )

}
export default AdmissionProcess