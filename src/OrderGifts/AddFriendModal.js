// import '../CSS/addFriendModal.css'

// function AddFriendModal ({ setAddFriendPopup, setNewfriend }) {

//     const handleNoFriend = () => {
//         setNewfriend(false)
//         setAddFriendPopup(false); 
//     }

//     const handleYesFriend = () => {
//         setNewfriend(true)
//         setAddFriendPopup(false); 
//     }

//     return(
//         <>
//             <div className="modalBackground">
//               <div className="modalContainer">
//                 <div className="titleCloseBtn">
//                   <button
//                     onClick={handleNoFriend}
//                   >
//                     X
//                   </button>
//                 </div>
//                 <div className="modaltitle">
//                   <h1>Whould you like to add receipient to your friend's list?</h1>
//                 </div>
//                 {/* <div className="modalbody">
//                   <p>Please Choose one</p>
//                 </div> */}
//                 <div className="modalfooter">
//                   <button style={{backgroundColor: 'red'}}
//                     onClick={handleNoFriend}                    
//                     id="cancelBtn"
//                   >
//                     No 
//                   </button>
//                   <button
//                     onClick={handleYesFriend}
//                     id="cancelBtn"
//                   >Yes</button>
//                 </div>
//               </div>
//             </div>
//         </>
//     )

// }

// export default AddFriendModal