import Link from "next/link"
const AboutSchool = () => {
    return (
        <div className="container-fluid" style={{ backgroundColor: "lightskyblue" }}>
            <div className="row py-5">
                <div className=" col-sm-10 d-flex justify-content-center">
                  <h3 style={{color:"white"}}><b>  COMFORTABLE AND AFFORDABLE INTERIOR DESIGN PROJECTS </b></h3>  
                </div>
                <div className=" col-sm-2 d-flex justify-content-center">
                    <div>
                         
                    <Link href="#">
                        <button className="Read_mr">READ MORE</button>
                    </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutSchool;