import React from 'react';
import Header from './Componets/Header'
import Products from './Componets/Products'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DataProvider } from './Componets/DataProvider'
import Details from './Componets/Details'
import Cart from './Componets/Cart';
import Payment from './Payment';
import About from './Componets/About';

import Login from './Componets/Login';
import Home from './Componets/Home';
import Footer from './Componets/Footer';

function App() {
  return (
    <DataProvider>
    
    <div className="App">
      <Router>
        <Header />



        <section>
          <Routes>
          <Route exact path="/" element={<Home />} />
            <Route exact path="products" element={<Products />} />
            <Route exact path="products/:id" element={<Details />} />
            <Route exact path="cart" element={<Cart />} />
            
            <Route exact path="about" element={<About />} />
            <Route exact path="login" element={<Login />} />
            <Route path="payment" element={<Payment />} /> 


           
          </Routes>
        </section>
        <br />
        <br />
        <Footer />
        
  
      </Router>
     
    </div>
   
  </DataProvider>

  

  
     
    
  );
}

export default App;



