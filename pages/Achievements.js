import React from 'react'
import useSWR from 'swr';
import Layout from '../Component/Layout'
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';

const Achievements = () => {

    const slides = [
        { title: "/images/is2.jpg", description: 'Name' },
        { title: "/images/is3.jpg ", description: 'Name' },
        { title: " /images/is5.jpg", description: 'Name' },
        { title: "/images/is5.jpg", description: 'Name' },
        { title: "/images/is6.jpg", description: 'Name' },
        { title: "/images/is10.jpg ", description: 'Name' },
        { title: "/images/is11.jpg ", description: 'Name' },
        { title: "/images/is12.jpg", description: 'Name' },

    ];

    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 achiv_bg_clr">
                        <h4>Academic Achievements</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="p-0 col-lg-8 col-sm-8 col-xs-12">
                        {slides.map((item, i) => {
                            return (
                                <div key={i} className="col-lg-3 col-sm-4 col-xs-6">
                                    <img
                                        // src={item?.image?.data?.full_url}
                                        src={item?.title}
                                        className="mt-3 imght1 "
                                    />
                                    <h5>{item?.description}</h5>
                                </div>
                            );
                        })}

                    </div>
                    <div className="mt-3 col-lg-4 col-sm-4 col-xs-12">
                        <div style={{ backgroundColor: "#4495d1", display: "flex", color: "white" }}> 
                            <LocalLibraryIcon style={{ height: "30px", width: "30px" }} className="mt-2 " />
                            <h5 className="pb-2 ps-5 fs-4"><b>CBSE RESULTS  </b> </h5>
                        </div>
                        <div className="col-lg-12 cbse_rslt">
                         <div className="cbse_rslt1"><h5>2019-20</h5> </div>  
                         <div className="cbse_rslt1"> <h5>2020-21</h5></div>
                         <div className="cbse_rslt1"><h5>2021-22</h5> </div> 
                        </div>
                    </div>
                    <div>

                    </div>

                </div>
            </div>
        </Layout>
    )
}
export default Achievements;