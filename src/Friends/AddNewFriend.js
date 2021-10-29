import { useState } from 'react'
import '../CSS/addNewFriend.css'
import { useHistory, Link } from 'react-router-dom'
import GoToTop from '../GoToTop';


function AddNewFriend ({ user, setUser }) {
    const history = useHistory();
    const [ errors, setErrors ] = useState([])
    const [ formData, setFormData ] = useState({
        name : "",
        email : "",
        phone_number : "",
        img_url : "",
        birthdate: ""
    })

    const handleFormData = (e) => {
        let key = e.target.name;
        let value = e.target.value;
        setFormData({ ...formData, [key]:value })
    }

    const handleNewFriend = (e) => {
        e.preventDefault();
        fetch('/friends', {
            method: "POST",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
         }).then((r) => {
            if (r.ok) {
              r.json().then(user=> {
                setUser(user)
                history.push('./myProfile')
              })
            } else {
               r.json().then(setErrors)
            }
         })
      }

    return(
    <section className='friend-form'>
        <div className="friend-container">
            <div className="friend-title">Add New Friend
            <Link to='/myProfile'>
            <span style={{paddingLeft: '530px'}}>X</span>
            </Link>
            </div>
                <div className="friend-content">
                    <form onSubmit={handleNewFriend}>
                        <div className="friend-user-details">
                            <div className="friend-input-box">
                                <span className="friend-details">Full Name</span>
                                <input onChange={handleFormData} name='name' type="text" placeholder="Enter friend's name" required />
                            </div>
                            <div className="friend-input-box">
                                <span className="friend-details">Phone Number</span>
                                <input onChange={handleFormData} name='phone_number' type="text" placeholder="Enter friend's number" required />
                            </div>
                            <div className="friend-input-box">
                              <span className="friend-details">Email</span>
                              <input onChange={handleFormData} name='email' type="text" placeholder="Enter friend's email" required />
                            </div>
                            <div className="friend-input-box">
                              <span className="friend-details">BirthDate</span>
                              <input onChange={handleFormData} name='birthdate' type="date" placeholder="Enter friend's number" required />
                            </div>
                            <div className="friend-input-box">
                              <span className="friend-details">Image</span>
                              <input onChange={handleFormData} name='img_url' type="text" placeholder="Add friend's Image" required />
                            </div>
                            { errors.length > 0 ?
                            <div className="friend-input-box">
                              <span className="friend-details">Errors</span>
                              { errors.map(error=> <p style={{color: "red"}} key={error}>{error}</p>)}
                            </div>
                            : null }
                        </div>
          
                   <div className="friend-button">
               <input type="submit" value="Add Friend" />
              </div>
             </form>
           </div>
        </div>
        <GoToTop />
  </section>
    )
}

export default AddNewFriend