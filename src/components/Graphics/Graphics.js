import React from 'react'
import './Graphics.css'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from '../Projects/ProjectsStyle'



export const Graphics = () => {
  return (
    <>
     <Title>Projects</Title>
        <Desc>
          Checkout my recent projects
        </Desc>
       <div className='imgDiv'>
          <img src='https://i.imgur.com/T36x4bX.jpg'/>
          <img src='https://i.imgur.com/Nr84A4z.jpg'/>
          <img src='https://i.imgur.com/SL29LNF.jpg'/>
          <img src='https://i.imgur.com/T36x4bX.jpg'/>
          <img src='https://i.imgur.com/T36x4bX.jpg'/>
          <img src='https://i.imgur.com/T36x4bX.jpg'/>
       </div>
    </>
  )
}
