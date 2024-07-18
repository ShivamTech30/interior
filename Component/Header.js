
import { Button, Navbar, Container, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import Link from "next/link";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Header = () => {


  return (

    <div className="container-fluid">
      <div className="row bg-dark text-light">
        <div className="col-lg-6  col-md-7 d-flex justify-content-center pt-4">
          <LocationOnIcon  style={{fontSize:"20px",color:"#00bcd4"}}  />
          <p>Address:4000 maitrtech Road, Glasgow, D0hs 89GR</p>
          <h4 className="mx-3" style={{borderLeft:"1px solid white",height:"30px",marginTop:"-3px"}} ></h4>
          <CallIcon style={{fontSize:"20px" ,color:"#00bcd4"}}  />
            111111111

        </div>
        <div className="col-lg-4 col-md-1">

        </div>
        <div className="col-lg-2 col-md-4 d-flex justify-content-center pt-4">
          <Link href="#">
            <a>
            <FacebookIcon  className="mx-3   text-light" style={{fontSize:"20px"}}  />
            </a>
          </Link>
          <Link href="#">
            <a>
            <TwitterIcon className="mx-3 text-light"  style={{fontSize:"20px"}}  /> 
            </a>
          </Link>
          <Link href="#">
            <a className="mx-3 text-light"  style={{fontSize:"17px"}}>
           <b>  G+</b> 
            </a>
          </Link>
          <Link href="#">
            <a className="mx-3 text-light"  style={{fontSize:"17px"}}>
           <b>V</b> 
            </a>
          </Link>
          <Link href="#">
            <a> 
           <YouTubeIcon  className="mx-3 text-light"  style={{fontSize:"20px"}}/> 
            </a>
          </Link> 
        
        </div>
      </div>

      <div className="row">
        <div className="col-lg-2 col-md-12  m-0 p-0 d-flex justify-content-center py-4" >
          <img src="/images/logoint.png" alt="no_img" className="" style={{ height: "50px" }} />
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-9 col-md-12 py-4 p-0 m-0  ">
          <Navbar collapseOnSelect expand="md" className="p-0  nav_bg_clr1 W-100" variant="dark">
            <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <div className="s21">
                    <ul class="dropdown111">
                      <li>
                        <Link href="/">
                          <a>HOME</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="s21">
                    <ul class="dropdown111">
                      <li><a href="#">ABOUT US  </a>
                        <div className="margin_menu">
                          <ul>
                            {/* <li><Link href="About"><a>About</a></Link></li> */}
                            {/* <li><Link href="Director"><a>Director Desk</a></Link></li>
                            <li><Link href="Chairman"><a>Chairman Desk</a></Link></li>
                            <li><Link href="Principal"><a>Principal Desk</a></Link></li> */}
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="s21">
                    <ul class="dropdown111">
                      <li><a href="#"> FACILITIES  </a>
                        <div className="margin_menu">
                          <ul>
                            {/* <li><Link href="Facilities"><a>Infrastructure</a></Link></li>
                            <li><Link href="DigitalClassRooms"><a>Digital Class Rooms</a></Link></li>
                            <li><Link href="Library"><a>Library</a></Link></li>
                            <li  ><Link href="Dispensary"><a>Dispensary</a></Link></li>
                            <li  ><Link href="Transport"><a>Transport</a></Link></li> */}

                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="s21">
                    <ul class="dropdown111">
                      <li><a href="#">ACADEMICS  </a>
                        <div className="margin_menu">
                          <ul>
                            {/* <li><Link href="AdmissionProcess"><a>Admission Process</a></Link></li> */}
                            {/* <li><Link href="Achievements"><a> Achievements</a></Link></li> */}
                            {/* <li><Link href="TransferCertificat"><a>Transfer Certificate</a></Link></li> */}
                            {/* <li><Link href="#"><a>Menu - 1</a></Link></li> */}
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="s21">
                    <ul class="dropdown111">
                      <li>
                        {/* <Link href="Gallery"> */}
                        <Link href="#">
                          <a>GALLERY</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="s21">
                    <ul class="dropdown111">
                      <li>
                        <Link href="#">
                        {/* <Link href="Achievements"> */}
                          <a>ACHIEVEMENTS</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="s21">
                    <ul class="dropdown111">
                      <li>
                        <Link href="#">
                        {/* <Link href="Contact"> */}
                          <a>CONTACT</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="s21">
                    <ul class="dropdown111">
                      <li>
                        <Link href="#">
                          <a>LOGIN</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Nav>
                <Nav>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </div>

  )
}

export default Header




























// import { Button, Navbar, Container, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
// import Link from "next/link";
// import MailOutlineIcon from '@material-ui/icons/MailOutline';
// import CallIcon from '@material-ui/icons/Call';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// const Header = () => {

//   const slides = [
//     { title: "https://images.unsplash.com/photo-1445280471656-618bf9abcfe0?crop=entropy&fit=crop&fm=jpg&h=400&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1400", description: 'Lorem ipsum' },
//     { title: "https://images.unsplash.com/photo-1419064642531-e575728395f2?crop=entropy&fit=crop&fm=jpg&h=400&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1400", description: 'Lorem ipsum' },
//     { title: "https://images.unsplash.com/photo-1419064642531-e575728395f2?crop=entropy&fit=crop&fm=jpg&h=400&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1400", description: 'Lorem ipsum' }
//   ];


//   return (

//     <div className="container-fluid">
//       <div className="row bg_img" >
//         <div className="col-lg-1"></div>
//         <div className="p-0 m-0 col-lg-1 col-md-1 col-sm-4 logo_img">
//           <img src="/images/logo.png" />
//         </div>
//         <div className="p-0 col-lg-4 col-md-4 col-sm-8 school_name">
//           <span>
//             Him Academy Public School
//           </span>
//         </div>
//         <div className="p-0 col-lg-6 col-md-6 col-sm-12 left_header" >
//           <span className="left_header1" style={{ fontSize: "13px", color: "white" }}>Affiliated to CBSE , New Delhi &nbsp;
//             <span style={{ fontSize: "22px", textAlign: "center", marginTop: "3px	" }}> |</span> &nbsp;<MailOutlineIcon />  hapsvn@himacademy.com</span>
//           <div>
//             <span className="animated_color left_header2 ">Admission Open for 2021-22 | Talk to our Admission Counselor |<CallIcon /> 9459393200</span>
//           </div>
//         </div>
//       </div>
//       <div className="row nev_head" >
//         <div className="col-lg-12">
//           <Navbar collapseOnSelect expand="md" className="nav_bg_clr" variant="dark">
//             <Container>
//               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//               <Navbar.Collapse id="responsive-navbar-nav">
//                 <Nav className="me-auto">
//                   <div className="nav_btn">
//                     <li className="anchortg "><Link href="#">
//                       <a> HOME</a>
//                     </Link></li>
//                   </div>
//                   <div className="nav_drop nav_drop1">
//                     <li className="dropdown anchortg1" id="diva">
//                       ABOUT US +
//                       <li id="btn1" className="anchortg11"><Link href="#">
//                         <a> About</a>
//                       </Link></li>
//                       <li id="btn2" className="anchortg11" ><Link href="#">
//                         <a> HOME2</a>
//                       </Link></li>
//                       <li id="btn3" className="anchortg11" ><Link href="#">
//                         <a> HOME3</a>
//                       </Link></li>
//                       <li id="btn4" ><Link href="#">
//                         <a> HOME4</a>
//                       </Link></li>
//                     </li>
//                   </div>
//                   <div className="nav_drop nav_drop2">
//                     <li className="dropdown anchortg1" id="diva">
//                       ACADEMICS +
//                       <li id="btn1"><Link href="#">
//                         <a> About</a>
//                       </Link></li>
//                       <li id="btn2" ><Link href="#">
//                         <a> HOME2</a>
//                       </Link></li>
//                       <li id="btn3" ><Link href="#">
//                         <a> HOME3</a>
//                       </Link></li>
//                       <li id="btn4" ><Link href="#">
//                         <a> HOME4</a>
//                       </Link></li>
//                     </li>
//                   </div>

//                   <div className="nav_drop nav_drop3">
//                     <li className="dropdown anchortg1" id="diva">
//                       ADMISSION +
//                       <li id="btn1"><Link href="#">
//                         <a> About</a>
//                       </Link></li>
//                       <li id="btn2" ><Link href="#">
//                         <a> HOME2</a>
//                       </Link></li>
//                       <li id="btn3" ><Link href="#">
//                         <a> HOME3</a>
//                       </Link></li>
//                       <li id="btn4" ><Link href="#">
//                         <a> HOME4</a>
//                       </Link></li>
//                     </li>
//                   </div>
//                   <div className="nav_btn">
//                     <li className="anchortg"><Link href="#">
//                       <a> GALLERY</a>
//                     </Link></li>
//                   </div>
//                   <div className="nav_btn">
//                     <li className="anchortg"><Link href="#">
//                       <a> CONTACT</a>
//                     </Link></li>
//                   </div>

//                 </Nav>
//                 <Nav>
//                 </Nav>
//               </Navbar.Collapse>
//             </Container>
//           </Navbar>
//         </div>
//       </div>



//       {/* <div className="row">
//           <div className="col-lg-12">
//             <Navbar collapseOnSelect expand="md" className="nav_bg_clr" variant="dark">
//               <Container>
//                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                 <Navbar.Collapse id="responsive-navbar-nav">
//                   <Nav className="me-auto">
//                     <div className="s21">
//                       <ul class="dropdown111">
//                         <li>
//                           <Link href="#">
//                             <a>HOME</a>
//                           </Link>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="s21">
//                       <ul class="dropdown111">
//                         <li><a href="#">ABOUT US +</a>
//                           <div className="margin_menu">
//                             <ul>
//                               <li><Link href="#"><a>Menu - 1</a></Link></li>
//                               <li><Link href="#"><a>Menu - 1</a></Link></li>
//                               <li><Link href="#"><a>Menu - 1</a></Link></li>
//                               <li><Link href="#"><a>Menu - 1</a></Link></li>

//                             </ul>
//                           </div>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="s21">
//                       <ul class="dropdown111">
//                         <li><a href="#"> ACADEMICS +</a>
//                           <div className="margin_menu">
//                             <ul>
//                               <li><Link href="#"><a>Menu - 1</a></Link></li>
//                               <li><Link href="#"><a>Menu - 1</a></Link></li>
//                               <li><Link href="#"><a>Menu - 1</a></Link></li>
//                               <li className="margin_menu1"><Link href="#"><a>Menu - 1</a></Link></li>

//                             </ul>
//                           </div>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="s21">
//                       <ul class="dropdown111">
//                         <li><a href="#">ADMISSION +</a>
//                           <div className="margin_menu">
//                             <ul>
//                               <li><Link href="#"><a>Menu - 1</a></Link></li>
//                               <li><Link href="#"><a>Menu - 1</a></Link></li>
//                               <li><Link href="#"><a>Menu - 1</a></Link></li>
//                               <li><Link href="#"><a>Menu - 1</a></Link></li>
//                             </ul>
//                           </div>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="s21">
//                       <ul class="dropdown111">
//                         <li>
//                           <Link href="#">
//                             <a>HOME</a>
//                           </Link>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="s21">
//                       <ul class="dropdown111">
//                         <li>
//                           <Link href="#">
//                             <a>HOME</a>
//                           </Link>
//                         </li>
//                       </ul>
//                     </div>
//                   </Nav>
//                   <Nav>
//                   </Nav>
//                 </Navbar.Collapse>
//               </Container>
//             </Navbar>
//           </div>
//         </div> */}
//       <div className="mb-5 row">
//         <div className="col-lg-12">
//           <div class="dropdown">
//             <button class="dropbtn">Dropdown</button>
//             <div class="dropdown-content">
//               <a href="#">Link 1</a>
//               <a href="#">Link 2</a>
//               <a href="#">Link 3</a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mt-5 row">
//         <div className="col-lg-12">
//           <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} style={{ paddingTop: "-100px!important" }} >
//             {slides.map((slide, index) => {
//               return <div class="carousel-inner" role="listbox">
//                 <div className='carousel items1' style={{ marginTop: "20px" }} key={index} role="listbox">
//                   <img
//                     src={slide.title}
//                     height={500} width={1500}
//                     alt="sorry_no_img"
//                   />
//                 </div>
//               </div>
//             })}
//           </Carousel>

//         </div>

//       </div>
//     </div>

//   )
// }

// export default Header