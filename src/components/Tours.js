import React from 'react'
import Title from './Title'
import { tours } from './NavbarData'
function Tours() {
  return (
    <section className="section" id="tours">
      <Title text1='featured' text2='tours'/>
    <div className="section-center featured-center">
      {tours.map((tours)=>{
        const {id,img,date,title,info,day,cost} = tours
        return (
          <article className="tour-card" >
          <div className="tour-img-container" key={id}>
            <img src={img} className="tour-img" alt="" />
            <p className="tour-date">{date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{title}</h4>
            </div>
            <p>
              {info}
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> china
              </p>
              <p>{day}</p>
              <p>{cost}</p>
            </div>
          </div>
        </article>
        );
      })}
    </div>
  </section>
  )
}

export default Tours
