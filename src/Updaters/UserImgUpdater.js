import { useState } from 'react'

function UserImgUpdater ({ user, setUser, editUserImg, setEditUserImg }) {
    const userImg = () => {
        if (user.img_url === null) {
            return defaultImg
        } else {
            return user.img_url
        }
    }
    const defaultImg = "https://simg.nicepng.com/png/small/128-1280406_view-user-icon-png-user-circle-icon-png.png"

    const [img_url, setImgUrl]= useState(userImg())

    const handleUpdate = (e) => {
        e.preventDefault();
        fetch(`users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                img_url: img_url
            }),
        })
        .then((r) => r.json())
        .then(data => {
            setUser(data)
            setEditUserImg(!editUserImg)
        }) 
    }

    return (
        <div className="data">
            <form onSubmit={handleUpdate}>
            <p style={{fontSize: '16px'}}>Img URL </p>
                <span style={{paddingLeft: '20px'}}>
                <button style={{marginBottom: '25px'}} className="ui primary button">Save</button>
                </span>

                <span style={{paddingLeft: '20px'}}>
                <button onClick={()=>setEditUserImg(!editUserImg)} className="ui primary button">X</button>
                </span>   
           
            <div className="form-group">
                <input style={{padding: ".5rem .1rem"}} onChange={(e)=> setImgUrl(e.target.value)} value={img_url} type="text" name="img_url" required/><label  htmlFor="img_url">Img URL</label>
            </div>
            </form>
        </div>
    )
}

export default UserImgUpdater