import React from "react"
import logo from "../images/Logo.svg"

const Footer = () => {
    return(
        <footer className="">
            <section>
            <div className="company-info">
                <img src={logo} alt=""/>
                <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
            </div>
            <div>
                <h3>Links</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>
            </ul>
            </div>
            <div>
                <h3>Contact</h3>
            <ul>
                <li>Phone: <br/> 999 999 9999</li>
                <li>Email: <br/> lemony@littlelemon.com</li>
            </ul>
            </div>
            <div>
                <h3>Social Media</h3>
            <ul>
                <li><a >Facebook</a></li>
                <li><a >Instagram</a></li>
            </ul>
            </div>
            </section>
        </footer>
    )
}

export default Footer;