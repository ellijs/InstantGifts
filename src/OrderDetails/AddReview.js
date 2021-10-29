import '../CSS/addReview.css'
import 'semantic-ui-css/semantic.min.css'
import { useState } from 'react'
// import { FaStar } from 'react-icons/fa';
import { Rating } from 'semantic-ui-react'
// import EditReviewForm from './EditReviewForm'
// import { useParams } from 'react-router-dom'

function AddReview({ order, user, review, gift, setReview, setReviews, reviews, isEdit, setIsEdit, handleAddReview, addNew, setAddNew}) {
    const [ errors, setErrors ] = useState([])
    const [ formData, setFormData ] = useState({
        gift_id: gift.id,
        user_id: user.id,
        order_id: order.id,
        content: "",
        ratings: 5
    })

    console.log(formData)

    const sendNewReview = (e) => {
        e.preventDefault();
        fetch('/reviews', {
            method: "POST",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
         }).then((r) => {
            if (r.ok) {
              r.json().then(newReview=> {
                  console.log(newReview)
                setReview(newReview)
                setAddNew(!addNew)
                setFormData({
                    gift_id: "",
                    user_id: "",
                    content: "",
                    ratings: 5
              })
            })
            } else {
               r.json().then(setErrors)
            }
         })
      }

    const handleFormData = (e) => {
        let key = e.target.name;
        let value = e.target.value;
        setFormData({ ...formData, [key]:value })
    } 

      function handleChangeOnRate(e) {     
        e.preventDefault();
        let value = parseInt(e.target.ariaPosInSet);
        setFormData({ ...formData, ratings :value })
        
      }

    return( 
          <>
          {/* { errors ?  renderErrors : null } */}
          <div className="star-widget">
          <form onSubmit={sendNewReview}>
            <span style={{paddingRight:'20px'}}>Ratings:</span>
             <Rating onRate={(e) => {
                handleChangeOnRate(e);
              }} name='ratings' maxRating={5} defaultRating={5} icon='star' size='huge' />
        
              <header></header>
              <div className="textarea">
                <textarea onChange={handleFormData} name='content' cols="30" placeholder="Describe your experience.."></textarea>
              </div>
              <div className="review-btn">
                <button type="submit" >Post</button>
                <button onClick={()=>setAddNew(!addNew)} type="button">Cancel</button>
              </div>
            </form>
          </div>
          </>
    )
}

export default AddReview