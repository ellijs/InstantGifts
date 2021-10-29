import '../CSS/modal.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import 'semantic-ui-css/semantic.min.css'
import GoToTop from '../GoToTop'

function Modal () {
    // const { id } = useParams()
    const [ order, setOrder ] = useState({})
    const [ isLoaded, setIsLoaded ] = useState(false)
    useEffect (()=>{ 
        fetch('/orders').then(r=> r.json()).then(data => {
            setOrder(data[0])
            setIsLoaded(true)
    })
    },[])

    return(
    <>
    { isLoaded && 
    <section className='section-modal'>
        <div id="my-modal" className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <Link to='/home'>
                    <span className="close">&times;</span>
                    </Link>
                    <h2>Order Complete!</h2>
                </div>
                <div className="modal-body">
                    <p>Your Gift has been sent!!</p>
                    <p style={{paddingBottom: '15px'}}>Thank you for choosing InstantGifts!</p>
                </div>
                <div className="modal-footer">
                    <h3><Link to='/home'><button style={{marginRight:'20px'}}className='ui orange button'>Home</button></Link></h3>
                    <h3><Link to={`/orders/${order.id}`}><button className='ui orange button'>Check my Order</button></Link></h3>
                </div>
            </div>
        </div>
        <GoToTop />
    </section>
    }
    </>
    )
}

export default Modal