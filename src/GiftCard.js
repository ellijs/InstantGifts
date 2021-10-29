
function GiftCard ({ gift }) {
  
    return(
        <div className="box">
            <div className="imgBx">
                <img src={gift.gift_url} alt="gift"/>
            </div>
            <div className="text">
                <h3>
                {gift.item_name}
                </h3>
                <h3>
                ${gift.price}
                </h3>
            </div>
        </div>
    )
}

export default GiftCard