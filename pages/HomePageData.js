import Link from "next/link"
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import CodeIcon from '@material-ui/icons/Code';
import RedeemIcon from '@material-ui/icons/Redeem';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

const HomePageData = () => {


    return (
        <div className="p-0 container-fliud" style={{ backgroundColor: "#00bcd4" }}>
            <div className="container py-5">
                <div className="row py-5">
                    <div className="col-sm-3 text-center text-light py-5">
                        <LocalDrinkIcon style={{fontSize:"50px"}} />
                        <h1 className="" style={{fontSize:"55px"}}><b> 100 </b></h1>
                        <h5 style={{fontSize:"17px"}}>PROJECTS ANNUALLY</h5>
                    </div>
                    <div className="col-sm-3 text-center text-light py-5">
                        <RedeemIcon style={{fontSize:"50px"}} />
                        <h1 className="" style={{fontSize:"55px"}}><b> 45 </b></h1>
                        <h5 style={{fontSize:"17px"}}>AWARDS</h5>
                    </div>
                    <div className="col-sm-3 text-center text-light py-5">
                        <CodeIcon style={{fontSize:"50px"}} />
                        <h1 className="" style={{fontSize:"55px"}}><b> 98% </b></h1>
                        <h5 style={{fontSize:"17px"}}>POSITIVE REVIEWS</h5>
                    </div>
                    <div className="col-sm-3 text-center text-light py-5">
                        <EmojiPeopleIcon style={{fontSize:"50px"}} />
                        <h1 className="" style={{fontSize:"55px"}}><b> 147K</b></h1>
                        <h5 style={{fontSize:"17px"}}>HAPPY CUSTOMERS</h5>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default HomePageData;