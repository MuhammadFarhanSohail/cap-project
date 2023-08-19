/*import React from "react";
import './Main.css';
import p1 from './images/p1.jpg';
import p2 from './images/p2.jpg';
import p3 from './images/p3.jpg';
function Main(){
    return (
    <main className="main">
<p>
                Welcome to our esteemed establishment, where culinary artistry meets impeccable service. At Little lemon restaurant, we are committed to offering a sophisticated dining experience that marries the finest ingredients with exquisite flavors.
            </p>
            <p>
                Our culinary team, led by master chefs with a passion for excellence, crafts each dish with precision and creativity. We believe in the power of fresh, locally sourced ingredients, and our menu showcases a symphony of tastes designed to captivate even the most discerning palates.
            </p>
            <p>
                Nestled in the heart of Toronto, our restaurant boasts an ambiance that reflects both elegance and comfort. Whether you're here for a business luncheon, an intimate dinner, or a special celebration, our attentive staff is dedicated to ensuring every moment of your visit is nothing short of exceptional.
            </p>
            <p>
                Join us on a journey through the world of gastronomy. Experience the art of fine dining, where every detail is carefully orchestrated to create a seamless and unforgettable experience. We look forward to hosting you and creating culinary memories together.
            </p>
      <div className="image-container">

      <img src={p2} alt="p2" className="p2" />
      <img src={p3} alt="p3" className="p3" />
    </div>
    </main>
    );
}

export default Main;*/
import React from "react";
import './Main.css';
import p1 from './images/p1.jpg';
import p2 from './images/p2.jpg';
import p3 from './images/p3.jpg';

function Main() {
    return (
        <main className="main">
            <h2>Welcome to Little Lemon Restaurant</h2>
            <p>
                Welcome to our esteemed establishment, where culinary artistry meets impeccable service. At Little Lemon Restaurant, we are committed to offering a sophisticated dining experience that marries the finest ingredients with exquisite flavors.
            </p>
            <p>
                Our culinary team, led by master chefs with a passion for excellence, crafts each dish with precision and creativity. We believe in the power of fresh, locally sourced ingredients, and our menu showcases a symphony of tastes designed to captivate even the most discerning palates.
            </p>
            <p>
                Nestled in the heart of Toronto, our restaurant boasts an ambiance that reflects both elegance and comfort. Whether you're here for a business luncheon, an intimate dinner, or a special celebration, our attentive staff is dedicated to ensuring every moment of your visit is nothing short of exceptional.
            </p>
            <p>
                Join us on a journey through the world of gastronomy. Experience the art of fine dining, where every detail is carefully orchestrated to create a seamless and unforgettable experience. We look forward to hosting you and creating culinary memories together.
            </p>
            <div className="image-container">
                <img src={p2} alt="p2" className="p2" />
                <img src={p3} alt="p3" className="p3" />
            </div>
        </main>
    );
}

export default Main;
