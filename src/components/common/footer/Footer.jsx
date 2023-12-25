import React from 'react'
import "./footer.css"
import { footer } from '../../data/Data'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <section className='footerContact'>
            <div className="container">
                <div className="send flex">
                    <div className="text">
                        <h1>Do You Have Questions ?</h1>
                        <p>We'll help you to grow your career and growth.</p>
                    </div>
                    <button className='btn5'>Contact Us Today</button>
                </div>
            </div>
        </section>

        <footer>
            <div className="container">
                <div className="box">
                    <div className="logo">
                        <img src="../images/logo-light.png" alt="" />
                        <h2>Do You Need Help With Anything?</h2>
                        <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
                        <div className="input flex">
                            <input type="text" placeholder='Email Address'/>
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className='box2'>
                {footer.map((item, index) => {
                    return (
                        <div className="box" key={index}>
                            <h3>{item.title}</h3>
                            <ul>{item.text.map((items, indx) => {
                                return(
                                    <li key={indx}>
                                        <Link to={items.list}>{items.list}</Link>
                                    </li>
                                )
                            })}</ul>
                        </div>
                    )
                })}
                </div>
            </div>
        </footer>

        <div className="legal">
            <span>© 2024 RentUP. Designd By Pyecom | Impulso Smart.</span>
        </div>
    </>
  )
}

export default Footer