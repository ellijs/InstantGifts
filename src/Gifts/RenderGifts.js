import GiftDetail from './GiftDetail'
import GoToTop from '../GoToTop'
import { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
// import { Checkbox } from 'semantic-ui-react'


function RenderGifts ({ user, setUser, gifts, setGifts, reviews, setReviews, itemSearch }) {

    // const CheckboxExampleToggle = () => <Checkbox toggle />

    const [ sortLowPrice, setSortLowPrice ] = useState(false)
    const [ sortHighPrice, setSortHighPrice ] = useState(false)
    const [ category, setCategory ] = useState("All Brands")

    const renderSearchItems = [...gifts].filter(gift => {
        if ( itemSearch.length > 0 ) {
            return ( gift.item_name.toLowerCase().includes(itemSearch.toLowerCase()) || gift.brand_name.toLowerCase().includes(itemSearch.toLowerCase()) || gift.category.toLowerCase().includes(itemSearch.toLowerCase()))
        } else {
            return true
        }
    }).filter((gift) => {
            if (category === "All Brands") {
                return true
            } else if (gift.brand_name.toLowerCase() === category.toLowerCase()) {
                return true
            } else {
                return false
            }
    })
    .sort((a, b) => {
        if (sortLowPrice) {
            return (a.price - b.price)
        } else {
            return 0
        }
    })
    .sort((a, b) => {
        if (sortHighPrice) {
            return (b.price - a.price)
        } else {
            return 0
        }
    })
    .map(gift => <GiftDetail key={gift.id} user={user} setUser={setUser} gift={gift} gifts={gifts} setGifts={setGifts} reviews={reviews} setReviews={setReviews}/>)

    const handleLowPriceSort = () => {
        setSortHighPrice(false)
        setSortLowPrice(!sortLowPrice)
    }

    const handleHighPriceSort = () => {
        setSortLowPrice(false);
        setSortHighPrice(!sortHighPrice);
    }

    const handleSetCategory = (e) => {
        setCategory(e.target.value)
       };

    const noDuplicate = [...new Set(gifts.map(gift => gift = gift.brand_name))]


   const newDropDown = [...new Set(noDuplicate)].map(brand => {
       return ( 
           <>
           <option key={brand} className='dropdown-list'value={brand}>{brand}</option>
           </>
       )
   })

    return (
        <>
        <section className="gift-section menu" id="menu">
            <div className="title whole">
                <h2 className="titleText">Awesome <span className='giftSpan'>G</span>ifts</h2>
                <p>Explore awesome gift items for your important person!</p>
            </div>

            <div className='dropdown-and-price'>
                <select className='dropdown' type="dropdown" id="dropdown" onChange={handleSetCategory}>
                    <option className='dropdown-list'value="All Brands">All Brands</option>              
                    { newDropDown }
                </select>
                <div className='check-box'>
                <div style={{left: '30px'}} className='price-sort'>             
                    <p>Sort By Price</p>
                    
                    <p style={{fontSize:'16px'}}>Lowest Price</p>
                   
                    <input tabIndex='0' type="checkbox" id="sortLow" checked={sortLowPrice} onChange={handleLowPriceSort} />
                   
                    <p style={{fontSize:'16px'}}>Highest Price</p>
                
                    <input type="checkbox" id="sortHigh" checked={sortHighPrice} onChange={handleHighPriceSort}/>
                    </div>
                </div>
            </div> 

            <div className="content">
            {renderSearchItems}
            <div className="title">
                {/* <Link to="" className="btn">View All</Link>   */}
            </div>
            </div>
        </section>
        <GoToTop />
    </>

    )
}

export default RenderGifts