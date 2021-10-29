import { useParams, Link } from 'react-router-dom'
import '../CSS/orderDetails.css'
import { useState, useEffect } from 'react' 
import AddReview from './AddReview'
import EditReviewForm from './EditReviewForm'
import GoToTop from '../GoToTop'

function OrderDetails ({ user, reviews, setReviews }) {
    const { id } = useParams();
    const [ isEdit, setIsEdit ] = useState(false)
    const [ addNew, setAddNew ] = useState(false)
    const [ order, setOrder ] = useState({})
    const [ time , setTime ] = useState('')
    const [ review, setReview ] = useState({})
    const [ gift, setGift ] = useState({})

    useEffect(()=>{
      fetch(`/orders/${id}`).then(r=> r.json()).then(order => {
        setOrder(order);
        setGift(order.gift);
        setReview(order.review)
        setTime(order.created_at)
      });
  },[id])
  console.log(order)
  const { receiver_name, message, receiver_email, receiver_phone_number, quantity } = order
    let subtotal = gift.price * quantity
    let fee = Math.ceil(subtotal * 0.1)
    let subtotalPrice = (subtotal + fee)
    let totalPrice = (subtotalPrice * 1.08875).toFixed(2)
    
    const handleAddReview = () => {
        setAddNew(!addNew)
    }

    const deleteReview = (id) => {
      fetch(`/reviews/${id}`, { 
          method: "DELETE"
      })
      setReviews([ ...reviews ].filter(review => review = review.id !== id))
      setAddNew(false)
      setReview(null)
    }

    // const calTime = () => {
    //   const calTime = parseInt([...time][0].slice(12,13))
    //   if ( parseInt(time) >= 0 && parseInt(time) <= 12 ) {
    //     return 'AM'
    //   } else {
    //     return 'PM'
    //   }
    // }
    // console.log(calTime())

    return(
        <section className='order-details-section'>
        <div className="order-details-container">
        <div className="order-details-box one">
          <div className="order-details-details">
            <div className="order-details-topic">To, {receiver_name}</div>
             <div style={{marginTop:'20px'}} className="order-details-discount"> {time.slice(0,10)}</div>
            {/* <div className="order-details-discount"> {created_at.slice(0,10)} - {created_at.slice(12, 16)} {calTime()}</div> */}
            { receiver_email ? <div className="order-details-discount">{receiver_email}</div>: null }
                { receiver_phone_number ? <div className="order-details-discount">{receiver_phone_number}</div> : null }
            <p>{message}</p>
            <div className="order-details-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <div className="order-details-topic">From, {user.name}</div>
              <div className="order-details-price-box">
                {/* <div className="order-details-discount">$1800.00</div> */}
                <div style={{marginBottom: '20px'}} className="order-details-price">${totalPrice}</div>
              </div>
          </div>

          { review ? <>
              { isEdit ? <EditReviewForm review={review} setReview={setReview} reviews={reviews} setReviews={setReviews} isEdit={isEdit} setIsEdit={setIsEdit}/>
              :
            (<div className="post">
            <div style={{color:"#F6416C"}}className="text">Thanks for rating us!</div>
            <div className='stars'>
                    {'⭐'.repeat(review.ratings)}                 
                </div>
            <div> Review : {review.content}</div>
            <div style={{margin: '20px 15px 10px 0px'}} className="order-details-button1">
            <button style={{marginRight: '10px'}} onClick={()=>setIsEdit(!isEdit)} className="review-edit">EDIT</button>
            <button onClick={()=>deleteReview(review.id)} className="review-edit">X</button>
            </div>
          </div>)}</>
           :         
           <> { addNew ? <AddReview user={user} order={order} gift={gift} review={review} setReview={setReview}  addNew={addNew} setAddNew={setAddNew} /> :
             <div className="order-details-button1">
            <button onClick={handleAddReview}>Add Review</button>
            </div>          
            }
            </>
          }
        </div>
        <div className="order-details-box two">
          <div className="order-details-image-box">
            <div className="order-details-image">
              <img className='order-detail-img' src={gift.gift_url} alt={gift.name} />
            </div>
            <div className="order-details-info">
              <div className="order-details-brand">{gift.brand_name}</div>
              <div className="order-details-name">{gift.item_name}</div>
              <div className="order-details-shipping">Quantity {quantity}</div>
              <div className="order-details-button2">
                <Link to='/myProfile'>
                    <button>Back to List</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GoToTop />
      </section>
    )
}

export default OrderDetails