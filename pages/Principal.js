import React from 'react'
import useSWR from 'swr';
import Layout from '../Component/Layout'


const fetcher = (...args) => fetch(...args).then(res => res.json());
const Principal = () => {
    const url = "https://cms.schoolscoop.co.in/renaissance/items/faculty?status=published&fields=*.*"
    const { data, error } = useSWR(url, fetcher);
    console.log(data)
    console.log(data)
    if (error) {
        return <div>Error...</div>
    }
    if (!data) {
        return <div>No data...</div>
    }


    return (
        <Layout>
            <div className="container-fluid">
                <div className="mb-5 row head_line">
                    <div className="col-lg-12">
                        <h4 className="pt-2"> PRINCIPAL'S MESSAGE :
                            {/* {data?.data[1]?.description}  */}
                        </h4>

                    </div>
                </div>

                <div className='container'>
                    <div className="row">
                        <div className=" col-lg-3 col-md-4 col-sm-6 col-xs-12 prc_img"
                            >
                           <img
                                //  src={data?.data[1]?.photo?.data?.full_url}
                                src="/images/demo2.jpg"
                                alt='Director'
                                style={{width:"100%"}} />
                            {/* <h2>{data?.data[1]?.full_name} </h2> */}
                            <h3 className="m-0 pt-4" style={{background:"rgb(6, 10, 77)",width:"100%",color:"white"}}> Demo Name </h3>
                            <p className="m-0 p-0" style={{background:"rgb(6, 10, 77)",width:"100%",color:"white"}}>  </p>
                        </div>
                        <div className=" col-lg-8 col-md-7 col-sm-6 col-xs-12">
                            <p className="ps-4">
                                In India Bhopal we see the beauty in variety and are proud to embrace methods that
                                respect and nurture individual talents and aspirations. Our innovative methodology of education facilitates natural
                                learning process rather than factory style education. india bhopal implements child centred
                                pedagogy besides aiming to raise its bar in all spheres. In fact, it dovetails the traditional and successful teaching
                                practices with modern trends to inspire a generation that seeks variations.
                                A good school education must help to spot the talent early on and guide the student to make full use of it.
                                india bhopal has bench marked itself as an institution par excellence which is fully geared to
                                nurture students and enable them to meet the specific needs of the future. The increasingly dynamic world has forced
                                traditional pedagogy to adapt the latest technologies in teachings. We are quite sensitive to this, for we believe that only
                                those who are ready to change will be able to survive and succeed. However, we must ensure that while we keep pace
                                with the changes, our cultural roots are not forgotten.
                                We at india bhopal recognise the crucial importance of quality education in the early years as
                                one third of life's chances come from the environment and experiences of first six years of the life.
                                chool Our young minds that are in need of positive reinforcement are provided with the required guidance and favourable
                                conditions so that they may be able to face global issues and offer solutions.
                                The innovative approach and matchless infrastructure of india bhopal, helps the students
                                reach their fullest academic, physical and spiritual potential. The school empowers them to face challenges of the future


                                {/* {data?.data[0]?.message} */}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>

    )

}
export default Principal


