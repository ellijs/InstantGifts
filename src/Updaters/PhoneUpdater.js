import { useState } from 'react'

function PhoneUpdater ({ user, setUser, editPhone, setEditPhone }) {
    const [phone_number, setPhone]= useState(user.phone_number)

    const handleUpdate = (e) => {
        e.preventDefault();
        fetch(`users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                phone_number: phone_number
            }),
        })
        .then((r) => r.json())
        .then(data => {
            setUser(data)
            setEditPhone(!editPhone)
        }) 
    }

    return (
        <div className="data">
            <form onSubmit={handleUpdate}>
            <h4>Phone Number
                <span style={{paddingLeft: '20px'}}>
                <button className="ui primary button">Save</button>
                </span>

                <span style={{paddingLeft: '20px'}}>
                <button onClick={()=>setEditPhone(!editPhone)} className="ui primary button">X</button>
                </span>   
            </h4>
            <div className="form-group">
                <input className='edit-input' onChange={(e)=> setPhone(e.target.value)} value={phone_number} type="text" name="phone_number" required/><label htmlFor="phone_number">Phone</label>
            </div>
            </form>
        </div>
    )
}

export default PhoneUpdater