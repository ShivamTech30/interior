
import React from 'react'
import useSWR from 'swr';
import Layout from '../Component/Layout'

const About = () => {

    return (
        <Layout>

            <div className="container-fluid">
                <div className="row">
                    {/* <div className="col-lg-1"></div> */}
                    <div className="col-lg-12">
                        <button className="pl-2 pr-2 aboutbutton">
                            <h2 >
                                About School
                            </h2></button><br />

                        The India Bhopal, Behind Fine Avenue in the lake city of Bhopal in a spacious building. The
                        institution is imparting education to the students on the lines of Public Schools. The emphasis is on providing the child with an environment
                        conducive to his growth where he finds his own talents & develops them to reach the pinnacle of success. We propose to offer the curriculum as
                        prescribed by CBSE (Central Board of Secondary Education) New Delhi.

                    </div>

                    {/* <div className  ="col-lg-1"></div> */}
                </div>
                <div className="row ">
                    <div className="col-lg-1"></div>
                    <div className="mt-4 col-lg-5">
                        <button className="pl-2 pr-2 Library">
                            <h3 >
                                Library
                            </h3></button><br />

                        The Institution is equipped with knowledge enhancing children encyclopedias, Past time stories, illustrated picture books, educational CD's
                        and exclusively developed software programs.
                        Avariety of Journals, periodicals, maps, books, life histories and autobiographies are available.
                        Books are issued during the Library periods.
                        Library card is not transferable.
                    </div>
                    <div className="mt-4 col-lg-5">
                        <button className="pl-2 pr-2 Science">
                            <h3 >
                                Science Labs
                            </h3></button><br />

                        The institution has separate labs for all departments and is well equipped with Physics Lab, Chemistry Lab, Biology Lab as per CBSE norms
                        Science Laboratories are fully equipped and designed to meet the needs of the children.
                        Sufficient weekly Practical periods in all concerned subjects.
                        A complete record of Practical and project works is a must for appearing for theory papers,
                    </div>
                </div>
                <div className="col-lg-1"></div>
                <div className="mt-4 mb-4 col-lg-12" style={{ marginLeft:"0px" }}>
                    <button className="pl-2 pr-2 Computer">
                        <h2>
                            Computer Science
                        </h2></button><br />
                    We have an ultra modern computer department. Both the Junior & Senior labs have computer systems that includes latest machines &
                    peripherals. The training in computer application is imparted to students right from Class 1st standard. Internet is the richest & the most
                    comprehensive source of information & knowledge of any topic under the sun. This faculty is provided to our students who surf the cyber space
                    every day. The students are encouraged to access for this purpose. The teachers are required to evaluate these activities also throughout the year
                    and award grades accordingly.

                </div>
            </div>

        </Layout>
    )

}
export default About

