import { NavLink, useHistory } from 'react-router-dom'
import { useState } from 'react';

function NavBar ({ user, setUser, itemSearch, setItemSearch}) {
    const [navbar, setNavbar] = useState(false)
    const [search, setSearch] = useState(false)
   
    const history = useHistory()
    let userImg;

    function handleLogoutClick() {
        fetch('/logout', {
            method: "DELETE"
        })
        .then((r) => {
            if (r.ok) {
                setUser(null);
                history.push('/home')
            }
        });          
    }

    if(user){
        if(user.profile_img) {
            userImg = user.profile_img
        } else {
            userImg = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E'
        }
    }

    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground);

    const clearSearch = () => {
        document.getElementById('mysearch').value = '';
    }

    // function handleSearch(e) {
    //    uploadSearch(e.target.value)
    // }

    return (
        <>
        <nav className={navbar ? 'navigation active' : 'navigation'}  >
             <div className='logo'>
             <img className='logoImg' src="https://i.ibb.co/F3Fg8BG/Screen-Shot-2021-10-04-at-2-40-29-AM.png" alt="Screen-Shot-2021-10-04-at-2-40-29-AM" border="0" />
             </div>
             <div className={ search ? 'search active' : 'search' }>
                 <div onClick={()=>setSearch(!search)} className='icon'></div>
                 <div className='input'>
                     <input onChange={(e)=>setItemSearch(e.target.value)} value={itemSearch} type="text" placeholder='Search' id='mysearch' />
                 </div>
                 <span onClick={clearSearch}className='clear'></span>
             </div>
        { user ? 

        (<ul>

        <NavLink style={{textDecoration: "none"}} exact to="/home">
            <li>Home</li>
        </NavLink>
        <NavLink style={{textDecoration: "none"}} exact to="/gifts">
            <li>Gifts</li>
        </NavLink>
        <NavLink style={{textDecoration: "none"}} exact to="/myProfile">
           <li>My Page</li>
        </NavLink>
        
        <NavLink style={{textDecoration: "none"}} to="/myProfile">      
            <li className="" >
              Hello, {user.user_name}!
              {/* <img className='navImg' src={user.img_url} alt={user.name}/> */}
            </li>        
        </NavLink> 
        { user.admin ?
            <>
                <NavLink to="/dashboard">
                   <li>DashBoard</li>
                </NavLink>
            </>
            : null 
        }
        <li onClick={handleLogoutClick} >Logout</li>
         </ul>)  
        : 
         (<ul> 
         <NavLink style={{textDecoration: "none"}} exact to="/home">
           <li>Home</li>
        </NavLink>
        <NavLink style={{textDecoration: "none"}} exact to="/gifts">
            <li>Gifts</li>
        </NavLink>
        <NavLink exact to="/login" style={{textDecoration: "none"}}>
           <li>Login/Register</li>
        </NavLink>

         </ul>)}
        
    </nav>
    {/* <section className="banner"></section> */}
    </>

    )
}

export default NavBar