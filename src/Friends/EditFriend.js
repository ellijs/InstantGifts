import { useState } from 'react'
import '../CSS/addNewFriend.css'
import { useHistory, useParams, Link } from 'react-router-dom'
import GoToTop from '../GoToTop';


function EditFriend ({ user, setUser }) {
    const { id } = useParams();
    const friend = user.friends.find(friend => friend.id == id) 

    const history = useHistory();
    const [ errors, setErrors ] = useState([])
    const [ formData, setFormData ] = useState(friend)
  
    const handleFormData = (e) => {
        let key = e.target.name;
        let value = e.target.value;
        setFormData({ ...formData, [key]:value })
    }

    const handleEditFriend = (e) => {
        e.preventDefault();
        fetch(`/friends/${formData.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }).then((r) => {
            if (r.ok) {
                r.json().then(user=> {              
                setUser(user)
                history.push('/myProfile')
                })
            } else {
                r.json().then(setErrors)
            }
        })
    }

    return(
    <section className='friend-form'>
        <div className="friend-container">
            <div className="friend-title">Edit Friend's Info
            <Link to='/myProfile'>
            <span style={{paddingLeft: '550px'}}>X</span>
            </Link>
            </div>
                <div className="friend-content">
                    <form onSubmit={handleEditFriend}>
                        <div className="friend-user-details">
                            <div className="friend-input-box">
                                <span className="friend-details">Full Name</span>
                                <input onChange={handleFormData} name='name' value={formData.name} type="text" placeholder="Enter friend's name" required />
                            </div>
                            <div className="friend-input-box">
                                <span className="friend-details">Phone Number</span>
                                <input onChange={handleFormData} value={formData.phone_number} name='phone_number' type="text" placeholder="Enter friend's number" required />
                            </div>
                            <div className="friend-input-box">
                                <span className="friend-details">Email</span>
                                <input onChange={handleFormData} name='email' value={formData.email} type="text" placeholder="Enter friend's email" required />
                            </div>
                            <div className="friend-input-box">
                                <span className="friend-details">BirthDate</span>
                                <input onChange={handleFormData} name='birthdate' value={formData.birthdate} type="date" placeholder="Enter friend's number" required />
                            </div>
                            <div className="friend-input-box">
                                <span className="friend-details">Image</span>
                                <input onChange={handleFormData} name='img_url' value={formData.img_url} type="text" placeholder="Add friend's Image" required />
                            </div>
                            { errors.length > 0 ?
                            <div className="friend-input-box">
                                <span className="friend-details">Errors</span>
                                { errors.map(error=> <p style={{color: "red"}} key={error}>{error}</p>)}
                            </div>
                            : null }
                        </div>           
                    <div className="friend-button">
                       <input type="submit" value="Update Friend's Info" />
                    </div>
             </form>
           </div>
        </div>
        <GoToTop />
  </section>
    )
}

export default EditFriend