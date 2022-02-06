import React, { useState, useContext } from 'react'
import Menu from './Svg/bars-solid.svg'
import Close from './Svg/times-solid.svg'
import { Link } from 'react-router-dom'
import Cart from './Svg/cart.svg'
import Label from "./air jordan nike1.png";
import { DataContext } from './DataProvider'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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

export default function Header() {
    
    const classes = useStyles();

    const [menu, setMenu] = useState(false)
    const value = useContext(DataContext)
    const [cart]=value.cart 



    const toggleMenu = () => {
        setMenu(!menu)
    }

    const styleMenu = {
        paddingleft: "100px",
        paddingtop: "30px"
    }

    return (
        <div >
        <header>
            <div className="menu" onClick={toggleMenu}>
                <img src={Menu} alt="" width="30" />


            </div>
            <div className="logo">
            <img src={Label} height={60} alt="airjordan + nike" style={{ marginTop: 3, marginLeft: 30 }} />



            </div>
            
            <ul style={styleMenu}>
                <li><Button><Link exact to="/">Home</Link></Button></li>
                <li><Button><Link exact to="products">Products</Link></Button></li>
                <li><Button><Link exact to="about">About</Link></Button></li>
                <li><Button><Link exact to="login">Login/Register</Link></Button></li>
                <li onClick={toggleMenu}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>
            </ul>

            <div className="cart-icon">

                <span>{cart.length}</span>

                <Link to="/Cart">

                    <img src={Cart} alt="" width="30" />

                </Link>

            </div>



        </header>

    </div>
    )
}