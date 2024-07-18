import { SRLWrapper } from "simple-react-lightbox";
import Layout from '../Component/Layout'
import useSWR from "swr";

 

const Gallery = () => { 
  const slides = [
    { title: "/images/glr1.jpg ", description: 'View Gallery' },
    { title: "/images/glr2.jpg ", description: 'View Gallery' },
    { title: " /images/glr3.jpg", description: 'View Gallery' },
    { title: "/images/glr2.jpg ", description: 'View Gallery' },
    { title: "/images/glr3.jpg ", description: 'View Gallery' },
    { title: " /images/glr1.jpg", description: 'View Gallery' },
  ];

  return (
    <Layout>
      <SRLWrapper>
        <div className="container-fluid">
          <div className="mb-3 row">
            {slides.map((item, i) => {
              return (
                <div key={i} className="col-lg-4">
                  <img
                    src={item?.title}
                    className="mt-3 imght "
                    alt="no_img"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </SRLWrapper>
    </Layout>
  );
};

export default Gallery


// html,
// body {
//   padding: 0;
//   margin: 0;
//   font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
//     Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
// }

// ul li {
//   list-style: none;
// }

// a:hover {

//   text-decoration: none !important;
// }

// * {
//   box-sizing: border-box;
// }


// /* header========= start */
// @media only screen and (min-width: 1000px) and (max-width: 1460px) {
//   .bg_img {
//     background: url(../public/images/himad.png) no-repeat center;
//     background-size: cover;
//     height: auto;
//   }
//   .school_name {
//     margin-top: 12px !important;
//   }
// }
// @media only screen and (min-width: 1200px) and (max-width: 1460px) {
//   .left_header {
//     text-align: center;
//     margin-top: 10px !important;
//   }
// }
// @media only screen and (min-width: 300px) and (max-width: 999px) {
//   .left_header {
//     background: rgb(94, 168, 211);
//   }
// }
// @media only screen and (min-width: 1000px) and (max-width: 1200px) {
//   .left_header1 {
//     margin-left: 95px;
//   }
//   .left_header2 {
//     margin-left: 33px;
//   }
//   .left_header {
//     margin-top: 10px !important;
//   }
// }
// @media only screen and (min-width: 300px) and (max-width: 1000px) {
//   .logo_img,
//   .school_name {
//     background-color: rgb(3, 10, 105);
//   }
//   .left_header {
//     text-align: center;
//   }
// }

// @media only screen and (min-width: 587px) and (max-width: 1000px) {
//   .logo_img {
//     text-align: center !important;
//   }
//   .school_name > span {
//     padding-left: 32px !important;
//   }
//   .left_header {
//     text-align: center;
//   }
// }
// @media only screen and (min-width: 300px) and (max-width: 587px) {
//   .logo_img {
//     text-align: center !important;
//   }
//   .school_name {
//     text-align: center !important;
//   }
// }

// .school_name {
//   font-size: 27px;
//   color: white;
//   font-weight: 1000;
//   font-family: a;
//   /* text-align: center; */
// }

// .animated_color {
//   font-family: roboto;
//   width: 100px;
//   height: 100px;
//   color: rgb(248, 240, 240);
//   animation-name: example;
//   animation-duration: 3s;
//   animation-iteration-count: infinite;
//   font-weight: 600;
// }

// /* header=========end */

// @keyframes example {
//   from {
//     color: rgb(241, 237, 237);
//   }
//   to {
//     color: yellow;
//   }
// }

// /* main_navbar---header1 --start//// */

// /* #divaa2 {
//   position: absolute;
//   color: aqua;
// }
// #divaa2:hover {
//   position: absolute;
//   color: aqua;
//   background: rgb(177, 175, 175);
//   background-color: bisque;
// }
// #divaa2:hover > #btnb1 {
//   top: 20px;
//   color: rgb(241, 190, 190);
// }
// #divaa2:hover > #btnb2 {
//   top: 40px;
//   color: rgb(219, 192, 192);
// }

// #divaa2:hover > #btnb3 {
//   top: 60px;
//   color: rgb(218, 188, 188);
// }
// #divaa2:hover > #btnb4 {
//   top: 80px;
//   color: rgb(197, 180, 180);
// }
// #btnb1 {
//   position: absolute;
//   top: 0px;
//   background: transparent;
//   color: transparent;
//   border: 2.5px solid transparent;
//   transition: 0.2s;
// }
// #btnb2 {
//   position: absolute;
//   top: 0px;
//   background: transparent;
//   color: transparent;
//   border: 2.5px solid transparent;
//   transition: 0.2s;
// }
// #btnb3 {
//   position: absolute;
//   top: 0px;
//   background: transparent;
//   color: transparent;
//   border: 2.5px solid transparent;
//   transition: 0.2s;
// }
// #btnb4 {
//   position: absolute;
//   top: 0px;
//   background: transparent;
//   color: transparent;
//   border: 2.5px solid transparent;
//   transition: 0.2s;
// } */

// /* //navbar_main// */

// .dropdown > #btn1:hover {
//   background-color: yellow;
// }
// .navdrop {
//   margin-top: 10px;
// }
// .navdrop:hover {
//   background-color: red !important;
// }

// .nev_head {
//   margin-top: -3px !important;
// }
// @media only screen and (min-width: 460px) and (max-width: 767px) {
//   .nav_drop:hover {
//     margin-bottom: 100px !important;
//   }
//   .nav_drop {
//     text-align: center;
//     padding-top: 10px;
//   }
//   .anchortg {
//     text-align: center;
//     padding-top: 10px;
//   }
// }
// .anchortg a {
//   color: rgb(7, 7, 7) !important;
//   margin-left: 30px;
//   text-decoration: none !important;
//   font-weight: 600;
// }

// .anchortg :hover {
//   color: rgb(241, 239, 239) !important;
//   background-color: rgb(3, 10, 105);
// }

// .nav_btn:hover > .anchortg > a {
//   color: rgb(248, 246, 246) !important;
// }
// .nav_btn:hover {
//   background-color: rgb(6, 10, 77);
//   padding-top: 10px;
//   padding-bottom: 10px;
//   padding-right: 25px;
//   margin-top: -4px;
// }

// .anchortg1:hover {
//   color: rgb(248, 246, 246) !important;
// }
// .nav_drop1:hover > .anchortg1,
// .nav_drop2:hover > .anchortg1,
// .nav_drop3:hover > .anchortg1,
// .nav_drop4:hover > .anchortg1 {
//   color: aliceblue;
// }
// .nav_drop1:hover {
//   background-color: rgb(6, 10, 77);
//   padding-top: 10px;
//   padding-bottom: 10px;
//   padding-left: 10px;
//   padding-right: 10px;
//   margin-top: -4px;
//   margin-left: 10px;
// }
// .nav_drop2:hover {
//   background-color: rgb(6, 10, 77);
//   padding-top: 10px;
//   padding-bottom: 10px;
//   padding-left: 10px;
//   padding-right: 10px;
//   margin-top: -4px;
// }
// .nav_drop3:hover {
//   background-color: rgb(6, 10, 77);
//   padding-top: 10px;
//   padding-bottom: 10px;
//   padding-left: 10px;
//   padding-right: 10px;
//   margin-top: -4px;
// }
// .navbar-dark .navbar-toggler {
//   background-color: rgb(96, 96, 99);
// }

// #diva {
//   margin-left: 15px;
//   margin-right: 15px;
//   font-weight: 600;
// }
// #diva:hover {
//   color: rgb(247, 239, 239);
// }
// #diva:hover > #btn1 a {
//   top: 33px;
//   color: rgb(10, 10, 10);
//   background-color: rgb(243, 243, 237);
//   font-weight: 100;
//   padding-left: 30px;
//   padding-right: 47px;
//   margin-left: -25px;
//   text-align: center;
// }
// #diva:hover > #btn2 a {
//   top: 54px;
//   color: rgb(10, 10, 10);
//   background-color: rgb(243, 243, 237);
//   font-weight: 100;
//   padding-left: 30px;
//   padding-right: 47px;
//   margin-left: -25px;
//   text-align: center;
// }

// #diva:hover > #btn3 a {
//   top: 74px;
//   color: rgb(12, 12, 12);
//   background-color: rgb(243, 243, 237);
//   font-weight: 100;
//   padding-left: 30px;
//   padding-right: 47px;
//   margin-left: -25px;
//   text-align: center;
// }
// #diva:hover > #btn4 a {
//   top: 94px;
//   color: rgb(19, 18, 18);
//   background-color: rgb(243, 243, 237);
//   font-weight: 100;
//   padding-left: 30px;
//   padding-right: 47px;
//   margin-left: -25px;
//   text-align: center;
// }

// #btn1 a {
//   position: absolute;
//   top: 0px;
//   background: transparent;
//   color: transparent;
//   border: 2.5px solid transparent;
//   transition: 0.2s;
// }
// #btn2 a {
//   position: absolute;
//   top: 0px;
//   background: transparent;
//   color: transparent;
//   border: 2.5px solid transparent;
//   transition: 0.2s;
// }
// #btn3 a {
//   position: absolute;
//   top: 0px;
//   background: transparent;
//   color: transparent;
//   border: 2.5px solid transparent;
//   transition: 0.2s;
// }
// #btn4 a {
//   position: absolute;
//   top: 0px;
//   background: transparent;
//   color: transparent;
//   border: 2.5px solid transparent;
//   transition: 0.2s;
// }

// /*main_navbar-- header1--- end */



// @-webkit-keyframes zoom {
//   from {
//     -webkit-transform: scale(1, 1);
//   }
//   to {
//     -webkit-transform: scale(1.5, 1.5);
//   }
// }

// @keyframes zoom {
//   from {
//     transform: scale(1, 1);
//   }
//   to {
//     transform: scale(1.5, 1.5);
//   }
// }

// .carousel-inner .item > img {
//   -webkit-animation: zoom 20s;
//   animation: zoom 20s;
// }
// .carousel-inner .items1 > img {
//   -webkit-animation: zoom 20s;
//   animation: zoom 20s;
// }












// /* test csss//// */
//  .dropdown111 {
//   margin: 0;
//   padding: 0;
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -ms-flex-wrap: wrap;
//   flex-wrap: wrap;
//   list-style: none;
//   height: 50px;
//   color: #000;
// }

// .dropdown111 li {
//   position: relative;
//   margin: 10px;
// }

// .dropdown111 li a {
//   display: block;
//   padding: 0 10px;
//   height: 50px;
//   line-height: 50px;
//   color: #424242;
//   cursor: pointer;
//   text-decoration: none;
// }

// .dropdown111 li div ul {
//   position: absolute;
//   margin: 0;
//   padding: 0;
//   list-style: none;
//   background-color: #fcf8f8;
//   width: 200px;
//   left: 0;
//   max-height: 0;
//   -webkit-transition: max-height .5s;
//   -o-transition: max-height .5s;
//   transition: max-height .5s;
//   overflow: hidden;
// }

// .dropdown111 li div ul li a {
//   height: 35px;
//   line-height: 35px;
//   color: rgb(7, 7, 7);

// }
// .dropdown111 li div{
//   margin-bottom: 40px;
// }
// .dropdown111 li div ul li a:hover {
//   background-color: rgba(248, 244, 244, 0.9);
//   color: #161616;

// }

// .dropdown111 li:hover> div ul {
//   max-height: 400px;
//   z-index: 1;
// }

// .dropdown111 li:hover>a {
//   background-color: rgb(8, 13, 85);
//   color: #f3f0f0;
// }

// @media only screen and (min-width: 300px) and (max-width: 767px) {

//   .s21:hover{
//     margin-bottom: 170px;
//   }
//   .dropdown111 li:hover>div ul {
//     padding: 0px;
//   }
// } 

// /*main_navbar-- header1--- end */

// .dropbtn {
//   background-color: #04AA6D;
//   color: white;
//   padding: 16px;
//   font-size: 16px;
//   border: none;
// }

// .dropdown {
//   position: relative;
//   display: inline-block;
// }

// .dropdown-content {
//   display: none;
//   position: absolute;
//   background-color: #f1f1f1;
//   min-width: 160px;
//   z-index: 1;
// }

// .dropdown-content a {
//   color: black;
//   padding: 12px 16px;
//   text-decoration: none;
//   display: block;
// }

// .dropdown-content a:hover {background-color: #ddd;}

// .dropdown:hover .dropdown-content {display: block; 
//   background-color: aqua;
// }

// .dropdown:hover .dropbtn {background-color: #3e8e41;}


// /* nevmenufinal---start */
// .nav_bg_clr1{
//   margin-top: -11px;
// }
// .slider_home_mt{
//   margin-top: -6.5px !important;
// }
// @media only screen and (min-width: 300px) and (max-width: 767px) {
//   .slider_home_mt{
//     margin-top: 0px !important;
//   }
//   .nav_bg_clr1{
//     margin-top: 0px;
//   }

// } 

// /* aboutSchool ---------start */
// .anim_down{

//   position: relative;
//   animation-name: example;
//   animation-duration: 1s;
// }
// @keyframes example {

//   100%  { left:0px; top:0px;}
//   0% { left:0px; top:200px;}
// }
// .anim_down>div>h3{
//   font-weight: 600;
//   color:#4495d1 ;
// }
// .About_Scl_border{
//   border: 3px solid #4495d1;
// }

// .pera_space{
//   word-spacing: 1px;
// }

// .MORE_ABOUT_btn{
//   margin-top: 20px;
//   border: 2px solid #4495d1;
//   padding: 11px 20px;
//   color:#4495d1 ;
//   font-weight: bold;
//   box-shadow: none;
// }
// .MORE_ABOUT_btn:hover{
//   background: #4495d1 !important;
// }

// .MORE_ABOUT_btn>a :hover{
//  background: #4495d1 !important;
//  padding: 11px 20px;
//   color:#f8fafc ;
//   box-shadow: none;
//   font-weight: bold;
// }
// .MORE_ABOUT_btn:hover>a {
//   background: #4495d1 !important;
//   color: #f3f0f0;
// }



// /* aboutSchool -------end*/
// /* ////////////////////////////////// */
// /* Scl_Facility ---------start */

// .Scl_Facility h1,.Scl_Facility p{
//   text-align: center;
// }
// .Scl_Facility h1,.Scl_Facility span{
//   font-weight: 600;
// }
// .Scl_Facility span{
//   color: rgb(98, 161, 233);
//   text-align: center;
// }

// .pac:hover {
//   transition: 0.4s;
//   transform: translateY(-6px);
//   box-shadow: 0 25px 60px 0 rgb(0 0 0 / 20%);
//   background: white;
// }

// .ASbg_color{
//   background-color: #dff5f2;
// }

// .pac > span>.MuiSvgIcon-root{
//   font-size: 40px;
//   border-radius: 50%;
//   color: white;
//   width: 45%;
//   height: 44px;
//   padding: 4px;
//   background-color: #40a8ee; 

// }
// .Infrastructure_clr:hover{
//   color: black !important;
// }
// .Infrastructure_clr{
//   margin-left: 40px;
//   color: black !important;
//   font-size: 21px;

// }
// .icon_bg{
//   text-align: center;




//   display: inline-block;
// }

// .head_line{
//   background-color: #4494d1;
//   color: white;
// }
// .head_line h4{
// padding-left: 110px;
// }
// /* Scl_Facility ---------end */
// /* /////////////////////////// */
// /* HPGallery ---------start*/



// .parent {
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
//   position: relative;
//   display: inline-block;
// cursor: pointer;
// }

// .child img {
//   width: 100%;
//   height: 200px;
//   background-size: cover;
//   background-repeat: no-repeat;
//   -webkit-transition: all .8s;
//   -moz-transition: all .8s;
//   -o-transition: all .8s;
//   transition: all .8s;
// }


// .a_1{
//   font-size: 15px;
//   text-align: center;
//   margin: auto;
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   height: 50px;
//   cursor: pointer;
//   border: 2px solid rgb(241, 239, 239);
//   height: 28px;
//   padding-left: 10px;
//   padding-right: 10px;
//   background: #4495d1;
//   color: white;

// }

// .parent:hover .child img, .parent:focus .child img {
//   -ms-transform: scale(1.2);
//   -moz-transform: scale(1.2);
//   -webkit-transform: scale(1.2);
//   -o-transform: scale(1.2);
//   transform: scale(1.2);
// }

// .parent:hover .child>img:before, .parent:focus .child>img:before {
//   display: block;
//   text-align: center;
// }

// .parent:hover .a_1, .parent:focus .a_1 {
//   display: block;
//   text-align: center;

// }
// .child>img:before,
// .child>img:hover{
//   opacity: 0.4;
//   background-color: rgba(52,73,94,0.75);
// }

// .child>img:before {
//   content: "";
//   display: none;
//   height: 100%;
//   width: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
// }
// /* HPGallery ---------end */

// /* ///////////////////////////////////////////// */
// /* homenewscldr---------start*/

// .Latest_News>button{
// width: 100%;
// height: 40px;
// background: #4495d1;
// color: white;
// font-size: 18px;
// border: 2px solid #4495d1;}


// .School_Calendar>button{
//   width: 100%;
//   height: 40px;
//   background: #4495d1;
//   color: white;
//   font-size: 18px;
//   border: 2px solid #4495d1;}

//   .Get_Touch{
//     background-color: rgb(76, 76, 110);
//     text-align: center;
//   }
//   .Get_Touch>h4{
//     text-align: center;
//     color: white;
//     font-weight: 600;
//   }
//   .Get_Touch > input{
//     width: 90%;
//     height: 35px;
//     margin-bottom: 10px;
//     background-color: #7784a0;
//   border: 1px solid rgb(190, 188, 188);
//    border-radius: 3px;
//    padding: 6px 12px;
//   }
//   ::placeholder {
//     color:white !important;

//   }
//   .submit_btn input{
//     width: 90%;
//     height: 35px;
//     margin-bottom: 10px;
//     background-color: #4495d1;
//     border: 0px;
//     color:white !important;
//   }
//   ::placeholder {
//     color:white !important;

//   }

// /* homenewscldr ---------end */

// /* Footer---------start*/
// .bg_footer_{
//   background-color:rgb(38, 38, 88);
// }

// .AS_footer_line,
// .QL_footer_line
// {
//   border: 2px solid #ecedee;
//   width: 80px;
// }
// .AS_footer_pera{
//   color: white;
// }
// .AS_footer_head h4{
//   color: white;
// }
// .QL_footer_ul ul li{
//   color: white;
//   margin-left: -36px;
//   padding-top: 5px;

// }
// .bg_footer_right{
//   background-color: #4495d1;  
//   color: white;
// }
// .AS_footer_line1{
//   border: 1px solid #ecedee;
// }

// .sma1{
//   margin-right: 5px !important;
//   margin-top: 5px;
// }
// @media only screen and (min-width: 300px) and (max-width: 767px) {}
// @media only screen and (min-width:320px) and (max-width:530px){
//   .media_ytb a img{
//     width: 320px;
//     text-align: center !important;
//     justify-content: center !important;
//   }
// }
// @media only screen and (min-width:320px) and (max-width:530px){
//   .media_ytb a {

//     text-align: center !important;
//     justify-content: center !important;
//   }
// }

// /* /* Footer ---------end */

// /* About CSS START */
// .aboutbutton ,.Computer{
//   border:none;
//    background-color:rgb(38, 38, 88);
//   color:white;border-radius: 10px;
//   margin-bottom: 9px;
// }
// .aboutbutton h2 ,.Computer h2,.FEATURES h2{
//   margin-top: 6px;
//   padding-left: 8px;
//   padding-right: 8px;
//   font-size: 25px !important;
// }
// .Library,.Science{
//   border:none;
//   background-color:rgb(85, 163, 226);
//  color:white;border-radius: 10px;
//  margin-bottom: 5px;
// }
// .Library h3,.Science h3 {
//   margin-top: 6px;
//  font-size: 20px !important;
//  padding-left: 6px;
//   padding-right: 6px;
// }
// /* About CSS end */

// /* DIRECTORE CSS START */
// .name_drt{
//   background-image: linear-gradient(
//     90deg
//     ,rgb(38, 38, 88),#4495d1);
//     color: white;
// }

// .drt_img h2,
// .prc_img h2,
// .crmn_h2{
//   margin-top: 15px;
// }

// /*  DIRECTORE CSS END*/

// /*  AdmissionProcess CSS start*/

// .ap_head{
//   text-align: center; 
// }
// .ap_head h3{
//  font-weight: bold; 
// }
// .ap_head1{
//   background-color :#d3e9eb;
// }
// .ap_head1 > p{
//   font-weight: bold; 
// }
// .ap_head2{
//   background: linear-gradient(to right, #55caf2, #4494d0);
//   width: 49% !important;
//   margin-right: 22px;
//   color: white;
// }
// .ap_head3{
//   background: linear-gradient(to right, #55caf2, #4494d0);
//   width: 49% !important;
//   color: white;
// }
// .whit_bordr{
//   border: 1px solid white;
//    margin-top: 17px;
//    margin-bottom: 14px;

//   padding: 8px;
// }
// .whit_bordr h4{
//   font-weight: bold;
// }
// .whit_bordr button{
//   color: black !important;
//   border: none;
//   padding: 10px;
//   margin-top: 12px;
//   margin-bottom:10px;
// }
// .ap_head5{
//   background-color:rgb(38, 38, 88) ;
//   margin-top: 10px !important;
//   color: white;
//   padding-top: 8px;
// }
// /*  AdmissionProcess CSS END*/


// .imght{
//   height: 200px;
//   width: 95%;
// }

// .bg_cont_blue{
//   background-color: rgb(32, 44, 85);
//   height: 500px;
//   color: white;
// }
// .sub_ipt input{
//   width: 86.5%;
//   margin-top: 25px;
//   height: 40px;
//   padding-left: 20px; 
//   font-size: 16px !important;
// }
// .nme_ipt input{ 
//   height: 40px; 
//   padding-left: 20px;
// }
// .nme_ipt ::placeholder,
// .nme_ipt1 textarea::placeholder,
// .msg_ipt  input ::placeholder 
// {
//   color: #000 !important;
// }
// .nme_ipt1>input{ 
//  padding-top: 0px !important;
// }
// .nme_ipt1 textarea{
//   margin-top: 25px;
// }

// .msg_ipt  input{
//   width: 86.5%;
//   margin-top: 25px;
//   height: 140px;
// }
// .sbmt_ipt button{ 
//   margin-top: 25px; 
//   border: 1px solid white;
//   background-color: rgba(63, 164, 231, 0.616);
//   color: white;
//   padding-left: 20px;
//   padding-right: 20px;
//   padding-bottom: 5px;
//   padding-top: 5px;
//   border-radius: 5px;
// }

// .anim_cls{
//   position: relative;
//   animation-name: example1;
//   animation-duration: 4s;
// }
// @keyframes example1 {
//   0%   { left:0px; top:0px;}
//   25%  { left:200px; top:0px;}

// }
// .anim_cls1{
//   position: relative;
//   animation-name: example11;
//   animation-duration: 4s;
// }
// @keyframes example11 {
//   0%   { left:0px; top:0px;}
//   25%  { right:200px; right:110px;}

// }