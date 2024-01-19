import React from "react";
import './stylethankyou.css';
import { Link } from "react-router-dom";

function Thankyou (){
    return (
      <div className="app-container">
        <div className="row">
          
          <div className="col no-gutters">
            <Checkout />
          </div>
        </div>
       </div>
    )
}

const Checkout = (props) => (
 <div className="checkout">
    <div className="checkout-container">
     <h1 className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor text-center">Thank you for Ordering</h1>
     <h4 className="text-[0.5rem] lg:text-[1.5rem] font-bold tracking-wide  text-color-#ffffff text-center">Your order will be delivered Soon</h4>
     <div>
      <Link to = {"/"} className="hover:shadow-lg transition-all ease-in-out duration-100 text-center">Go to Home Page</Link>
      </div>
      
    </div>
 </div>
);
export default Thankyou;