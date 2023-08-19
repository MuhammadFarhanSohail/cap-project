import React from "react";  
import pic from "./images/pic.jpg"
import pic2 from "./images/pic2.jpg"
import "./About.css"

function About(){
    return(
<div className="about-container">
    <h2>Discover Our Story</h2>
    <div className="image-container">
      <img src={pic} alt="pic" className="pic-image" />
      <img src={pic2} alt="pic2" className="pic2-image" />
    </div>

    <p>
                At Little Lemon Restaurant, we believe in the power of fresh and flavorful ingredients. Our culinary team is dedicated to bringing you a delightful dining experience that tantalizes your taste buds and leaves you craving for more.
            </p>
            <p>
                Established with a passion for food and a commitment to quality, we take pride in sourcing the finest locally grown produce and crafting each dish with care. From our zesty lemon-infused specialties to our hand-picked selection of wines, every aspect of your visit is designed to create a memorable moment.
            </p>
            <p>
                Whether you're joining us for a romantic dinner, a family celebration, or simply a casual outing, our cozy ambiance and attentive staff are here to make your visit exceptional. We look forward to serving you and sharing our love for exquisite cuisine.
            </p>
            <p>Come experience the essence of Little Lemon Restaurant today!</p>
        

</div>
        
    );
}

export default About;