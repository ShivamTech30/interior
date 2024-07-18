import React, { useState, useEffect } from 'react'
import useSWR from 'swr';
import Layout from '../Component/Layout'
// import React, { useState } from "react";

const fetcher = (...args) => fetch(...args).then(res => res.json());
function Chairman() {

    const [isReadMore, setIsReadMore] = useState(true);

    const url = "https://cms.schoolscoop.co.in/renaissance/items/faculty?status=published&fields=*.*"
    const { data, error } = useSWR(url, fetcher);
    if (error) {
        return <div>Error...</div>
    }
    if (!data) {
        return <div>No data...</div>
    }
 
    const toggleReadMore = () => {
        if(isReadMore===true){

        }
      setIsReadMore(!isReadMore); 
    };



    // {isReadMore ? text.slice(0, 150) : text}
    //   <span onClick={toggleReadMore} className="read-or-hide">
    //     {isReadMore ? "...read more" : " show less"}
    //   </span>
    return (
        <Layout>
            <div className="container-fluid">
                <div className="mb-5 row head_line">
                    <div className="col-lg-12">
                        <h4 className="pt-2"> WORD FROM CHAIRMAN :
                            {/* {data?.data[1]?.description}  */}
                        </h4>

                    </div>
                </div>
                <div className='container'>
                    <div className="row">
                    <div className=" col-lg-3 col-md-4 col-sm-6 col-xs-12 drt_img"
                             >
                            <img
                                //  src={data?.data[1]?.photo?.data?.full_url}
                                src="/images/demo1.jpg"
                                alt='Director'
                                style={{width:"100%"}} />
                            {/* <h2>{data?.data[1]?.full_name} </h2> */}
                            <h3 className="m-0 pt-4" style={{background:"rgb(6, 10, 77)",width:"100%",color:"white"}}> Demo Name </h3>
                            <p className="m-0 p-0" style={{background:"rgb(6, 10, 77)",width:"100%",color:"white"}}>  </p>
                        </div>
                        <div className=" col-lg-8 col-md-7 col-sm-6 col-xs-12">
                            <p className="ps-4">
                                    Education should bring out the perfection which is already present in each
                                    child. An institution should provide an environment which helps the child in
                                    achieving this perfection. It should help him develop his inherent qualities
                                    and all the aspects of his personality. This can be achieved when those
                                    involved in this process realize that education is much more than cramming
                                    a lot of information and passing examinations based on rote learning.
                                    Bhopal Public School Proposes to provide such an
                                    environment to the children. envisages looking for and orientating
                                    suitable personnel who would undertake this important task. It is hoped that
                                    the faculty so committed will achieve this objective. I assure you on behalf
                                    of the school to give civilized, knowledgeable and outstanding souls back to
                                    the society, on receiving them as an innocent and tender minds.
                                    Bhopal Public School Proposes to provide such an
                                    environment to the children. envisages looking for and orientating
                                    suitable personnel who would undertake this important task. It is hoped that
                                    the faculty so committed will achieve this objective. I assure you on behalf
                                    of the school to give civilized, knowledgeable and outstanding souls back to
                                    the society, on receiving them as an innocent and tender minds.

                                {/* {data?.data[1]?.message ? data?.data[1]?.message.slice(0, 300) : text}
                            <span onClick={()=>toggleReadMore()} className="read-or-hide">
                                {isReadMore ? "...read more" : "...show less"}
                            </span> */}
                                {/* {data?.data[1]?.message} */}
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Chairman
