import { Link } from "react-router-dom";
import React from "react";
import pizzaResmi from "../assets/Pizza.png";
import hamburgerResmi from "../assets/hamburger.jpg";
import salataResmi from "../assets/salads.jpg"
import kahveResmi from "../assets/coffe.jpg"

export default function HomePage () {
    return (
      <>
            <header>
                <h1>YAĞMUR EATS</h1>
                <div>
                    <button>Menu</button>
                    <button>My Account</button>
                    <button>Help</button>
                </div>
            </header>
            <main>
                <img src={pizzaResmi}/>
                <h3>Your favorite food</h3>
                <Link id="pizza-link" to="/pizza">Order</Link>
            </main>
            <section>
                <h3>Other Restaurants</h3>
                <div>
                    <div className="other">
                        <img src={hamburgerResmi}/>
                        <h4>McDonald's</h4>
                        <h5>American - Fast Food - Burgers</h5>
                    </div>
                    <div className="other">
                        <img src={salataResmi}/>
                        <h4>Sweetgreen</h4>
                        <h5>Healty - Salads</h5>
                    </div>
                    <div className="other">
                        <img src={kahveResmi}/>
                        <h4>StarBucks</h4>
                        <h5>Cafe - Coffee & Tea </h5>
                    </div>
                    
                </div>
            </section>
       </>           
    );
}

