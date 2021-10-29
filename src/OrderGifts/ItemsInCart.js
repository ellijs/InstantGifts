
import { Link } from 'react-router-dom'

function ItemsInCart ({ gift, quantity, setQuantity, handleFormData }) {
    const { id, brand_name, item_name, price, gift_url } = gift;

    function onRemoveItem(){
        setQuantity(1)
    }

    function handleIncreaseQuantity(e) {
        setQuantity(quantity => quantity + 1)
        handleFormData(e)
    }
    function handleDecreaseQuantity(e) {
        setQuantity(quantity => quantity - 1)
        handleFormData(e)   
    }


    return(
       
      <div key={id} className="product">
        <img src={gift_url} alt={item_name}/>
        <div className="product-info">
            <h3 className="product-name">{brand_name}-{item_name}</h3>
            <h3 className="product-price">Price : $ {price}</h3>           
            <h3 className="product-quantity">Quantity : {quantity}</h3>
            <button className="ui primary button" onClick={handleIncreaseQuantity}>+</button>
            <button className="ui primary button" onClick={handleDecreaseQuantity}>-</button>
            <Link to='/gifts' >
            <button onClick={onRemoveItem}
            className="product-remove">
            Choose other gifts
            </button>
            </Link>
        </div>
      </div>
    )
}

export default ItemsInCart