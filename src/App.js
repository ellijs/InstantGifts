
import './App.css';
import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom' 
import NavBar from './NavBar'
import Login from './Login'
import MyProfile from './MyProfile'
import HomePage from './HomePage'
import RenderGifts from './Gifts/RenderGifts'
import OrderGifts from './OrderGifts/OrderGifts'
import AddNewFriend from './Friends/AddNewFriend'
import EditFriend from './Friends/EditFriend'
import AdminDashboard from './Admin/AdminDashboard'
import EditGifts from './Admin/EditGifts'
import AddNewGift from './Admin/AddNewGift'
import UpdateGift from './Admin/UpdateGift'
import OrderDetails from './OrderDetails/OrderDetails'
import Modal from './OrderGifts/Modal'

function App() {
  const [ gifts, setGifts ] = useState([])
  const [ mostLikedGifts, setMostLikedGifts ] = useState([])
  const [ reviews, setReviews ] = useState([])
  const [ user, setUser ] = useState(null)
  const [ isToggle, setIsToggle ] = useState(true)
  const [ itemSearch, setItemSearch ] = useState("")

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
  
          setUser(user)
        });
      }
    });
  }, []);
  
  useEffect(() => {
    fetch('/reviews')
    .then(resp => resp.json())
    .then(setReviews)
  }, [])

  useEffect(() => {
    fetch('/gifts')
    .then(resp => resp.json())
    .then(gifts => {
      setGifts(gifts)
      setMostLikedGifts(gifts[0].most_liked_gifts.slice(0,6))
      // setIsLoaded(true)
    })
  }, [])


  // useEffect(() => {
  //   fetch('/friends')
  //   .then(resp => resp.json())
  //   .then(setFriends)
  // }, [])

  // const uploadSearch = () => {}
  
  if(!user) {
    return (
      <div >
        <div >
          <NavBar user={user} setUser={setUser} isToggle={isToggle} setIsToggle={setIsToggle} itemSearch={itemSearch} setItemSearch={setItemSearch}/>
        </div>
        <Switch>
          <Route path="/home">
            <HomePage setUser={setUser} mostLikedGifts={mostLikedGifts} setGifts={setGifts} reviews={reviews} setReviews={setReviews}/>
          </Route>
          <Route path="/login">
            <Login setUser={setUser} isToggle={isToggle} setIsToggle={setIsToggle} />
          </Route>
          <Route path="/gifts">
            <RenderGifts user={user} setUser={setUser} gifts={gifts} setGifts={setGifts} reviews={reviews} setReviews={setReviews} itemSearch={itemSearch} setItemSearch={setItemSearch}/>
          </Route>
          <Route exact path="/">
            <HomePage setUser={setUser}  mostLikedGifts={mostLikedGifts} gifts={gifts} setGifts={setGifts} reviews={reviews} setReviews={setReviews}/>
          </Route>
        </Switch>
      </div>
    )
  }
  return (
    <div>
        <div >
          <NavBar user={user} setUser={setUser} isToggle={isToggle} setIsToggle={setIsToggle} itemSearch={itemSearch} setItemSearch={setItemSearch}/>
        </div>
        <Switch>
            <Route path="/home">
                <HomePage setUser={setUser} mostLikedGifts={mostLikedGifts} gifts={gifts} reviews={reviews} setReviews={setReviews}/>
            </Route>
            <Route path="/myProfile">
                <MyProfile setUser={setUser} user={user} />
            </Route>
            <Route path="/new-friend">
                <AddNewFriend setUser={setUser} user={user} />
            </Route>
            <Route path="/friends/:id">
                <EditFriend setUser={setUser} user={user} />
            </Route>
            <Route exact path="/gifts/:id" >
                <OrderGifts user={user} setUser={setUser} gifts={gifts} setGifts={setGifts} reviews={reviews} setReviews={setReviews} itemSearch={itemSearch} setItemSearch={setItemSearch}/>
            </Route>
            <Route exact path="/gifts">
                <RenderGifts user={user} setUser={setUser} gifts={gifts} setGifts={setGifts} reviews={reviews} setReviews={setReviews} itemSearch={itemSearch} setItemSearch={setItemSearch}/>
            </Route>
            <Route exact path="/orders/:id">
                <OrderDetails user={user} setUser={setUser} gifts={gifts} setGifts={setGifts} reviews={reviews} setReviews={setReviews} />
            </Route>
            <Route exact path="/">
                <HomePage setUser={setUser} mostLikedGifts={mostLikedGifts} gifts={gifts} reviews={reviews} setReviews={setReviews}/>
            </Route>
            <Route path="/modal">
                <Modal setUser={setUser} />
            </Route>
            { user.admin ?
            <>
              <Route path="/dashboard">
                <AdminDashboard setUser={setUser} user={user} />
              </Route>
              <Route path="/editgifts">
                  <EditGifts setUser={setUser} user={user} gifts={gifts} setGifts={setGifts} />
              </Route>
              <Route path="/add-gift">
                  <AddNewGift setUser={setUser} user={user} gifts={gifts} setGifts={setGifts} />
              </Route>
              <Route path="/update-gift/:id">
                  <UpdateGift setUser={setUser} user={user} gifts={gifts} setGifts={setGifts} />
              </Route>
            </>
            : null }
         
        </Switch>
    </div>
  )

}

export default App;
