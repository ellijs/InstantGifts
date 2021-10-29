import { useState } from 'react'

function NameUpdater ({ user, setUser, editName, setEditName }) {
    const [ name, setName]= useState(user.name)

    const handleUpdate = (e) => {
        e.preventDefault();
        fetch(`users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name
            }),
        })
        .then((r) => r.json())
        .then(data => {
            setUser(data)
            setEditName(!editName)
        }) 
    }

    return (
        <div className="data">
            <form onSubmit={handleUpdate}>
            <h4>Name
                <span style={{paddingLeft: '20px'}}>
                <button className="ui primary button">Save</button>
                </span>

                <span style={{paddingLeft: '20px'}}>
                <button onClick={()=>setEditName(!editName)} className="ui primary button">X</button>
                </span>   
            </h4>
            <div className="form-group">
                <input className='edit-input' onChange={(e)=> setName(e.target.value)} value={name} type="text" name="name" required/><label htmlFor="name">Name</label>
            </div>
            </form>
        </div>
    )
}

export default NameUpdater