import React from 'react'
import image_1 from "../assets/image_1.png"
import image_2 from "../assets/image_2.png"
import image_3 from "../assets/image_3.png"
import image_4 from "../assets/image_4.png"
import image_5 from "../assets/image_5.png"
import image_6 from "../assets/image_6.png"
import s from "../style/my_pet.module.css"
import "../style/App.css"

export default function My_pet(props) {
  return (
    <div className='container'>
      <div className="img_container">
        <img src={image_1} />
        <div className="title_container">
          <h1>Моя улюблена домашня тваринка</h1>
          <p className=''>{props.name}</p>
          <p className={s.desc}>{props.description}</p>
        </div>
        
      </div>
         <div className='slider_container'>
          <img src={image_2} alt="" />
          <img src={image_3} alt="" />
          <img src={image_4} alt="" />
          <img src={image_5} alt="" />
          <img src={image_6} alt="" />
         </div>
    </div>
  )
}
