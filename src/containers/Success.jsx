import React from "react";
import '../styles/components/Success.css'

const Success = () => (
    <div className="Success">
        <div className="Success-content">
            <h2>Oscar, thank for buying.</h2>
            <span>Your order will delivered at your address in 3 days.</span>
            <div className="Success-map">
                Google Maps
            </div>
        </div>
    </div>
);

export default Success;
