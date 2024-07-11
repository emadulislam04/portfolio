import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Checkout my recent projects
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'wordpress' ?
            <ToggleButton active value="wordpress" onClick={() => setToggle('wordpress')}>WORDPRESS</ToggleButton>
            :
            <ToggleButton value="wordpress" onClick={() => setToggle('wordpress')}>WORDPRESS</ToggleButton>
          }
          <Divider />
          {toggle === 'website' ?
            <ToggleButton active value="website" onClick={() => setToggle('website')}>Website</ToggleButton>
            :
            <ToggleButton value="website" onClick={() => setToggle('website')}>Website</ToggleButton>
          }
          <Divider />
          {toggle === 'Graphics' ?
            <ToggleButton active value="Graphics" onClick={() => setToggle('Graphics')}>Graphics</ToggleButton>
            :
            <ToggleButton value="Graphics" onClick={() => setToggle('Graphics')}>Graphics</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects