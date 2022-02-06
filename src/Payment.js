import React, { useContext, useState,  useEffect } from 'react'
import { DataContext } from './Componets/DataProvider'



export default  function Payment() {
 
    const value = useContext(DataContext)
    const [cart] = value.cart
    const [total, setTotal] = useState(0)
    const [products] = value.products
 


    useEffect(() => {
        const getTotal = () => {
            const res = cart.reduce((prev, item) => {
                return prev + (item.price * item.count)


            }, 0)
            setTotal(res)
        }
        getTotal()
    }, [cart])
  
  
     
    return (
      
        // cart.map(product => (
        //     <div key={product._id}>
        //         <h2 title={product.title}>{product.title}</h2>
        //     </div>
        // )),
    
        
        <>
        {
            cart.map(product => (
            <div className="maincontainer">
             
              <div class="container">
               
      
                <div class="row">
                <div class="col-8 order-md-1">
                <br />
      <br />
                    <h4 class="mb-3">Billing address</h4>
                    <form class="needs-validation" novalidate>
                      <div class="row">
                        <div class="col-6 mb-3">
                        <label for="firstname">First Name</label>
                        <input type="text" class="form-control" id="firstname" placeholder="Firstname" required />
                        <div class="invalid-feedback">
                          Please enter your First Name.
                        </div>
                         
                        </div>


                        <div class="col-6 mb-3">
                          <label for="lastName">Last name</label>
                          
                        <input type="text" class="form-control" id="lastname" placeholder="lastname" required />
                        <div class="invalid-feedback">
                          Please enter your shipping address.
                        </div>
                         
                        </div>
                      </div>


                      
      
                      <div class="mb-3">
                        <label for="username">Email Address</label>
                        <div class="input-group">
                         
                          <input type="text" class="form-control" id="username" placeholder="Username" required />
                          <div class="invalid-feedback">
                            Your username is required.
                          </div>
                        </div>
                      </div>
      
                     
      
                      <div class="mb-3">
                        <label for="address">Address</label>
                        <input type="text" class="form-control" id="address" placeholder="1234 Main St" required />
                        <div class="invalid-feedback">
                          Please enter your shipping address.
                        </div>
                      </div>
      
                      <div class="mb-3">
                        <label for="Phone">Phone No:</label>
                        <input type="tel" class="form-control" id="Phone" placeholder="" />
                      </div>
      
                      <div class="row">
                      
                        
                        <div class="col-md-3 mb-3">
                          <label for="zip">Zip</label>
                          <input type="text" class="form-control" id="zip" placeholder="" required />
                          <div class="invalid-feedback">
                            Zip code required.
                          </div>
                        </div>
                      </div>
                   
                    
                     <br />
                      <button class="btn btn-primary btn-lg btn-block" type="button" style={{backgroundColor:"black"}}>Continue to checkout</button>
                    </form>
                  </div>






                  <div class="col-4 order-md-2 mb-4">
                  <br />
                      <br />
                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                      
                      <span class="text-muted">Your cart</span>
                      
                    </h4>
                    <ul class="list-group mb-3">
                      <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                          <h6 class="my-0"title={product.title}>{product.title}</h6>
                          <small class="text-muted">{product.description}</small>
                        </div>
                        <span class="text-muted">USD${total}</span>
                      </li>
                   
                     
                      <li class="list-group-item d-flex justify-content-between">
                        <span>Total=</span>
                        <strong>USD${total}</strong>
                      </li>
                    </ul>
      



                  
                  </div>

                </div>
      
               
              </div>
           
            </div>
               ))
              }
              </>
      )
      
      }