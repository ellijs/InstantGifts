import GoToTop from './GoToTop'
import { Link } from 'react-router-dom'
import './CSS/homepage.css'
import GiftCard from './GiftCard'
import MainReviews from './HomePage/MainReviews'


function HomePage ({ mostLikedGifts, gifts, setGifts, reviews, setReviews }) {

    const renderGifts = mostLikedGifts.map(gift => <GiftCard key={gift.id} gift={gift}/>)

    return (
        <>
        <section className="homepage-banner" id="banner">
            <div className="homepage-content">
            <h2>Send gift in minute</h2>
             <p>Find & Gift From a Wide Variety of Gift Items Delivered Instantly with your loving message! You do not need to know their address or any other information. All you need is one simple E-mail or Phone number. Explore and Shop from Over lots of Gifts from famouse Brands that Your Recipient Will Love. Perfect for All Occasions. Send them your love.</p>
             <Link to='/gifts' className="homepage-btn" mostLikedGifts='mostLikedGiftss'>
                <p className='homepage-p'>Shop Now</p>
             </Link>
          </div>
        </section>

        <section className="about" id="about">
            <div className="row">
                <div className="col50">
                    <h2 className="titleText"><span>A</span>bout Us</h2>
                    {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus dolore      inventore tenetur sint aperiam temporibus nostrum ea laborum ipsam? Libero blanditiis      eius ea. Dolorem assumenda saepe laboriosam repellat quaerat officia natus doloribus      nostrum ratione libero. Sed aut quo dolore hic libero a laboriosam suscipit      consequatur quos! Iusto perferendis suscipit quidem.<br/><br/>Lorem ipsum dolor sit      amet consectetur, adipisicing elit. Ut voluptatum illo atque, ducimus iste ratione      quis. Qui natus nihil temporibus.</p> */}
                    <p>Have you ever almost forgot birthday of a person who you love and sweated about it? How about Anniversary or consolations? No one wants to make someone disappointed, just want to make them happy. That is why we're here for! One stop gifting idea solution for all the occasions. It's just easy as 1-2-3. You do not need a lot of time to send a gift. All you need to have is just 1 minute, and phone number or email of your loved ones. We take care of the rest.<br/><br/>Hundres of thousands of customers have already liked and confirmed our products! You can also write some messages with it. Please Sign up or Log in for more details. Thank you for visiting InstantGifts. Happy Gifting Time!</p>
                </div>
                <div className="col50">
                    <div className="imgBx">
                        <img src="https://nwj.co.za/wp-content/uploads/2021/04/2021_NWJ_Brand_April_Category_Page_Mobi_Banners_017.png" alt="coffeegift"/>
                    </div>
                </div>
            </div>
        </section>

        <section className="menu" id="menu">
            <div className="title">
                <h2 className="titleText">Popular <span>G</span>ifts</h2>
                <h2>Explore our <span style={{color:'#ff0157'}}>TOP-6</span> most liked gift items from valued customers.</h2>
            </div>
            <div className="content">
            {renderGifts}
            <div className="title">
                <Link to="/gifts" style={{marginTop: '30px'}} className="ui orange button">View All</Link>  
            </div>
            </div>
        </section>

        <MainReviews reviews={reviews} setReviews={setReviews}/>
        <GoToTop />
        </>
    )
}

export default HomePage