import React from 'react'
import logo2 from '../jordanlogo2.png'

import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className='container2'>

        <div className='Footer'>
            
        <div style={{paddingRight:"150px"}}>
        <br /><img src={logo2} alt="logo" height={100}/></div>
           <div style={{paddingRight:"200px",lineHeight: "1"}}>
           <br /><h3>About Links</h3>
           
                <Link exact to="/Home"><p style={{color:"white"}}>Home</p></Link>
                <Link exact to="/products"><p style={{color:"white"}}>Products</p></Link>
                <Link exact to="/about"><p style={{color:"white"}}> About</p></Link>
                <Link exact to="/login"><p style={{color:"white"}}>Login/Register</p></Link>
                
            </div>

            
                <div style={{paddingBlock: "14px"}}>
                    
            <h2>Store</h2>
            <p>
                United Kingdom<br />
                United States<br />
                Dubai<br />
                Saudia Arabia <br />
                Whole Europe <br />
            </p>
            </div>
            

            <br />

        </div>
        <hr style={{border:"1px solid white"}}/>
        <div style={{textAlign:"center", color:"white"}}>
            <br />
            All Copy rights owns by Ahsan Bilal ANd Jawad Shami
            </div>
     </div>
    )
}
export default Footer;