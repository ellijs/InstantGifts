import '../CSS/giftDetail.css'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import swal from 'sweetalert'

function GiftDetail ({ user, gift }) {

    const history = useHistory()

    const [ isClicked, setIsClicked ] = useState(false)
    const [ newLikes, setNewLikes ] = useState(gift.likes)
    // const history = useHistory()

    const showGiftDetail = () => {
        setIsClicked(!isClicked)
    }

    function increaseLikes(id) {
        fetch(`/gifts/${id}/like`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            gift
          }),
        })
          .then((r) => {
           if (r.ok) {
               r.json().then((obj) => setNewLikes(obj.likes));
           } else {
                swal("Please Login/Signup first!", {
                    buttons: true,
                    closeOnEsc: false
                  })
                  .then((value) => {
                    switch (value) {
                   
                      case true:
                        history.push('/login')
                        break;
                          
                      default:
                        break;
                    }
                  });
           }
          })
      }

    function handleUser () {
        if (!user) {
            swal("Please Login/Signup first!", {
                buttons: true,
                closeOnEsc: false
              })
              .then((value) => {
                switch (value) {
               
                  case true:
                    history.push('/login')
                    break;
                      
                  default:
                    break;
                }
              });
        }
    }


    return(

        <>
        { isClicked ?

        (<div className="box back">
            <div className='background' onClick={showGiftDetail}>
                <div className='background'>
                    <img className='back-img' src={gift.gift_url} alt="gift"/>
                </div>
                <div className="text gift-detail">
                    <h3 style={{fontSize: '15px'}}>{gift.item_name}<span><img className='back-logo' src={gift.brand_url} alt="gift"/></span></h3>
                    <h3 style={{fontSize: '15px'}} >${gift.price}</h3>
                    <p className='back-p'>{gift.description}</p>
                </div>
            </div>
                <div style={{justifyContent: 'space-between'}}className='likes-and-button background'>
                    <div className='pr'>
                        <div style={{fontSize: '12px'}} className="ui right labeled button" role="button" tabIndex="0">
                            <button onClick={()=>increaseLikes(gift.id)} className="ui red button">
                           <i aria-hidden="true" className="heart icon"></i>Like
                            </button>
                            <a className="ui red left pointing basic label">{newLikes}
                             </a>
                          </div>
                {/* <Link>
                <button style={{fontSize: '12px'}} className='ui primary button see-detail'>See Detail</button>
                </Link> */}
                <Link to={`/gifts/${gift.id}`}>
                    <button onClick={handleUser} style={{fontSize: '14px'}}  className='ui primary button order-now background' >Order Now</button>
                </Link>
                </div>
            </div>
            
        </div>)

        :

        (<div className="box front">
            <div onClick={showGiftDetail} className="imgBx">
                <img src={gift.gift_url} alt="gift"/>
            </div>
            <div className="text gift-detail">
                <h3>{gift.item_name} <img className='back-logo' src={gift.brand_url}></img></h3>
                <h3>${gift.price}</h3>
            </div>
         </div>)
       }
       </>




    )
}

export default GiftDetail