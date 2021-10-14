import React, { createContext, useState ,useEffect} from 'react'


export const DataContext = createContext()

export const DataProvider = (props) => {

    const [products, setProducts] = useState([
        {
            "_id": "1",
            "title": "Watch Product 01",
            "image": [
                "https://images.pexels.com/photos/4277507/pexels-photo-4277507.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80.jpg",
                "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80.jpg",
                "https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80",

            ],
            "description": "A shoe is an item of footwear intended to protect and comfort the human foot.. ",
            "content": " 40,000 years ago.",
            "colors": ["red", "black", "teal"],
            "sizes": ["Xl", "L", "M", "XM", "LX"],
            "price": 101,
            "count":1
        },
        {
            "_id": "2",
            "title": "Watch Product 02",
            "image": [

                "https://images.pexels.com/photos/5788986/pexels-photo-5788986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80.jpg",
                "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80.jpg",
                "https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80",
            ],
            "description": "A shoe is an item of footwear intended to protect and comfort the human foot.. ",
            "content": " 40,000 years ago.",
            "colors": ["red", "black", "teal"],
            "sizes": ["Xl", "L", "M", "XM", "LX"],
            "price": 101,
            "count":1
        },
        {
            "_id": "3",
            "title": "Watch Product 03",
            "image": [
                "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80.jpg",
                "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80.jpg",
                "https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80",

            ],
            "description": "A shoe is an item of footwear intended to protect and comfort the human foot.. ",
            "content": " 40,000 years ago.",
            "colors": ["red", "black", "teal"],
            "sizes": ["Xl", "L", "M", "XM", "LX"],
            "price": 101,
            "count":1
        },
        {
            "_id": "4",
            "title": "Watch Product 04",
            "image": [
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80.jpg",
                "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80.jpg",
                "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80.jpg",
                "https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80",

            ],
            "description": "A shoe is an item of footwear intended to protect and comfort the human foot.. ",
            "content": " 40,000 years ago.",
            "colors": ["red", "black", "teal"],
            "sizes": ["Xl", "L", "M", "XM", "LX"],
            "price": 101,
            "count":1
        },
        {
            "_id": "5",
            "title": "Watch Product 05",
            "image": [
                "https://images.pexels.com/photos/2857040/pexels-photo-2857040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80.jpg",
                "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80.jpg",
                "https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80",

            ],
            "description": "A shoe is an item of footwear intended to protect and comfort the human foot.. ",
            "content": " 40,000 years ago.",
            "colors": ["red", "black", "teal"],
            "sizes": ["Xl", "L", "M", "XM", "LX"],
            "price": 101,
            "count":1
        },
        {
            "_id": "6",
            "title": "Watch Product 06",
            "image": [
                "https://images.pexels.com/photos/4066968/pexels-photo-4066968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80.jpg",
                "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80.jpg",
                "https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80",

            ],
            "description": "A shoe is an item of footwear intended to protect and comfort the human foot.. ",
            "content": " 40,000 years ago.",
            "colors": ["red", "black", "teal"],
            "sizes": ["Xl", "L", "M", "XM", "LX"],
            "price": 101,
            "count":1
        },
        {
            "_id": "7",
            "title": "Watch Product 07",
            "image": [
                "https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80.jpg",
                "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80.jpg",
                "https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80",

            ],
            "description": "A shoe is an item of footwear intended to protect and comfort the human foot.. ",
            "content": " 40,000 years ago.",
            "colors": ["red", "black", "teal"],
            "sizes": ["Xl", "L", "M", "XM", "LX"],
            "price": 101,
            "count":1
        },
    ])

    const [cart, setCart] = useState([])


    const addCart = (id) => {
        const check = cart.every(item => {
            return item._id !== id
        })

        if (check) {
            const data = products.filter(product => {
                return product._id === id

            })
            setCart([...cart, ...data])
        } else {
            alert("The product has been added to cart.")
        }
    }
    useEffect(()=>{
       const  dataCart =JSON.parse( localStorage.getItem('dataCart'))

       if(dataCart) setCart(dataCart)


    },[])


    useEffect(()=>{
        localStorage.setItem('dataCart',JSON.stringify(cart))

    },[cart])

    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart
    }
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}