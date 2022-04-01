import { Link } from 'react-router-dom'
import React from 'react'
const  AboutUs = () => {
    const mystyle={
        backgroundImage:
        "url('https://images.ireland.com/media/Images/Donegal/849c2e0864434e7eaae44a16a50796d9.jpg')",
        height: '100vh',
        marginTop: '15px',
        backgroundSize:'cover'
    }
    return (
        
        <div style={mystyle} >
           
        <h1>Everything to know about BSS</h1>
        <h3> Contact us:</h3>
    <Link id="linkage" to="/home">View BSS homepage</Link>
    {/* <img src={surf} alt="winning"></img> */}
</div>
    )
}
export default AboutUs