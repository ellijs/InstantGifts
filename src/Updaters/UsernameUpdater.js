import { useState } from 'react'

function UsernameUpdater ({ user, setUser, editUsername, setEditUsername }) {
    const [user_name, setUsername]= useState(user.user_name)

    const handleUpdate = (e) => {
        e.preventDefault();
        fetch(`users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_name: user_name
            }),
        })
        .then((r) => r.json())
        .then(data => {
            setUser(data)
            setEditUsername(!editUsername)
        }) 
    }

    return (
        <div className="data">
            <form onSubmit={handleUpdate}>
            <h4>Username
                <span style={{paddingLeft: '20px'}}>
                <button className="ui primary button">Save</button>
                </span>

                <span style={{paddingLeft: '20px'}}>
                <button onClick={()=>setEditUsername(!editUsername)} className="ui primary button">X</button>
                </span>   
            </h4>
            <div className="form-group">
                <input className='edit-input' onChange={(e)=> setUsername(e.target.value)} value={user_name} type="text" name="user_name" required/><label htmlFor="user_name">Username</label>
            </div>
            </form>
        </div>
    )
}

export default UsernameUpdater