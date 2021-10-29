import { useState } from 'react'

function BirthdateUpdater ({ user, setUser, editBirthdate, setEditBirthdate }) {
    const [birthdate, setBirthdate]= useState(user.birthdate)

    const handleUpdate = (e) => {
        e.preventDefault();
        fetch(`users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                birthdate: birthdate
            }),
        })
        .then((r) => r.json())
        .then(data => {
            setUser(data)
            setEditBirthdate(!editBirthdate)
        }) 
    }

    return (
        <div className="data">
            <form onSubmit={handleUpdate}>
            <h4>Birthday
                <span style={{paddingLeft: '20px'}}>
                <button className="ui primary button">Save</button>
                </span>

                <span style={{paddingLeft: '20px'}}>
                <button onClick={()=>setEditBirthdate(!editBirthdate)} className="ui primary button">X</button>
                </span>   
            </h4>
            <div className="form-group">
                <input className='edit-input' onChange={(e)=> setBirthdate(e.target.value)} value={birthdate} type="date" name="birthdate" required/><label htmlFor="birthdate">Birthday</label>
            </div>
            </form>
        </div>
    )
}

export default BirthdateUpdater