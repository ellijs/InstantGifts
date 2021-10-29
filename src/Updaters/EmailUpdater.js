import { useState } from 'react'

function EmailUpdater ({ user, setUser, editEmail, setEditEmail }) {
    const [email, setEmail]= useState(user.email)

    const handleUpdate = (e) => {
        e.preventDefault();
        fetch(`users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email
            }),
        })
        .then((r) => r.json())
        .then(data => {
            setUser(data)
            setEditEmail(!editEmail)
        }) 
    }

    return (
        <div className="data">
            <form onSubmit={handleUpdate}>
            <h4>Email
                <span style={{paddingLeft: '20px'}}>
                <button className="ui primary button">Save</button>
                </span>

                <span style={{paddingLeft: '20px'}}>
                <button onClick={()=>setEditEmail(!editEmail)} className="ui primary button">X</button>
                </span>   
            </h4>
            <div className="form-group">
                <input className='edit-input' onChange={(e)=> setEmail(e.target.value)} value={email} type="text" name="email" required/><label htmlFor="email">Email</label>
            </div>
            </form>
        </div>
    )
}

export default EmailUpdater