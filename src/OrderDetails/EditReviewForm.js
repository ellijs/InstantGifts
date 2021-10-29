import '../CSS/addReview.css'
import { useState } from 'react'
// import { FaStar } from 'react-icons/fa';
import { Rating } from 'semantic-ui-react'

function EditReviewForm({ handleAddReview, isEdit, setIsEdit, review, setReview, reviews, setReviews }) {
    const [ formData, setFormData ] = useState(review)
    const [ errors, setErrors ] = useState([])

    const handleFormData = (e) => {
      let key = e.target.name;
      let value = e.target.value;
      setFormData({ ...formData, [key]:value })
    }
    console.log(formData)
    const handleUpdateReview = (e, id) => {
      e.preventDefault();
      fetch(`/reviews/${id}`, {
          method: "PATCH",
          headers: {
             "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
       }).then((r) => {
          if (r.ok) {
            r.json().then(newReview=> {
              setReview(newReview)
              setIsEdit(!isEdit)
              setFormData({
                  gift_id: "",
                  user_id: "",
                  content: "",
                  ratings: ""
            })
          })
          } else {
             r.json().then(setErrors)
          }
       })
    }
    console.log(errors)

    function handleChangeOnRate(e) {      
      e.preventDefault();
      let value = parseInt(e.target.ariaPosInSet);
      setFormData({ ...formData, ratings :value })
      
    }

    const handleGoBack = () => {
      setIsEdit(!isEdit)
    }

    return(
       <>
        { errors ? errors.map(error=> <p style={{color:'red'}} key={error}>{error}</p>) : null }
        <div className="star-widget">
        <form onSubmit={()=>handleUpdateReview(review.id)}>
          <span style={{paddingRight:'20px'}}>Ratings:</span>
           <Rating onRate={(e) => {
                handleChangeOnRate(e);
              }} name='ratings' maxRating={5} defaultRating={formData.ratings} icon='star' size='huge' />
            <header></header>
            <div className="textarea">
              <textarea onChange={handleFormData} name='content' value={formData.content} cols="30" placeholder="Describe your experience.."></textarea>
            </div>
            <div className="review-btn">
              <button onClick={(e)=>handleUpdateReview(e, review.id)} type="button">Post</button>
              <button onClick={handleGoBack} type="button">Cancel</button>
            </div>
          </form>
        </div>
        </>
    )
}

export default EditReviewForm