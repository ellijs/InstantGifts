import GoToTop from './GoToTop'
import './CSS/myProfile.css'
import 'semantic-ui-css/semantic.min.css'
import { useState } from 'react'
import EditProfileForm from './EditProfileForm'
import { Link } from 'react-router-dom'

function MyProfile ({ user, setUser }) {
    const [ edit, setEdit ] = useState(false)
    const { name, user_name, email, phone_number, birthdate, friends, recent_orders, img_url } = user
    const [ newFriends, setNewFriends ] = useState(user.friends)

    const renderOrders = recent_orders.map(order => 
       
    <tr key={order.id}>
        <td>{order.receiver_name}</td>
        <td>{order.created_at.slice(0,10)}</td>
        <td><Link to={`/orders/${order.id}`}><button className="ui primary button" style={{fontSize:'12px'}}>Detail</button></Link></td>
        {/* <td><Link to={`/orders/${order.id}/${user.id}/${order.gift_id}`}><button className="ui primary button" style={{fontSize:'12px'}}>Detail</button></Link></td> */}
      </tr> )

    const handleRemoveFriend = (id) => {
        fetch(`/friends/${id}`, {
            method: "DELETE"
        })
        let removeFriend = friends.filter(friend => friend.id !== id)
        setNewFriends(removeFriend)
    }

    const renderFriends = newFriends.map(friend => {
          return (
            <tr key={friend.id}>
                <td>
                    <div className="friedns-img">
                        <img src={friend.img_url} alt={friend.name}></img>
                    </div>
                </td>
                <td>{friend.name}</td>
                <td>{friend.birthdate}</td>
                <td>
                    <Link to='/gifts'>
                    <button className="ui primary button" style={{fontSize:'11px'}}>Send Gift</button>
                    </Link>
                </td>
                <td>
                    <Link to={`/friends/${friend.id}`} > 
                    <button className="ui primary button friend-edit" style={{fontSize:'11px'}}>
                    Edit</button>
                    </Link>
                    <button onClick={()=>handleRemoveFriend(friend.id)} className="ui primary button friend-edit" style={{fontSize:'11px'}}>X</button>
                </td>
            </tr> 
    )})
 
    return (
        <section className='myProfile'>
        { edit ? 
        <EditProfileForm user={user} setUser={setUser} edit={edit} setEdit={setEdit} renderFriends={renderFriends} renderOrders={renderOrders}/>
            : 
        <>
        <div className="wrapper">
        <div className="left">
            <img src={img_url ? img_url : "https://simg.nicepng.com/png/small/128-1280406_view-user-icon-png-user-circle-icon-png.png"} alt="user" style={{width:"70%"}}  alt="user" style={{width:"70%"}} />
            <h1>{name ? name : "Add Name"}</h1>
            <p>{user_name}</p>
            <button onClick={()=>setEdit(!edit)} className="ui primary button">Edit  Profile</button>
        </div>
        <div className="right">
            <div className="info">
                <h3>Information</h3> 
                <div className="info_data">
                    <div className="data">
                        <h4>Email</h4>
                        <p>{email}</p>
                    </div>
                    <div className="data">
                        <h4>Phone</h4>
                        <p>{ phone_number? phone_number : "Add Phone Number"}</p>
                    </div>
                    <div className="data">
                        <h4>BirthDay</h4>
                        <p>{birthdate ? birthdate : " Add Birthday"}</p>
                    </div>
                </div>
            </div>  
      
            <div className="projects">
                <h3>Orders & Friends</h3>
                <div className="projects_data">
                    <div className="data">
                        <h4>Recent Orders</h4>
                        <table className="content-table">
                            <thead>
                              <tr>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Order Detail</th>
                              </tr>
                            </thead>
                            <tbody>
                                { renderOrders.length > 0 ? renderOrders : 
                                <td>No previous order</td> }                               
                            </tbody>
                        </table>
                    </div>
                    <div className="data">
                        <h4>Friends</h4>
                        <table className="content-table">
                            <thead>
                              <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Birthday</th>
                                <th>
                                    <Link to='/new-friend'>
                                    <button className="ui primary button" style={ {fontSize:'11px'}}>Add New friend</button>
                                    </Link>
                                </th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                            { renderFriends.length > 0 ? renderFriends : 
                                <td>No Friends yet</td> }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>  
        </div>
    </div>
    <GoToTop />
    </>
    
    }
    </section>
    )
}

export default MyProfile