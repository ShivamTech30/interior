import Layout from '../Component/Layout'
import Link from "next/link";
import { Container } from '@material-ui/core';

const Dispensary = () => {
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
                        <h4 className="pt-2"><b> Dispensary </b></h4>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12 mt-5 mb-5 " style={{ textAlign: "center" }}>
                        <h4 style={{ color: "#4494d1" }}><b> Dispensary </b></h4>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <p className="mt-3" >The school has a well – maintained medical Aid room where children needing medical
                                        care are treated. Students are given a proper medical check up at regular intervals and a health
                                        record is maintained for each child. A qualified medical physician visits the premises every morning
                                        and evening moreover is always available on call. Two nurses are always available in the Medical –
                                        Aid room however as and when advised by the school physician students are sent under an escort
                                        to renowned hospitals or Distt. Hospital at Hamirpur for further medical check-up.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {slides.map((item, i) => {
                        return (
                            <div key={i} className="col-lg-4 col-md-6 col-sm-4 col-xs-12 anim_cls1">
                                <img
                                    src={item?.title}
                                    className="mt-3 imght"
                                    alt="no_img" />
                            </div>
                        );
                    })}
                </div>




            </div>
        </Layout>
    )

}
export default Dispensary