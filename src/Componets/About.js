import React from 'react';
import ss from '../Homess.png'
import productss from '../productsss.png'
import ahsanpic from '../ahsanbilal.png'
import jwd from '../jwdshami.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
export default function About() {


 
  
    return (
        <div >
            <div >
            <br />
            <br />
            <br />
            <h1 style={{textAlign:'center',paddingTop:20 ,fontSize:'3rem',fontFamily:'sans-serif'}}>About</h1>
            <br />
            <br />
            <br />

            <p style={{ marginRight: 100, marginLeft: 100,textAlign:'center',fontFamily:'sans-serif'}}>Shoe Shoe brings you the number one quality over 15 top footwear brands of the world.You can chose from a wide variety of shoes designed according to the latest trends.We offer comfort as well as value for money and our shoes have been Sialkot's number one choice since 1993.Our Products range from sports to casual wear are perfect for fitness and sports enthusiests.We are the only reatailers in Pakistan who have jumbo shoes.</p>
            <br />
            <br />
            <br />
            <br />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='about' >
                <br />
                <br />
                <br />
            <div className="rectangle" data-aos="fade-right">
                <br />
                <br />
                <br />
                <div className='subrectangle'>
                    
                <img src={ss} alt="Home ss"/>
                </div>
                <div className='sub2rectangle'>
                <img src={productss} alt="product ss"/>
                </div>
            </div>
            <div style={{paddingLeft:"320px"}} data-aos="fade-left">
            <h1 style={{color:"darkred"}}>SHOE STORE</h1><br /><br />
            <h5>- Attractive design</h5>
                        <h5>- Showing products through json file </h5>
                        
                        <h5>- Showing Details of each Product</h5>
                        <h5>- Handle history in Url</h5>
                        <h5>- Adding your choice in cart</h5>
                        <h5>- Calculate price</h5>
                        <h5>- Storing order details in Database </h5>
                        <h5>- Showing order info from databse</h5></div>
            </div>
            <br />
            <br />
            <br />
            <br />  
                        
                        
            
            {/*<br />
            <br />
            <div className='rightabout'>
            <div className="rightrectangle">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className='rigthsubrectangle'>
                    <br />
                </div>
                <div className='rightsub2rectangle'>
                </div>
            </div>
           {/* <div>
                <div className="rightappdetails">
                    <h1>SHOE STORE</h1>
                        <ul className="ulstyle">
                        <li>Attractive design</li>
                        <li>Showing products through json file 
                        </li>
                        <li>Showing Details of each Product</li>
                        <li>Handle history in Url</li>
                    </ul>
                </di
           </div>*/}
                    <br />
                    <br /><br />
                    <br />
                    

            <div id="bigbox" data-aos="zoom-in-up">
            <div><h1 className="h1"style={{textAlign:"center",backgroundColor:"darkred", color:"white",borderTopLeftRadius: "30px",
borderTopRightRadius: "30px",padding: "21px"}}>
                
                Team Members
                <br />
                </h1>
                <br />
                <div className='bigboxflexing'>
           <img src={ahsanpic} alt="ahsanbilal" height={250}/>
           <img src={jwd} alt="jawadshami" height={250}/>
           </div>
           <div id='bigboxflexing'>
               <h3>Ahsan Bilal<br />BSCS-Fa19-049</h3>
               <h3>Jawad Shami<br />BSCS-Fa19-094</h3>
           </div>
           </div>
            </div>
          <br />
        </div>
    );
}



