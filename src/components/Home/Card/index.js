import "./style.css"
const Card = ({id, title, price, img, amount, removeItem, handleIncrease, handleDecrease}) => {
    return (
        <div className="Parent">
            <div className="ImageDiv">
                <img src={img}/>
            </div>
            <div className="DescriptionDiv">
                <h2>{title}</h2>
                <p>{price} $</p>
                <button onClick={() => removeItem(id)}>remove</button>
            </div>
            <div className="AmountDiv">
                <button onClick={() => handleIncrease(id, amount)}>︿</button>
                <p>{amount}</p>
                <button onClick={() => handleDecrease(id, amount)}>﹀</button>
            </div>
        </div>
    )
}
export default Card;