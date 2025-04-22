import React from 'react';
import Title from './Title';
import { services } from './NavbarData';
function Services() {
  return (
    <section className="section services" id="services">
      <Title text1='our' text2='services'/>
    <div className="section-center services-center">
    {services.map((Service)=>{
        const {id,icon,title,text} = Service;
        return (<article className="service" key={id}>
        <span className="service-icon"><i className={icon}></i></span>
        <div className="service-info">
          <h4 className="service-title">{title}</h4>
          <p className="service-text">
            {text}
          </p>
        </div>
      </article>
        );
      })}
    </div>
  </section>
  )
}

export default Services
