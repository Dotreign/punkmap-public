import React from 'react'
import Register from '../Components/register.component'
import Login from '../Components/login.component'
import { Container } from 'react-bootstrap'
import Overlay from '../Components/Overlay'
import Turn from '../Components/Turn'

const RegLog = () => {
  return (
    <div>
      <div className='house-bg'></div>
      <div className='vectors-bg'></div>
      <Turn />
      <Container>
        <div className='forms flex'>
          <Overlay />
          <Register />
          <Login />
        </div>
      </Container>
    </div>
  )
}

export default RegLog