import React, {useContext} from 'react'
import Product from './Product'
import AppContext from '../context/AppContext'
import '../styles/components/Products.css'

const Products = () => {
    // Traemos el state y la función addToCart del AppContext, que a su vez lo trae de useInitialState
    const {state, addToCart} = useContext(AppContext);
    // Sacamos el arreglo productos del state
    const {products} = state;

    const handleAddToCart = (product) => {
        addToCart(product)
    }
    return(
        <div>
            <div className="Products">
                <div className="Products-items">
                    {products.map(product => (
                        <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products
