import React from 'react'
import { Container } from 'react-bootstrap'
import '../Css/App.css'
import DormBtns from '../Components/DormBtns'
import MapNavs from '../Components/MapNavs'
import BlockDescr from '../Components/BlockDescr'
import Turn from '../Components/Turn'

const Map = () => {
  return (
    <div>
      <div className='house-bg'></div>
      <div className='vectors-bg'></div>
      <Turn />
      <Container>
      <div className="main__content flex">
        <div className="main__left left flex">
          <span className="main__slogan">
            Найди то, что искал
          </span>
          <DormBtns />
        </div>
        <div className="main__right right">
          <MapNavs />
          <div className="main__block block flex">
            <BlockDescr />
          </div>
        </div>
      </div>
    </Container>
    </div>
  )
}

export default Map