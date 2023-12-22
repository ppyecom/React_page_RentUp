import React from 'react'
import "./team.css"
import Heading from '../../common/Heading'
import { team } from '../../data/Data'

const Team = () => {
  return (
    <>
        <section className='team background'>
            <div className="container">
                <Heading title="Our Featured Agents" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."/>
                <div className="content mtop grid3">
                    {team.map((items, index) => {
                        return(
                            <div className="box" key={index}>
                                <button className='btn3'>{items.list} Listings</button>
                                <div className="details">
                                    <div className="img">
                                        <img src={items.cover} alt="" />
                                        <i className='fa fa-circle-check'></i>
                                    </div>
                                    <i className='fa fa-location-dot'></i>
                                    <label>{items.address}</label>
                                    <h4>{items.name}</h4>
                                    <ul>
                                        {items.icon.map((icon, index) => {
                                            return(
                                                <li key={index}>{icon}</li>
                                            )
                                        })}
                                    </ul>
                                    <div className="button flex">
                                        <button>
                                            <i className='fa fa-envelope'></i>
                                            Message
                                        </button>

                                        <button className='btn4'>
                                            <i className='fa fa-phone-alt'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    </>
  )
}

export default Team