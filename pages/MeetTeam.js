import Link from "next/link"
const MeetTeam = () => {
    const slides = [
        { title: "/images/is2.jpg", link: 'Position Name', name: 'Full Name', details: 'Our design studio often deals with office remodeling and redesign. We can successfully transform your office into a visually attractive center of business activity.' },
        { title: "/images/is3.jpg ", link: 'Position Name', name: 'Full Name', details: 'Our design studio often deals with office remodeling and redesign. We can successfully transform your office into a visually attractive center of business activity.' },
        { title: "/images/is6.jpg", link: 'Position Name', name: 'Full Name', details: 'Our design studio often deals with office remodeling and redesign. We can successfully transform your office into a visually attractive center of business activity.' },

    ];

    const slides1 = [
        { title: "/images/is2.jpg", link: 'Position Name', date: 'Jan.20,2017', detail: 'THE ANSWER TO A SATISFYING SECTIONAL EXPERIENCE', name: 'Full Name', details: 'Our design studio often deals with office remodeling and redesign. We can successfully transform your office into a visually attractive center of business activity.' },
        { title: "/images/is3.jpg ", link: 'Position Name', date: 'Jan.20,2017', detail: 'THE ANSWER TO A SATISFYING SECTIONAL EXPERIENCE', name: 'Full Name', details: 'Our design studio often deals with office remodeling and redesign. We can successfully transform your office into a visually attractive center of business activity.' },
        { title: "/images/is6.jpg", link: 'Position Name', date: 'Jan.20,2017', detail: 'THE ANSWER TO A SATISFYING SECTIONAL EXPERIENCE', name: 'Full Name', details: 'Our design studio often deals with office remodeling and redesign. We can successfully transform your office into a visually attractive center of business activity.' },

    ];

    return (
        <div className="p-0 mt-4 container-fliud mbo">
            <h2 className="text-center my-5 py-5"><b>MEET OUR TEAM</b></h2>
            <div className="container">
                <div className="p-0 m-0 row">
                    {slides.map((data1, i) => {
                        return <div className="p-1 col-lg-4 col-md-4 col-sm-6 col-xs-12" key={i}>
                            <div class="  card">
                                <img src={data1?.title} />
                            </div>
                            <div class="card-body text-center">
                                <h4 className="" style={{ color: "black" }}><b>{data1?.link} </b></h4>
                                <h4 className="" style={{ color: "#00bcd4" }}>{data1?.name} </h4>
                                <h5 class="card-title   pb-5" style={{ lineHeight: "1.7" }}>{data1?.details} </h5>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <div className="p-0  container-fliud mt-5 pt-5 ">
                <div className="row m-0 p-0">
                    <div className="col-sm-6">
                        <img src="/images/glr3.jpg" style={{ width: "100%", height: "700px" }} />
                    </div>

                    <div className="col-sm-6 about_pdig1">
                        <div className="row  about_pdig1 mt-5 ">
                            <h3 className="mt-5 mb-5 pt-5 ps-5 pb-5"><b>GET A QUOTE</b></h3>
                            <div className="Get_Touch">
                                <input type="text" className="samaa" placeholder=" Your name" />
                                <input type="text" placeholder="Your e-mail" />
                                <textarea placeholder="Your message " className="txt_ary" />
                            </div>
                            <div className="mt-5 ps-5  ">
                                <Link href="#">
                                    <button className="Read_mr1">SEND</button>
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div className="p-0 mt-4 container-fliud mbo">
                <h2 className="text-center my-5 py-5"><b>MEET OUR TEAM</b></h2>
                <div className="container">
                    <div className="p-0 m-0 row">
                        {slides1.map((data1, i) => {
                            return <div className="p-1 col-lg-4 col-md-4 col-sm-6 col-xs-12" key={i}>
                                <div class="  card">
                                    <img src={data1?.title} />
                                </div>
                                <div class="card-body  ">
                                <h5 className="h4" style={{ color: "black" }}><b>{data1?.detail} </b></h5>
                                    <div className="d-flex"> 
                                        <h5 className="" style={{ color: "#00bcd4" }}>{data1?.date} </h5>
                                        <h5 className="ps-5" style={{ color: "black" }}> {data1?.name} </h5>
                                    </div> 
                                    <h5 class="card-title   pb-5" style={{ lineHeight: "1.7" }}>{data1?.details} </h5>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MeetTeam;