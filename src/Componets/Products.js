import React, { useContext } from 'react'
import { DataContext } from "./DataProvider"
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
export default function Products() {
  const value = useContext(DataContext)
  const [products] = value.products
  const addCart = value.addCart





  return (
    <div>
      <br />
      <br />
    <h2 style={{textAlign:"center"}}>Products</h2>
    <div className="products" data-aos="fade-up">
      {
        products.map(product => (
          <div className="card" key={product._id}>
            <Link to={`/products/${product._id}`}>
              <img src={product.image[0]} alt="" />

            </Link>
            <div className="box">

              <h3 >
                <Link to={`/products/${product._id}`}>{product.title}</Link>
              </h3>

              <p>{product.description}</p>
              <h5 style={{color:"darkred",paddingLeft:"15px"}}>${product.price}</h5>
              <Button className="button" onClick={() => addCart(product._id)}style={{backgroundColor:'black',color:'white',height:'1',width:'50',marginLeft:'20'}}>Add to Cart <Icon style={{ color: "darkred", height: 30, marginLeft: 150 }}>add_circle</Icon></Button>
            </div>
          </div>

        ))
      }



    </div>
    </div>
  )
}
