import '../CSS/adminDashBoard.css'
import { Link } from 'react-router-dom'
import LinkDashboard from './LinkDashboard'

function AdminDashboard ({ gifts, setGifts }) {
    // let sidebar = document.querySelector(".admin-sidebar");
    // let sidebarBtn = document.querySelector(".admin-sidebarBtn");
    // function handleNavBar() {
    //   sidebar.classList.toggle("admin-active");
    //   if(sidebar.classList.contains("admin-active")){
    //   sidebarBtn.classList.replace("admin-bx-menu" ,"admin-bx-menu-alt-right");
    // }else
    //   sidebarBtn.classList.replace("admin-bx-menu-alt-right", "admin-bx-menu");
    // }

    return(
        
    <div className="admin-dashboard">
        <div className='navBarBg'></div>
        <div className="admin-sidebar">
            <div className="admin-logo-details">
                <i className='admin-box bxl-c-plus-plus'></i>
                {/* <span className="admin-logo_name">InstantGifts</span> */}
            </div>
            <ul className="nav-links">
                <Link to='/dashboard'>
                <li style={{listStyle: "none"}} >
                    {/* <a href="#" className="admin-active"> */}
                    <i className='admin-box bx-grid-alt' ></i>
                    <span className="admin-links_name">Dashboard</span>
                    {/* </a> */}
                </li>
                </Link>
                <Link to='/editgifts'>
                <li style={{listStyle: "none"}}>  
                    <i className='admin-box admin-bx-box' ></i>
                    <span className="admin-links_name">Product</span>          
                </li>
                </Link>
                <li style={{listStyle: "none"}}>
                   
                    <i className='admin-box bx-list-ul' ></i>
                    <span className="admin-links_name">Order list</span>
                   
                </li>
                <li style={{listStyle: "none"}}>
                   
                    <i className='admin-box bx-pie-chart-alt-2' ></i>
                    <span className="admin-links_name">Analytics</span>
                   
                </li>
                <li style={{listStyle: "none"}}>
                   
                    <i className='admin-box bx-coin-stack' ></i>
                    <span className="admin-links_name">Stock</span>
                   
                </li>
                <li style={{listStyle: "none"}}>
                
                    <i className='admin-box bx-book-alt' ></i>
                    <span className="admin-links_name">Total order</span>
                  
                </li>
                <li style={{listStyle: "none"}}>
                   
                    <i className='admin-box bx-user' ></i>
                    <span className="admin-links_name">Team</span>
                  
                </li>
                <li style={{listStyle: "none"}}>
                   
                    <i className='admin-box bx-message' ></i>
                    <span className="admin-links_name">Messages</span>
                   
                </li>
                <li style={{listStyle: "none"}}>
                   
                    <i className='admin-box bx-heart' ></i>
                    <span className="admin-links_name">Favrorites</span>
                 
                </li>
                <li style={{listStyle: "none"}}>
                 
                    <i className='admin-box bx-cog' ></i>
                    <span className="admin-links_name">Setting</span>
                 
                </li >
            </ul>
        </div>
        
        <section className="admin-home-section">
                    <LinkDashboard gifts={gifts} setGifts={setGifts} />
        </section>
    </div>
   
    )
}

export default AdminDashboard