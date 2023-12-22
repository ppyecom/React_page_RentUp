import React from 'react'
import { list } from '../../data/Data'

const RecentCard = () => {
  return (
    <>
        <div className="content grid3 mtop">
            {list.map((items, index) => (
                <div className="box shadow" key={index}>
                  <div className="img">
                    <img src={items.cover} alt="" />
                  </div>
                  <div className="text">
                    <div className="category flex">
                      <span style={{background: items.category == "For Sale" ? "#25B5791A" : "#FF98001A", color:items.category == "For Sale" ?
                        "#25B579" : "#FF9800"}}>{items.category}</span>
                      <i className='fa fa-heart'></i>
                    </div>
                    <h4>{items.name}</h4>
                    <p>
                      <i className='fa fa-location-dot'></i> {items.location}
                    </p>
                  </div>
                  <div className="button flex">
                    <div>
                      <button className='btn2'>{items.price}</button>
                      <label> /m2</label>
                    </div>
                    <span>{items.type}</span>
                  </div>
                </div>
            ))}
        </div>
    </>
  )
}

export default RecentCard