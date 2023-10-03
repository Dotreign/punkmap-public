import React from 'react'
import Profile from '../Components/profile.component'
import UserInfo from '../Components/UserInfo'
import { Container } from 'react-bootstrap'
import Turn from '../Components/Turn'

const PersAcc = () => {
  return (
    <div>
      <div className='percacc-bg'></div>
      <Turn />
      <Container>
        <div className="main flex">
          <Profile />
          <UserInfo />
        </div>
      </Container>
    </div>
  )
}

export default PersAcc