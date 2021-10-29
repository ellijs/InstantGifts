import GoToTop from '../GoToTop'
import { FaLongArrowAltUp, FaLongArrowAltDown, FaMoneyBillWave } from "react-icons/fa";
import { GrCart, GrSearch } from "react-icons/gr";
import { GiCancel } from "react-icons/gi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

function LinkDashboard () {

    let sidebar = document.querySelector(".admin-sidebar");
    let sidebarBtn = document.querySelector(".admin-sidebarBtn");
    function handleNavBar() {
      sidebar.classList.toggle("admin-active");
      if(sidebar.classList.contains("admin-active")){
      sidebarBtn.classList.replace("admin-bx-menu" ,"admin-bx-menu-alt-right");
    }else
      sidebarBtn.classList.replace("admin-bx-menu-alt-right", "admin-bx-menu");
    }

    return(
        <>
        <nav>
              <div onClick={handleNavBar} className="admin-sidebar-button">
                {/* <i className='admin-box bx-menu admin-sidebarBtn'></i> */}
                <span className="admin-dashboard">Dashboard</span>
              </div>
              <div className="admin-search-box">
                <input type="text" placeholder="Search..."/>
                <i className='admin-box admin-box-search' ><GrSearch/></i>
              </div>
              <div className="admin-profile-details">
                {/* <!--<img src="images/profile.jpg" alt="">--> */}
                <span className="admin-admin_name"></span>
                <i className='admin-box box-chevron-down' ></i>
              </div>
            </nav>

            <div className="admin-home-content">
              <div className="admin-overview-boxes">

                <div className="admin-box">
                  <div className="admin-right-side">
                    <div className="admin-box-topic">Total Order</div>
                    <div className="admin-number">40,876</div>
                    <div className="admin-indicator">
                      <i><FaLongArrowAltUp className="fas fa-arrow-up"/></i>
                      <span className="admin-text">Up from yesterday</span>
                    </div>
                  </div>
                  <i className='admin-box bx-cart-alt admin-cart'><GrCart/></i>
                </div>

                <div className="admin-box">
                  <div className="admin-right-side">
                    <div className="admin-box-topic">Total Sales</div>
                    <div className="admin-number">$38,876</div>
                    <div className="admin-indicator">
                    <i><FaLongArrowAltUp className="fas fa-arrow-up"/></i>
                      <span className="admin-text">Up from yesterday</span>
                    </div>
                  </div>
                  <i className='admin-box bxs-cart-add admin-cart two' ><FaMoneyBillWave style={{margin: '0 0 5px;'}}/></i>
                </div>

                <div className="admin-box">
                  <div className="admin-right-side">
                    <div className="admin-box-topic">Total Profit</div>
                    <div className="admin-number">$12,876</div>
                    <div className="admin-indicator">
                    <i><FaLongArrowAltUp className="fas fa-arrow-up"/></i>
                      <span className="admin-text">Up from yesterday</span>
                    </div>
                  </div>
                  <i className='admin-box bx-cart admin-cart three' ><RiMoneyDollarCircleFill /></i>
                </div>

                <div className="admin-box">
                  <div className="admin-right-side">
                    <div className="admin-box-topic">Total Return</div>
                    <div className="admin-number">$1,086</div>
                    <div className="admin-indicator">
                    <i><FaLongArrowAltDown className="admin-down "/></i>
                      <span className="admin-text">Down From Today</span>
                    </div>
                  </div>
                  <i className='admin-box bxs-cart-download admin-cart four' ><GiCancel/></i>
                </div>

              </div>
              

            <div className="admin-sales-boxes">
              <div className="admin-recent-sales admin-box">

                <div className="admin-title">Recent Sales</div>

                <div className="admin-sales-details">

                  <ul className="admin-details">
                    <li className="admin-topic">Date</li>
                    <li><a>02 Oct 2021</a></li>
                    <li><a>02 Oct 2021</a></li>
                    <li><a>02 Oct 2021</a></li>
                    <li><a>02 Oct 2021</a></li>
                    <li><a>02 Oct 2021</a></li>
                    <li><a>02 Oct 2021</a></li>
                    <li><a>02 Oct 2021</a></li>
                  </ul>

                  <ul className="admin-details">
                  <li className="admin-topic">Customer</li>
                  <li><a>Alex Doe</a></li>
                  <li><a>David Mart</a></li>
                  <li><a>Roe Parter</a></li>
                  <li><a>Diana Penty</a></li>
                  <li><a>Martin Paw</a></li>
                  <li><a>Doe Alex</a></li>
                  <li><a>Aiana Lexa</a></li>
                  <li><a>Rexel Mags</a></li>
                   <li><a>Tiana Loths</a></li>
                </ul>

                <ul className="admin-details">
                  <li className="admin-topic">Sales</li>
                  <li><a>Delivered</a></li>
                  <li><a>Pending</a></li>
                  <li><a>Returned</a></li>
                  <li><a>Delivered</a></li>
                  <li><a>Pending</a></li>
                  <li><a>Returned</a></li>
                  <li><a>Delivered</a></li>
                   <li><a>Pending</a></li>
                  <li><a>Delivered</a></li>
                </ul>

                <ul className="admin-details">
                  <li className="admin-topic">Total</li>
                  <li><a>$204.98</a></li>
                  <li><a>$24.55</a></li>
                  <li><a>$25.88</a></li>
                  <li><a>$170.66</a></li>
                  <li><a>$56.56</a></li>
                  <li><a>$44.95</a></li>
                  <li><a>$67.33</a></li>
                   <li><a>$23.53</a></li>
                   <li><a>$46.52</a></li>
                </ul>

                </div>
                <div className="admin-button">
                  <a>See All</a>
                </div>
               </div>

              <div className="admin-top-sales box">
                <div className="admin-title">Top Seling Product</div>
                <ul className="admin-top-sales-details">
                  <li>
                  <a>
                    {/* <!--<img src="images/sunglasses.jpg" alt="">--> */}
                    <span className="admin-product">Sweety Chocolattie</span>
                  </a>
                  <span className="admin-price">$1107</span>
                </li>
                <li>
                  <a>
                     {/* <img src="images/jeans.jpg" alt=""> */}
                    <span className="admin-product">Pink Heart Macaronade </span>
                  </a>
                  <span className="admin-price">$1567</span>
                </li>
                <li>
                  <a>
                   {/* <!-- <img src="images/nike.jpg" alt="">--> */}
                    <span className="admin-product">Family bundle king</span>
                  </a>
                  <span className="admin-price">$1234</span>
                </li>
            
                </ul>
              </div>
            </div>

          </div>
          <GoToTop />
          </>
    )
}

export default LinkDashboard