// import Modal from './Modal'
import GoToTop from '../GoToTop'
import '../CSS/orderGifts.css'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import CreditCardForm from './CreditCardForm'
import swal from 'sweetalert'
// import Mailer from '../Mailer/Mailer.js'
import emailjs from "emailjs-com"
import{ init } from 'emailjs-com';
init("user_vV6H7MDh7g05HcLpaXBDL");


function OrderForm ({ user, gift, quantity, handleFormData, setFormData, formData, setUser, handleSubmit }) {

// const { id } = useParams();
const history = useHistory(); 
const [ ways, setWays ] = useState(null)
const [ firstName, setFirstName] = useState("")
const [ lastName, setLastName] = useState("")
// const [ errors, setErrors ] = useState([])


const handleFirstName = (e) => {
   setFirstName(e.target.value)
}
const handleLastName = (e) => {
   setLastName(e.target.value)
}

const sendEmail = (e) => {
 
    emailjs.sendForm('service_u90l4e9', 'template_s344qr9', e.target.form, 'user_vV6H7MDh7g05HcLpaXBDL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
}      


const slidePage = document.querySelector(".slide-page");
// const nextBtnFirst = document.querySelector(".firstNext");
// const prevBtnSec = document.querySelector(".prev-1");
// const nextBtnSec = document.querySelector(".next-1");
// const prevBtnThird = document.querySelector(".prev-2");
// const nextBtnThird = document.querySelector(".next-2");
// const prevBtnFourth = document.querySelector(".prev-3");
// const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

function handleFirstNext (event) {
   event.preventDefault();
   slidePage.style.marginLeft = "-25%";
   bullet[current - 1].classList.add("active");
   progressCheck[current - 1].classList.add("active");
   progressText[current - 1].classList.add("active");
   current += 1;
};

function handleSecondNext (event){
   event.preventDefault();
   slidePage.style.marginLeft = "-50%";
   bullet[current - 1].classList.add("active");
   progressCheck[current - 1].classList.add("active");
   progressText[current - 1].classList.add("active");
   current += 1;
};

function handleThirdNext(event){
   event.preventDefault();
   slidePage.style.marginLeft = "-75%";
   bullet[current - 1].classList.add("active");
   progressCheck[current - 1].classList.add("active");
   progressText[current - 1].classList.add("active");
   current += 1;
};

function handleAddFriends(e, user1){
   e.preventDefault();
   const order = user1.recent_orders[0];
   const name = `${order.receiver_name}`
   const email = `${order.receiver_email}`
   const phone_number = `${order.receiver_phone_number}`
   const img_url = "https://ekiosk.com.gh/system/static/dashboard/img/default_user.png"
   console.log(order)
   fetch('/friends', {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify({
         "name": name,
         "email": email,
         "phone_number": phone_number,
         "img_url": img_url,
         "birthdate": "n/a"
      })
   }).then((r) => {
      if (r.ok) {
        r.json().then(user=> {
         
         setUser(user)
         showCompletePage()
      })
      } else {
         alert(r.errors.full_messages)
      }
   })
}

function handleSubmit(e){
   e.preventDefault();

   fetch('/orders', {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
   },[]).then((r) => {
      if (r.ok) {
        r.json().then((user1) => {  
         swal("Would you like to add receipient to friend's list?", {
            buttons: {
              cancel: "No",
              Yes: true,
            },
          })
          .then((value) => {
            switch (value) {
           
              case "Yes":
                handleAddFriends(e, user1)
                break;
                  
              default:
                 setUser(user1)
                 swal(showCompletePage())
                break;
            }
          });
         
            // if (window.confirm("Would you like to add receipent to your friends' list?")) {
            //       handleAddFriends(e, user1)
            //       return user1
            // } else {
            //    setUser(user1)
            //    return user1
            // }
        });
      } else {
        r.json().then((err) => console.log(err.errors));
      }
    },[]);

  
   bullet[current - 1].classList.add("active");
   progressCheck[current - 1].classList.add("active");
   progressText[current - 1].classList.add("active");
   current += 1;

   sendEmail(e);

   setFormData({ 
      user_id: user.id,
      gift_id: gift.id,
      receiver_email: "",
      receiver_phone_number: "",
      quantity: quantity, 
      receiver_name: "",
      message: "" 
   })

};

  
const showCompletePage = () => {
   setTimeout(function(){    
     history.push('/modal');
    },600);
}

function handleSecondPrev(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
};
function handleThirdPrev (event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
};
function handleFourthPrev(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
};

const handleWays = (e) => {
    setWays(e.target.value)
}

function renderMethod () {
    if ( ways === 'Email' ){
        return(
            <div className="field">
                     <div className="label">
                        Enter Email Address
                     </div>
                     <input onChange={handleFormData} name='receiver_email' placeholder='xxx@xxx.com' type="text"/>
            </div>
        )
    } else if ( ways === 'Phone Number') {
        return (
            <div className="field">
                <div className="label">
                   Enter Phone Number
                </div>
                <input onChange={handleFormData} name='receiver_phone_number' placeholder="x - xxx - xxx - xxxx" type="text" />
            </div>
        )
    } else {
        return (
            <div className="field">
                <div className="label">
               Please Choose way to send
                </div>
                
            </div>
        )
    }
}


    return (

    <>
    <div className="order-container">
         <header>Order Form</header>
         <div className="progress-bar">

            <div className="step">
               <p>
                   Sender
               </p>
               <div className="bullet">
                  <span>1</span>
               </div>
               <div className="check fas fa-check"></div>
            </div>

            <div className="step">
               <p>
                  Receiver
               </p>
               <div className="bullet">
                  <span>2</span>
               </div>
               <div className="check fas fa-check"></div>
            </div>

            <div className="step">
               <p>
                  Message
               </p>
               <div className="bullet">
                  <span>3</span>
               </div>
               <div className="check fas fa-check"></div>
            </div>

            <div className="step">
               <p>
                  Payment
               </p>
               <div className="bullet">
                  <span>4</span>
               </div>
               <div className="check fas fa-check"></div>
            </div>

         </div>
         <div className="form-outer">
            <form onSubmit={handleSubmit} >
               <div className="page slide-page">
                  <div className="title">
                     Sender Info:
                  </div>
                  <div className="field">
                     <div className="label">
                        First Name
                     </div>
                     <input onChange={handleFirstName} name="sender_first_name" type="text"/>
                  </div>
                  <div className="field">
                     <div className="label">
                        Last Name
                     </div>
                     <input onChange={handleLastName} name="sender_last_name" type="text"/>
                  </div>
                  <div className="field">
                     <button onClick={handleFirstNext} className="firstNext next">Next</button>
                  </div>
               </div>
               <div className="page">
                  <div className="title">
                     Receiver Info:
                  </div>
                  <div className="field">
                     <div className="label">
                     Please Choose way to send
                     </div>
                     <select onChange={handleWays} >
                        <option value="null" selected disabled hidden>Choose here</option>
                        <option value="Email">Email</option>
                        <option value="Phone Number">Phone Number</option>
                     </select>
                  </div>
                  {renderMethod()}
                  <div className="field btns">
                     <button onClick={handleSecondPrev} className="prev-1 prev">Previous</button>
                     <button onClick={handleSecondNext} className="next-1 next">Next</button>
                  </div>
               </div>
               <div className="page">
                  <div className="title">
                     Message:
                  </div>
                  <div className="field message-to">
                     <div className="label message-to">
                       To :
                     </div>
                     <input onChange={handleFormData} name='receiver_name' className='to-input' type="text"/>
                  </div>
                  <div className="field">
                     <div className="label">
                       Message <span style={{color:'grey'}}>(maximum length 500)</span> :
                     </div>
                     <textarea onChange={handleFormData} name='message' className='message' placeholder='write here...' type="textarea" />
                  </div>
                  <div className="field btns">
                     <button onClick={handleThirdPrev} className="prev-2 prev">Previous</button>
                     <button onClick={handleThirdNext} className="next-2 next">Next</button>
                  </div>
               </div>
               <div className="credit-card page">
                  <div className="title">
                     Credit/Debit Card:
                  </div>
                  <div className="field">
                     <CreditCardForm handleFourthPrev={handleFourthPrev} handleSubmit={handleSubmit}/>
                   </div> 
               </div>
            </form>
         </div>
      </div>
      {/* <Mailer user={user} gift={gift} /> */}
      {/* <Modal /> */}
      <GoToTop />
      </>

   
    )
}

export default OrderForm