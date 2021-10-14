import React from 'react';
import Header from './Componets/Header'
import Products from './Componets/Products'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DataProvider } from './Componets/DataProvider'
import Details from './Componets/Details'
import Cart from './Componets/Cart'

import About from './Componets/About'

import Login from './Componets/Login';



function App() {
  return (
    <DataProvider>
    
    <div className="App">
      <Router>
        <Header />
        



        <section>
          <Routes>
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<Details />} />
            <Route path="cart" element={<Cart />} />
            
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />


           
          </Routes>
        </section>
        
  
      </Router>
     
    </div>
   
  </DataProvider>

  

  
     
    
  );
}

export default App;



