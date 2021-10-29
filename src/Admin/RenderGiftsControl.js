import '../CSS/renderGiftsControl.css'
import { useState } from 'react'
import GoToTop from '../GoToTop'
import { Link } from 'react-router-dom'
import { GrSearch } from "react-icons/gr";
import swal from 'sweetalert'

function RenderGiftsControl ({ gifts, setGifts }) {
    const [ itemSearch, setItemSearch ] = useState('')

    let sidebar = document.querySelector(".admin-sidebar");
    let sidebarBtn = document.querySelector(".admin-sidebarBtn");
    function handleNavBar() {
      sidebar.classList.toggle("admin-active");
      if(sidebar.classList.contains("admin-active")){
      sidebarBtn.classList.replace("admin-bx-menu" ,"admin-bx-menu-alt-right");
    }else
      sidebarBtn.classList.replace("admin-bx-menu-alt-right", "admin-bx-menu");
    }

    const handleSearch = (e) => {
        setItemSearch(e.target.value)
    }

    const renderGifts = [...gifts].filter(gift => {
        if ( itemSearch.length > 0 ) {
            return ( gift.item_name.toLowerCase().includes(itemSearch.toLowerCase()) || gift.brand_name.toLowerCase().includes(itemSearch.toLowerCase()) || gift.category.toLowerCase().includes(itemSearch.toLowerCase()))
        } else {
            return true
        }
    }).map(gift => {
        const { id, category, brand_url, item_name, price, gift_url } = gift;
        return(
            <div key={gift.id} className="admin-box">
            <div className="admin-right-side">
              <div style={{fontSize:"15px"}}  className="admin-box-topic"><span className='brand-url-span'><img src={brand_url} alt=""  className='brand-gift-img'
                ></img></span>{category}</div>
              <div style={{fontSize:"12px"}} className="admin-number">{item_name}</div>
              <div className="admin-indicator">
                <img src={gift_url} alt="" className='edit-gift-img'
                // className='admin-box bx-down-arrow-alt down'
                ></img>
                <span style={{fontSize:"14px"}}className="admin-text">${price}</span>
              </div>
            </div>
            {/* <i className='admin-box bxs-cart-download admin-cart four' ></i> */}
            {/* <div className='edit-gift-btn'>
            <button style={{fontSize: '15px'}} className='circular ui icon button'>+</button>
            <button style={{fontSize: '15px'}} className='circular ui icon button'>x</button>
            </div> */}
            {/* <div class="ui divider"></div>
                <div class="ui vertical basic buttons">
                <button style={{fontWeight: '1200'}}class="ui button">+</button>
                <button style={{fontWeight: '1200'}}class="ui button">x</button>
            </div> */}
            <Link to={`/update-gift/${id}`}>
            <i style={{backgroundColor: '#8FDACB'}} className='admin-box bx-up-arrow-alt edit-gift-btn'>+</i>
            </Link>
            <i onClick={()=>handleDelete(gift.id)} style={{marginLeft: '5px'}} style={{backgroundColor:'#8FDACB'}} className='admin-box bx-up-arrow-alt delete-gift-btn'>x</i>
          </div>
        )
    })

    const handleDelete = (id) => {

      swal("Are you sure you want to delete this item?", {
        buttons: {
          cancel: "No",
          Yes: true,
        },
      })
      .then((value) => {
        switch (value) {
       
          case "Yes":
            fetch(`/gifts/${id}`, {
            method: "DELETE"
            })
            const newList = [...gifts].filter(gift => gift.id !== id)
            setGifts(newList)
            break;
              
          default:
            break;
        }
      });
     
        // if( window.confirm("Are you sure you want to delete this item?")) {
        //     fetch(`/gifts/${id}`, {
        //         method: "DELETE"
        //     })
        //     const newList = [...gifts].filter(gift => gift.id !== id)
        //     setGifts(newList)
        // }    
    }


    return(
        <>
        <nav>
              <div onClick={handleNavBar} className="admin-sidebar-button">
                {/* <i className='admin-box bx-menu admin-sidebarBtn'></i> */}
                <span className="admin-dashboard">Item Controls</span>
              </div>
              <div className="admin-search-box">
                <input onChange={handleSearch} type="text" placeholder="Search..."/>
                <i className='admin-box admin-box-search' ><GrSearch/></i>
              </div>
              <div className="admin-profile-details">
                {/* <!--<img src="images/profile.jpg" alt="">--> */}
                <span className="admin-admin_name">
                <Link to='/add-gift'>
                <button 
                // style={{backgroundColor: '#8FDACB'}} 
                className='ui primary button'>Add New Item</button>
                </Link></span>
                <i className='admin-box box-chevron-down' ></i>
              </div>
            </nav>

            <div className="admin-home-content">
              <div className="admin-overview-boxes">

                { renderGifts }

              </div>
          </div>
          <GoToTop />
          </>
    )
}

export default RenderGiftsControl