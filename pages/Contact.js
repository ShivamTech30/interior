import React from 'react'
import Layout from '../Component/Layout'

const Contact = () => {
    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2"> </div>
                    <div className="pt-3 col-lg-8 bg_cont_blue">
                        <h4 className="ps-3">SEND A MESSAGE</h4>
                        <div className="mt-4 ml-3 ps-2 row" style={{textAlign:"center"}}>
                            <div className="col-lg-6 nme_ipt">
                                <input type="text" placeholder="Enter Your Name" />
                            </div>
                            <div className="col-lg-6 nme_ipt">
                                <input type="text" placeholder="Enter Your Name"  />
                            </div>
                        </div>
                        <div className="row" style={{textAlign:"center"}}> 
                            <div className="col-lg-12 sub_ipt nme_ipt">
                                <input type="text" placeholder="Enter Subject"/>
                            </div>
                        </div>
                        <div className="row" style={{textAlign:"center"}}> 
                            <div className="col-lg-12 msg_ipt nme_ipt1 ">
                                {/* <input type="text" placeholder="Enter Your Name"  /> */}
                                <textarea rows="4" cols="86" placeholder="Enter Your Name..."/>
                            </div>
                        </div>
                        <div className="row" > 
                            <div className="col-lg-12 ps-5 sbmt_ipt">
                                <button className=""> SUBMIT </button>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-2"> </div>
                </div>

            </div>
        </Layout>

    )
}

export default Contact
