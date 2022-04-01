// import surf from "./pictures/surfing.jpeg"
import { Link } from 'react-router-dom'
import React from 'react'
const  Advertisement = () => {
    const mystyle={
        backgroundImage:
        "url('https://images.ireland.com/media/Images/Donegal/849c2e0864434e7eaae44a16a50796d9.jpg')",
        height: '100vh',
        marginTop: '15px',
        backgroundSize:'cover'
    }
    return (
        
        <div style={mystyle} >
           
        
                <h3> View Newest Trending Styles</h3>
            <Link id="linkage" to="/home">View BSS</Link>
            {/* <img src={surf} alt="winning"></img> */}

            <footer className="footer--pin">
        <Link id="ok" to="/aboutus">About Us</Link>
            </footer>
        </div>
        
    )
}
export default Advertisement