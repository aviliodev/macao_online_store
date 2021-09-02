import React, {useContext} from "react";
import AppContext from '../context/AppContext'
import Map from '../components/Map'
import '../styles/components/Success.css'

const Success = () => {
    const {state} = useContext(AppContext);
    const {buyer} = state;
    return (    
        <div className="Success">
            <div className="Success-content">
                <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
                <span>Your order will delivered at your address in 3 days.</span>
                <div className="Success-map">
                    <Map/>
                </div>
            </div>
        </div>
    )
};

export default Success;
