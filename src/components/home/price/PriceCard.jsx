import React from 'react'
import { list, price } from '../../data/Data'

const PriceCard = () => {
  return (
    <>
        <div className='content flex mtop'>
            {price.map((items, index) => {
                return(
                    <div className="box shadow" key={index}>
                        <div className="topbtn">
                            <button className='btn3'>{items.best}</button>
                        </div>
                        <h3>{items.plan}</h3>
                        <h1>
                            <span>$</span> {items.price}
                        </h1>
                        <p>{items.ptext}</p>
                        <ul>
                            {items.list.map((list, indx) => {
                                return(
                                    <li key={indx}>
                                        <label style={{background: list.change == "color" ? "#DC35451D" : "#27AE601F",
                                                        color: list.change == "color" ? "#DC3848" : "#27AE60"}}>{list.icon}
                                        </label>    
                                        <p>{list.text}</p>
                                    </li>
                                )
                            })}
                        </ul>
                        <button className='btn5' style={{background: items.plan == "Standard" ? "#27AE60" : "#FFF",
                                                        color: items.plan == "Standard" ? "#fff" : "#27AE60"}}>
                                                            Start {items.plan}
                                                        </button>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default PriceCard