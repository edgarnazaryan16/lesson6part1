import { useState } from "react";
import Card from "./Card"
import { data } from "./data"
import "./style.css"
import { totalCounter } from "../helpers";

const Home = () => {
    const [updatedList, setUpdatedList] = useState(data);
    const removeItem = (id) => {
        setUpdatedList(updatedList.filter(item => (item.id !== id)))
    }
    const handleIncrease = (id, previusValue) => {
        setUpdatedList(updatedList.map(item => {
            if(item.id === id) {
                return {...item, amount: previusValue + 1}
            } else {
                return item
            }
        }))
    }
    const handleDecrease = (id, previusValue) => {
        if (previusValue === 1) {
            removeItem(id);
        } else {
        setUpdatedList(updatedList.map(item => {
            if(item.id === id) {
                return {...item, amount: previusValue - 1}
            } else {
                return item
            }
        }))
        }
    }
    const clearAllItems = () => {
        setUpdatedList([])
    }
    return (
        <div className="Home">
            <h1>Your Bag</h1>
            {updatedList.map(item => {
            return (<Card
                key={item.id}
                {...item} 
                removeItem = {removeItem}
                handleIncrease = {handleIncrease}
                handleDecrease = {handleDecrease}
            />)
            })}
            <div className="Total">
                <p>Total</p>
                <p>{totalCounter(updatedList).toFixed(2)} $</p>
            </div>
            <button onClick={clearAllItems}>Clear All</button>
        </div>
    )
}

export default Home;