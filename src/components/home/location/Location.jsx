import React from 'react'
import "./location.css"
import Heading from '../../common/Heading'
import { location } from '../../data/Data'

const Location = () => {
  return (
    <>
        <section className='location padding'>
            <div className="container">
                <Heading title="Explore By Location" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."/>
                <div className="content grid3 mtop">
                    {location.map((items, index) => { return(
                        <div className="box" key={index}>
                            <img src={items.cover} alt="" />
                            <div className="overlay">
                                <h5>{items.name}</h5>
                                <p>
                                    <label>{items.Villas}</label>
                                    <label>{items.Offices}</label>
                                    <label>{items.Apartments}</label>
                                </p>
                            </div>
                        </div>
                    )})}
                </div>
            </div>
        </section>
    </>
  )
}

export default Location