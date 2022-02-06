import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import pic from '../jordan1.jpeg';
import Label from "./air jordan nike1.png";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Paper from '@material-ui/core/Paper';
import kidsimage from '../kidsjordan.jpeg';
import mensimage from '../mensjordans.jpeg';
import Icon from '@material-ui/core/Icon';

import { DataContext } from "./DataProvider"
import AOS from 'aos';
import 'aos/dist/aos.css';

import womensimage from '../womensjordans.jpeg';
const useStyles1 = makeStyles((theme) => ({
    btnroot: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'centet',
        marginLeft: 100,
        '& > *': {
            margin: theme.spacing(5),
            width: theme.spacing(35),
            height: theme.spacing(50),
        },
    },
}));
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));
AOS.init();
export default function Home() {
    
  const value = useContext(DataContext)
  const [products] = value.products
  const addCart = value.addCart
    const classes = useStyles();
  const classes1 = useStyles1();



    return (
        <div>
            <div className="headerHome">
                <br />
                <br />
                <br />
                <br />
                <h2 className="text-Color">"LIMITS, LIKE FEAR<br />
                    ARE OFTEN ILLUSION" </h2><br />
                <h6 className="text2">~ Micheal Jordan</h6>
                <div className='padd'>

      <div className={classes.root}>
                <Button variant="contained" color="secondary" style={{ backgroundColor: "darkred", marginRight: "73%" }}>
                        <Link to="/products" style={{ color: "white" }}><b className="font">Shop Now</b></Link></Button>
                </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
            <br />
            <br />
            <h3 style={{ textAlign: "center" }}><b>New Featured</b>  </h3>
            
    <div data-aos="fade-up" className="products" >
      {
        products.slice(0,3).map(product => (
          <div className="card" stle={{overflow:"unset"}}key={product._id}>
              <br />
              <h3 style={{textAlign:"center"}}>
                <Link to={`/products/${product._id}`} style={{ color:"darkred"}}>{product.title}</Link>
              </h3>
            <Link to={`/products/${product._id}`}>
              <img src={product.image[0]} alt="" />

            </Link>
            <div className="box">

              

              <p>{product.description}</p>
              <h5 style={{color:"darkred",paddingLeft:"15px"}}>${product.price}</h5>
              <Button className="button" onClick={() => addCart(product._id)}style={{backgroundColor:'black',color:'white',height:'1',width:'50',marginLeft:'20'}}>Limited Edition </Button>
            </div>
          </div>))}
          </div>
        
            <br />
            <div className='bigbox'data-aos="flip-left">
                <img src={pic} alt="jordan 1 red white black" />
                <div style={{paddingLeft:"100px"}}>
                    <br />
                    <br />
                <h1 className='headline'> Hurry up </h1>
                <br />
                <h3 style={{ color:'white'}}>and get a perfect Valentine's gift for your Sneakerhead
                and use it 
            
                    Any Time
                    Any Where
                    Any One
                available in all sizes
                </h3>
                <h1 style={{color:"white"}}>Enjoy </h1><h1 style={{ color:"yellow"}}>40% Sale </h1> <h1 style={{color:"white"}}>on all old stock </h1>
                </div>
                </div>
        </div>
        

    )
}