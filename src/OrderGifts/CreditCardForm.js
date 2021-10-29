import '../CSS/orderGifts.css'
import Swal from 'sweetalert2'

function CreditCardForm({handleFourthPrev, handleSubmit}) {

    const handleDecideAddFriend = () => {

    }

    return(
    <div className='payment'>
        <div className='bg'>
            <div className='credit-card'>
                <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/1-credit-card-chip-bigalbaloo-stock.jpg" alt="" className='chip' />
                <div className='card-logo'><i className="fab fa-cc-visa"></i></div>
                <h2 className='bankname' 
                 >Bank Name</h2>
                 {/* contentEditable='true' */}
                <form className='card-form'>
                    <div className='inputBox'>
                        <span>Card No.</span>
                        <input type='text' placeholder='0123 4567 8901 2345' maxLength='19' ></input>
                    </div>
                    <div className='inputBox'>
                        <span>Card Holder</span>
                        <input type='text' placeholder='John Doe' ></input>
                    </div>
                    <div className='group'>
                        <div className='inputBox'>
                            <span>Valid Thru</span>
                            <input type='text' placeholder='MM/YY' maxLength='5'></input>
                        </div>
                        <div className='inputBox'>
                            <span>CCV</span>
                            <input type='password' placeholder='***' maxLength='4'></input>
                        </div>
                    </div>
                    

                </form>
            </div>
            <div className="field btns final-btn">
                     <button onClick={handleFourthPrev} className="prev-3 prev">Previous</button>
                     <button onClick={handleSubmit} className="submit">Submit
                     </button>   
            </div>
        </div>
    </div>
    )
}

export default CreditCardForm