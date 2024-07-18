import Layout from '../Component/Layout'
import Link from "next/link";

const Facilities = () => {
    const slides = [
         
        { title: "/images/is3.jpg ", description: 'View Gallery' }, 
        { title: "/images/is6.jpg", description: 'View Gallery' }, 
        { title: "/images/is11.jpg ", description: 'View Gallery' },
         


    ];

    return (
        <Layout>
            <div className="container-fluid" >
                <div className="row head_line">
                    <div className="col-lg-12">
                        <h4 className="pt-2">Infrastructure</h4>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-12 ">
                            <p style={{ textAlign: "center" }}>
                                Bhopal Academy Public School has a state-of-the-art infrastructure with all the modern facilities. This is
                                commodious complex with separate hostels for boys and girls. It has a big playground surrounded by beautiful
                                flower beds. The sun peeps through the needles of  of the school campus
                                adding to the magnificence of the scenic beauty of the school. It is the best location in the lap of nature.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12 " style={{ textAlign: "center" }}>
                         
                        <h4 style={{ color: "#4494d1" }}>Digital Classroom</h4>
                        <p className="mt-3" >HAPS has Digital content mapped to school syllabus and Interactive Smart boards as visual learning aids.</p>
                    </div>
                    {slides.map((item, i) => {
                        return (
                            <div key={i} className="col-lg-4 col-md-6 col-sm-4 col-xs-12 anim_cls1">
                                <img
                                    src={item?.title}
                                    className="mt-3 imght" />
                            </div>
                        );
                    })}
                </div>

                <div className="mt-5 row">
                    <div className="col-sm-12" style={{ textAlign: "center" }}>
                        <h4 style={{ color: "#4494d1" }}>Digital Classroom</h4>
                        <p className="mt-3" >HAPS has Digital content mapped to school syllabus and Interactive Smart boards as visual learning aids.</p>
                    </div>
                    {slides.map((item, i) => {
                        return (
                            <div key={i} className="col-lg-4 col-md-6 col-sm-4 col-xs-12 anim_cls">
                                <img
                                    src={item?.title}
                                    className="mt-3 imght" />
                            </div>
                        );
                    })}
                </div>
                <div className="mt-5 row">
                    <div className="col-sm-12" style={{ textAlign: "center" }}>
                        <h4 style={{ color: "#4494d1" }}>Digital Classroom</h4>
                        <p className="mt-3" >HAPS has Digital content mapped to school syllabus and Interactive Smart boards as visual learning aids.</p>
                    </div>
                    {slides.map((item, i) => {
                        return (
                            <div key={i} className="col-lg-4 col-md-6 col-sm-4 col-xs-12 anim_cls">
                                <img
                                    src={item?.title}
                                    className="mt-3 imght" />
                            </div>
                        );
                    })}
                </div>
                <div className="mt-5 row">
                    <div className="col-sm-12" style={{ textAlign: "center" }}>
                        <h4 style={{ color: "#4494d1" }}>Digital Classroom</h4>
                        <p className="mt-3" >HAPS has Digital content mapped to school syllabus and Interactive Smart boards as visual learning aids.</p>
                    </div>
                    {slides.map((item, i) => {
                        return (
                            <div key={i} className="col-lg-4 col-md-6 col-sm-4 col-xs-12 anim_cls">
                                <img
                                    src={item?.title}
                                    className="mt-3 imght" />
                            </div>
                        );
                    })}
                </div>
                <div className="mt-5 row">
                    <div className="col-sm-12" style={{ textAlign: "center" }}>
                        <h4 style={{ color: "#4494d1" }}>Digital Classroom</h4>
                        <p className="mt-3" >HAPS has Digital content mapped to school syllabus and Interactive Smart boards as visual learning aids.</p>
                    </div>
                    {slides.map((item, i) => {
                        return (
                            <div key={i} className="col-lg-4 col-md-6 col-sm-4 col-xs-12 anim_cls">
                                <img
                                    src={item?.title}
                                    className="mt-3 imght" />
                            </div>
                        );
                    })}
                </div>
                <div className="mt-5 row">
                    <div className="col-sm-12" style={{ textAlign: "center" }}>
                        <h4 style={{ color: "#4494d1" }}>Digital Classroom</h4>
                        <p className="mt-3" >HAPS has Digital content mapped to school syllabus and Interactive Smart boards as visual learning aids.</p>
                    </div>
                    {slides.map((item, i) => {
                        return (
                            <div key={i} className="col-lg-4 col-md-6 col-sm-4 col-xs-12 anim_cls">
                                <img
                                    src={item?.title}
                                    className="mt-3 imght" />
                            </div>
                        );
                    })}
                </div>

            </div>
        </Layout>
    )

}
export default Facilities