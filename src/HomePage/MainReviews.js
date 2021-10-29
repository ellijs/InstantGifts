import '../CSS/mainReviews.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function MainReviews({ reviews, setReviews }) {

    const renderReviews = reviews.map(review => {
        return(
        <div key={review.id} className='col1'>
            <div className='testimonial'>
                <img src={review.user_img} alt={review.who_wrote_comment} />
                <div className='name'>{review.who_wrote_comment}</div>
                <div className='stars'>
                    {'⭐'.repeat(review.ratings)}                 
                </div>
                <p>{review.content}</p>
            </div>
        </div>
        )
    })

    return(
        <section className='main-reviews' >
            <div className='testimonials'>
                <div className='inner'>
                    <h1>Reviews</h1>
                    <div className='border'></div>
                        <div className='row1'>
                        {renderReviews}
                        </div>
    
                </div>
            </div>
        </section>
    )
}

export default MainReviews