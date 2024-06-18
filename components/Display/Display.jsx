import React,{useContext} from "react";  
import './Display.css';
import star_icon from'../assets/star_icon.png'
import star_dull_icon from'../assets/star_dull_icon.png'
import { ShopContext } from "../../context/ShopContext";

const Display = (props) => {
    const{product} = props;

    const {AddToCart} = useContext(ShopContext);

    return (
        <div className="display">
           <div className="display-left">
                <div className="display-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="display-image-display">
                    <img className="main-image" src={product.image} alt="" />
                </div>
            </div>
          
           <div className="display-right">
            <h1>{product.name}</h1>
            <div className="display-right-star"> 
             <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>122</p>
            </div>
           <div className="display-right-prices">
                <div className="display-right-price-old">${product.old_price}</div>
                < div className="display-right-price-new">${product.new_price}</div>  
            </div>

            <div className="display-right-discription">
                static paragraph discription cuz i am too lazy to assign all of them 
            </div>
            <div className="display-right-size">
            <h1>Select size</h1>
            <div className="display-right-sizes">
                <div>s</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
            </div>
            <button onClick={()=>AddToCart(product.id)}>Add to cart</button>
            <p className="display-right-category"><span>category:</span> women ,t-shirt,crop top</p>
            <p className="display-right-category"><span>Tags:</span> modern ,Latest</p>
           </div>
        </div>
    );
};
export default Display;