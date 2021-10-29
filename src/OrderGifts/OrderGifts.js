import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../CSS/orderGifts.css'
import ItemsInCart from './ItemsInCart'
import OrderForm from './OrderForm'
import GoToTop from '../GoToTop'

function OrderGifts ({ user, setUser }) {
    const { id } = useParams();
    const [ gift, setGift ] = useState({})
    const [ quantity, setQuantity ] = useState(1)
    // const { brand_name, brand_url, category, item_name, description, price, gift_url, likes } = gift
    
    useEffect(() => {
        fetch(`/gifts/${id}`).then((r) => {
          if (r.ok) {
            r.json().then((data) => {
              setGift(data);
            });
          }
        });
      }, [id]);
     


    // let totalItems = myCart.reduce((a, b) => (a + b.quantity),0)
    // let subtotalPrice = myCart.reduce((a, b) => (a + (b.price * b.quantity)),0)
    // let totalPrice = parseFloat(subtotalPrice*1.08875).toFixed(2)

    let subtotal = gift.price * quantity
    let fee = Math.ceil(subtotal * 0.1)
    let subtotalPrice = (subtotal + fee)
    let totalPrice = (subtotalPrice * 1.08875).toFixed(2)

    const formDataId = parseInt(id)

    const [ formData, setFormData ] = useState({ 
        user_id: user.id,
        gift_id: formDataId,
        receiver_email: "",
        receiver_phone_number: "",
        quantity: quantity, 
        receiver_name: "",
        message: ""
     })
     
     const handleFormData = (e) => {
        let key = e.target.name
        let value = e.target.value
        setFormData({
               ...formData,
               [key]: value,
        })
     }

     useEffect(() => {
        setFormData({...formData, quantity})
      },[quantity]);

     console.log(formData)

    return(
        <>
        <section className='order-processing'>
            <div className="shopping-cart-container">
                <h1>Your order</h1>
                <div className="cart">
                    <div className="products">
                        <ItemsInCart gift={gift} quantity={quantity} setQuantity={setQuantity} handleFormData={handleFormData}/>
                        <div className=''> 

                        <OrderForm user={user} setUser={setUser} gift={gift} quantity={quantity} formData={formData} handleFormData={handleFormData} setFormData={setFormData} />

                            
                        </div>
                    </div>
                   
                    
                    <div className="cart-total">
                        <p>
                            <span>
                                Number of Items
                            </span>
                            <span>{quantity}</span>
                        </p>
                        <p> 
                            <span>Subtotal</span>
                            <span>$ {subtotal}</span>
                        </p>
                        <p> 
                            <span>Fee</span>
                            <span>$ {fee}</span>
                        </p>
                        <p> 
                            <span>Total (inc.tax)</span>
                            <span>$ {totalPrice}</span>
                        </p>
                        <button style={{fontSize: '18px'}} className="ui primary button" href="#">Proceed to checkout</button>
                    </div>
        
                </div>
            </div>
        </section>
        <GoToTop />
        </>
    )
}

export default OrderGifts