import { useHistory, Link } from 'react-router-dom'
import { useState } from 'react'
import GoToTop from '../GoToTop'

function AddNewGift ({ gifts, setGifts }) {
    const history = useHistory();
    const [ errors, setErrors ] = useState([])
    const [ formData, setFormData ] = useState({
        category : "",
        brand_name : "",
        brand_url : "",
        item_name : "",
        description: "",
        price: 0,
        likes: 0
    }) 

    const handleFormData = (e) => {
        let key = e.target.name;
        let value = e.target.value;
        setFormData({ ...formData, [key]:value })
    }

    const handleNewItem = (e) => {
        e.preventDefault();
        fetch('/gifts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }).then((r) => {
            if (r.ok) {
            r.json().then(item=> {              
                setGifts([...gifts, item])
                history.push('./editgifts')
            })
            } else {
                r.json().then(setErrors)
            }
        })
    }
       
    return(
    <section className='friend-form'>
        <div className="friend-container">
            <div className="friend-title">Add New Gift Items
            <Link to='/editgifts'>
            <span style={{paddingLeft: '530px'}}>X</span>
            </Link>
            </div>
                <div className="friend-content">
                    <form onSubmit={handleNewItem}>
                        <div className="friend-user-details">
                            <div className="friend-input-box">
                                <span className="friend-details">Category</span>
                                <input onChange={handleFormData} name='category' type="text" placeholder="Enter Category" required />
                            </div>
                            <div className="friend-input-box">
                                <span className="friend-details">Brand Name</span>
                                <input onChange={handleFormData} name='brand_name' type="text" placeholder="Enter Brand Name" required />
                            </div>
                            <div className="friend-input-box">
                              <span className="friend-details">Brand_URL</span>
                              <input onChange={handleFormData} name='brand_url' type="text" placeholder="Enter Brand Logo" required />
                            </div>
                            <div className="friend-input-box">
                              <span className="friend-details">Item Name</span>
                              <input onChange={handleFormData} name='item_name' type="text" placeholder="Enter Item Name" required />
                            </div>
                            <div className="friend-input-box">
                              <span className="friend-details">Item URL</span>
                              <input onChange={handleFormData} name='gift_url' type="text" placeholder="Add Item Image" required />
                            </div>
                            <div className="friend-input-box">
                              <span className="friend-details">Price</span>
                              <input onChange={handleFormData} name='price' type="text" placeholder="Enter Price" required />
                            </div>
                            <div className="friend-input-box">
                              <span className="friend-details">Description</span>
                              <textarea rows="4" cols="50" onChange={handleFormData} name='description' type="textarea" placeholder="Add Description" required />
                            </div>
                            { errors.length > 0 ?
                            <div className="friend-input-box">
                              <span className="friend-details">Errors</span>
                              { errors.map(error=> <p style={{color: "red"}} key={error}>{error}</p>)}
                            </div>
                            : null }
                        </div>
          
                   <div className="friend-button">
               <input type="submit" value="Add Gift Item" />
              </div>
             </form>
           </div>
        </div>
        <GoToTop />
  </section>
    )
}

export default AddNewGift