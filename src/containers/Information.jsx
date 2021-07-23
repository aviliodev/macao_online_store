import React from "react";
import '../styles/components/Information.css'

const Information = () => (
    <div className="Information">
        <div className="Information-content">
            <div className="Information-head">
                <h2>Contact Information</h2>
            </div>
            <div className="Information-form">
                <form action="">
                    <input type="text" placeholder="Complete Name"name="name" id="" />
                    <input type="text" placeholder="Email"name="email" id="" />
                    <input type="text" placeholder="Address"name="address" id="" />
                    <input type="text" placeholder="Apto"name="apto" id="" />
                    <input type="text" placeholder="City"name="city" id="" />
                    <input type="text" placeholder="Country"name="country" id="" />
                    <input type="text" placeholder="Postcode"name="postcode" id="" />
                    <input type="text" placeholder="Phone"name="phone" id="" />
                </form>
            </div>
            <div className="Information-buttons">
                <div className="Information-back">
                    Back
                </div>
                <div className="Information-next">
                    Pay
                </div>
            </div>
        </div>
        <div className="Information-sidebar">
            <h3>Your Order:</h3>
            <div className="Information-item">
                <div className="Information-element">
                    <h4>Item Name</h4>
                    <span>$10</span>
                </div>
            </div>
        </div>
    </div>
);

export default Information;
