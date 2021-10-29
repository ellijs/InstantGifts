import '../CSS/orderDetails.css'
import { Link } from 'react-router-dom'

function Mailer (order, user) {
    const { receiver_name, receiver_email, receiver_phone_number, message, gift, quantity } = order
    return(

        // <section className='order-details-section'>
        // <div className="order-details-container">
        // <div className="order-details-box one">
        //   <div className="order-details-details">
        //     <div className="order-details-topic">To, Simon Lee </div>
        //     { receiver_email ? <div className="order-details-discount">ellijs@hotmail.com</div>: null }
        //         { receiver_phone_number ? <div className="order-details-discount">{receiver_phone_number}</div> : null }
        //     <p>Happy birthday, Brother! Your family dinner is on me today! Hope you have a great birthday and see you on the weekend!</p>

        //     <div className="order-details-topic">From, Jessica </div>
        //   </div>
        //     <div style={{marginTop:"30px"}} className='qrCode'>
        //         <img style={{width: "150px"}} src='https://miro.medium.com/max/990/1*FX_LPYdLaX1IPlohROEaQA.jpeg' alt='qrcode'></img>
        //     </div>
        //     <div style={{marginTop:"10px"}} className="order-details-button1">
        //         <button style={{marginLeft:"10px"}}>Redeem Gift</button>
        //     </div> 
          

        <section className='order-details-section'>
        <div className="order-details-container">
        <div className="order-details-box one">
          <div className="order-details-details">
            <div className="order-details-topic">To, {receiver_name}</div>
            { receiver_email ? <div className="order-details-discount">{receiver_email}</div>: null }
                { receiver_phone_number ? <div className="order-details-discount">{receiver_phone_number}</div> : null }
            <p>{message}</p>

            <div className="order-details-topic">From, {user.name}</div>
          </div>
            <div style={{marginTop:"30px"}} className='qrCode'>
                <img style={{width: "100px"}} src='https://miro.medium.com/max/990/1*FX_LPYdLaX1IPlohROEaQA.jpeg' alt='qrcode'></img>
            </div>
            <div style={{marginTop:"10px"}} className="order-details-button1">
                <button>Redeem Gift</button>
            </div>   
    
          </div>
          <div className="order-details-box two">
            <div className="order-details-image-box">
              <div className="order-details-image">
                <img className='order-detail-img' src="https://i.pinimg.com/736x/4a/11/52/4a11522384a4d2266e482d0b1fa339a7.jpg" alt={gift.name} />
              </div>
              <div className="order-details-info">
                <div className="order-details-brand">{gift.brand_name}</div>
                <div className="order-details-name">{gift.gift_name}</div>
                <div className="order-details-shipping">Quantity {quantity}</div>
                <div className="order-details-button2">
                  <Link to='/myProfile'>
                      <button>Go to InstantGift</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
    )
}

{/* <div style="{{width: '100px'}};"><img src="https://miro.medium.com/max/990/1*FX_LPYdLaX1IPlohROEaQA.jpeg" alt="qrcode" /></div> */}

{/* export default Mailer

// Hello {{{receiver_name}}}, this is from instantGifts. 

// {{{sender_first_name}}} {{{sender_last_name}}} sent you GIFT and MESSAGE! 

// DEAREST, {{{receiver_name}}} 

// {{{message}}}

// SINCERELY, {{{sender_first_name}}}

// Redeem Gift Here



// Best wishes,
// InstantGifts corp. */}

export default Mailer