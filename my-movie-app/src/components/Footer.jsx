import React from 'react'
import myStyle from './myStyle.module.css'

const Footer = () => {
  return (
    <div className={myStyle.footer}>
      <section className={myStyle.footerSection}>
        <h3>Contact</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non natus, placeat minus provident eum laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non natus, placeat minus provident eum laboriosam.</p>
      </section >

      <section className={myStyle.footerSection}>
        <h3>Help</h3>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptate.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum excepturi quod magnam porro nisi perferendis impedit saepe dolorem perspiciatis pariatur.</p>
      </section>

      <section className={myStyle.footerSection}>
        <h3>Work</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam natus ipsam ab nesciunt? Nam?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam natus ipsam ab nesciunt? Nam?</p>
      </section>
      
      
      
    </div>
  )
}

export default Footer