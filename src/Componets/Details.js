import React, { useContext, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from './DataProvider'
import Colors from './Colors'
import Sizes from './Sizes'
import DetailsThumb from './DetailsThumb'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';


export default function Details() { 
    const { id } = useParams();
    const value = useContext(DataContext)
    const [products] = value.products
    const addCart = value.addCart

    const [index, setIndex] = useState(0)
    const imgDiv = useRef();

    const details = products.filter((product, index) => {
        return product._id === id


    })


    const handleMousemove = e => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
    }
    console.log(details);

    return (
        <>
            {
                details.map(product => (
                    <div className="details" data-aos="zoom-in" key={product._id}>
                        <div className="img-container" onMouseMove={handleMousemove}
                            style={{ backgroundImage: `url(${product.image[index]})` }} ref={imgDiv} onMouseLeave={() => imgDiv.current.style.backgroundPosition = `center`} />

                        <div className="box-details">
                            <h2 style={{color:"darkred"}}title={product.title}>{product.title}</h2>

                            <h3>${product.price}</h3>

                            <p><h4>Description :</h4>{product.description}<br />{product.content}</p>
                            

                            <DetailsThumb image={product.image} setIndex={setIndex} />

                            <Button className="button" onClick={() => addCart(product._id)}style={{backgroundColor:'black',color:'white',height:'1',width:'50',marginLeft:'20'}}>Add to Cart <Icon style={{ color: "darkred", height: 30, marginLeft: 150 }}>add_circle</Icon></Button>



                        </div>



                    </div>

                ))
            }

        </>
    )
}