import React, { createContext, useState ,useEffect} from 'react'


export const DataContext = createContext()

export const DataProvider = (props) => {

    const [products, setProducts] = useState([
        {
            "_id": "1",
            "title": "Jordan 1 Retro High",
            "image": [
                "https://5.imimg.com/data5/SELLER/Default/2021/6/EU/JV/RT/86432004/whatsapp-image-2021-06-06-at-12-40-43-pm-500x500.jpeg",
                "https://cdn.shopify.com/s/files/1/0055/5502/8083/products/Air-Jordan-1-High-OG-Electro-Orange_1024x1024@2x.jpg?v=1627634712",

            ],
            "description": "Jordan 1 Retro High ‘Shattered Backboard’ 3.0",
            "content": "Jordan 1 Retro High ‘Shattered Backboard’ 3.0, Jordan Brand added another iteration to the lineage of its classic ‘Shattered Backboard’ colourway. The colourway is inspired by the orange and black jersey that Michael wore, when he shattered the backboard in an exhibition game in Italy, in 1986. The design is comprised of a black and orange crinkled patent leather upper to represent the shattered glass, and the mid and outsole are in a yellow-vanilla colour this time round. Cop these now, on Resole.",
            "colors": ["red", "black", "teal"],
            "sizes": ["Xl", "L", "M", "XM", "LX"],
            "price": 445,
            "count":1
        },
        {
            "_id": "2",
            "title": "Jordan 1 Low white & Black ",
            "image": [

                "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/fc9630ec-20e7-4594-b4ee-f01b6fc268d3/air-jordan-1-low-se-womens-shoes-Pb3Ln8.png",
        "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/b8d7d5d6-8fce-4be0-ae58-176fff8b1f17/air-jordan-1-low-se-womens-shoes-Pb3Ln8.png"
    ,
            ],
            "description": "Jordan 1 Low ‘Shadow’ The low top"   ,         
            "content": "Jordan 1 Low ‘Shadow’ The low top show by Jordan with a street look",
            "colors": ["red", "black", "teal"],
            "sizes": ["Xl", "L", "M", "XM", "LX"],
            "price": 172,
            "count":1
        },
        {
            "_id": "3",
            "title": "Jordan 4 Retro Travis Scott",
            "image": [
                "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/b2d929dc-f0e4-4875-956d-332b6cd87e47/jordan-4-retro-se-little-kids-shoes-HtNLhS.png",
                "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/5c9864e4-4c10-4555-ba98-f8995c314c90/jordan-4-retro-se-little-kids-shoes-HtNLhS.png"

            ],
            "description": "Jordan 4 Retro Travis Scott",            
            "content": "Jordan 4 Retro Travis Scott Cactus Jack SKU: Jordan4Travis Category: Jordan 4 Tags: 4, air, aj, aj4, cactus, j, j4, jack, jordan, scott, travis",
            "colors": ["red", "black", "teal"],
            "sizes": ["Xl", "L", "M", "XM", "LX"],
            "price": 106,
            "count":1
        },
        {
            "_id": "4",
            "title": "Jordan 4 Retro Union Guava Ice",
            "image": [
                "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/8c7b9090-a9ea-4933-9e4f-8ffb247428d3/air-force-1-fontanka-womens-shoes-1cv7rP.png",
                "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/2009e1f5-45e4-45d5-ba45-b8de82916635/air-force-1-fontanka-womens-shoes-1cv7rP.png"

            ],
            "description": "Jordan teamed up with LA based sneaker boutique for this one",            
            "content": "Jordan Brand teamed up with LA based sneaker boutique, Union, for a second collaboration, this time for the Jordan 4s. And like the first time, this collab did not disappoint. Union experiments with different colours, materials, and styles. Buy / Sell the Jordan 4 Union Guava Ice colourway now, only on ResoleClub",
            "colors": ["red", "black", "teal"],
            "sizes": ["Xl", "L", "M", "XM", "LX"],
            "price": 120,
            "count":1
        },
        {
            "_id": "5",
            "title": "Jordan 1 Mid 'Camo' edition",
            "image": [
                "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/79b9ba92-3110-43c4-b09a-26186b5a986c/jordan-max-aura-3-mens-shoes-lqz9jG.png",
                "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/82cf7983-5e56-4372-8a5c-f80d09244e8d/jordan-max-aura-3-mens-shoes-lqz9jG.png"

            ],
            "description": "Jordan 1 Mid ‘Camo’ (2020) SKU",            
            "content": "Jordan 1 Mid ‘Camo’ (2020) SKU: N/A Categories: Jordan 1, Jordan 1 Mid Tags: 1, aj, aj1, camo, camouflage, j, j1, jordan, mid",
            "colors": ["red", "black", "teal"],
            "sizes": ["Xl", "L", "M", "XM", "LX"],
            "price": 205,
            "count":1
        },
        {
            "_id": "6",
            "title": "Jordan 12 Retro Uni edition",
            "image": [
                "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/i1-1620b7fe-3e73-4abd-802d-0777c475ca1f/jordan-westbrook-one-take-pf-basketball-shoe-gCSh03.png",
                "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/i1-b2bcc45b-1223-444e-84d9-533f57cb18d4/jordan-westbrook-one-take-pf-basketball-shoe-gCSh03.png"
        
            ],
            "description": "SKU: N/A Category: Jordan 12 Tags",
            "content": "SKU: N/A Category: Jordan 12 Tags: 12, aj, aj12, black university gold, gold, j, j12, jordan, retro, university",
            "colors": ["red", "black", "teal"],
            "sizes": ["Xl", "L", "M", "XM", "LX"],
            "price": 299,
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