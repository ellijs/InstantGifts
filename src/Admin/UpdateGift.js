import { useHistory, useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import GoToTop from '../GoToTop'

function UpdateGift ({ gifts, setGifts }) {
    let { id } = useParams();
    const newId = parseInt(id)
   
    const history = useHistory();
    const [ errors, setErrors ] = useState([])
    const gift = gifts.find(gift => gift = gift.id === newId)
    const [ formData, setFormData ] = useState(gift)
    
    const handleFormData = (e) => {
        let key = e.target.name;
        let value = e.target.value;
        setFormData({ ...formData, [key]:value })
    }

    const handleUpdatedItem = (e) => {
        e.preventDefault();
        fetch(`/gifts/${newId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }).then((r) => {
            if (r.ok) {
            r.json().then(item=> {   
                const updatedList = [...gifts].map(gift => {
                    if (gift.id === newId) {
                        return item
                    } else {
                        return gift
                    }
                })           
                setGifts(updatedList)
                history.push('/editgifts')
            })
            } else {
                r.json().then(setErrors)
            }
        })
    }
       
    return(
    <section className='friend-form'>
        <div className="friend-container">
            <div className="friend-title">Updated Items
            <Link to='/editgifts'>
            <span style={{paddingLeft: '430px'}}>X</span>
            </Link>
            </div>
                <div className="friend-content">
                    <form onSubmit={handleUpdatedItem}>
                        <div className="friend-user-details">
                            <div className="friend-input-box">
                                <span className="friend-details">Category</span>
                                <input onChange={handleFormData} name='category' value={formData.category} type="text" placeholder="Enter Category" required />
                            </div>
                            <div className="friend-input-box">
                                <span className="friend-details">Brand Name</span>
                                <input onChange={handleFormData} name='brand_name' value={formData.brand_name} type="text" placeholder="Enter Brand Name" required />
                            </div>
                            <div className="friend-input-box">
                              <span className="friend-details">Brand_URL</span>
                              <input onChange={handleFormData} name='brand_url' value={formData.brand_url} type="text" placeholder="Enter Brand Logo" required />
                            </div>
                            <div className="friend-input-box">
                              <span className="friend-details">Item Name</span>
                              <input onChange={handleFormData} name='item_name' value={formData.item_name} type="text" placeholder="Enter Item Name" required />
                            </div>
                            <div className="friend-input-box">
                              <span className="friend-details">Item URL</span>
                              <input onChange={handleFormData} name='gift_url' value={formData.gift_url} type="text" placeholder="Add Item Image" required />
                            </div>
                            <div className="friend-input-box">
                              <span className="friend-details">Price</span>
                              <input onChange={handleFormData} name='price' value={formData.price} type="text" placeholder="Enter Price" required />
                            </div>
                            <div className="friend-input-box">
                              <span className="friend-details">Description</span>
                              <textarea rows="4" cols="50" onChange={handleFormData} name='description' value={formData.description} type="textarea" placeholder="Add Description" required />
                            </div>
                            { errors.length > 0 ?
                            <div className="friend-input-box">
                              <span className="friend-details">Errors</span>
                              { errors.map(error=> <p style={{color: "red"}} key={error}>{error}</p>)}
                            </div>
                            : null }
                        </div>
                   <div className="friend-button">
               <input type="submit" value="Update Gift Item" />
              </div>
             </form>
           </div>
        </div>
        <GoToTop />
  </section>
    )
}

export default UpdateGift