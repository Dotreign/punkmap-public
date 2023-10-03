import React, { Component } from 'react';
import arrowToLeft from '../Media/arrow-to-left.png'
import arrowToRight from '../Media/arrow-to-right.png'

const imagesPath = {
  toleft: arrowToLeft,
  toright: arrowToRight
}

export default class Overlay extends Component {
  constructor(props) {
    super(props);
    this.overlayRef = React.createRef();
  };

  state = {
    open: true
  }

  handleClick() {
    const overlay = this.overlayRef.current;
    overlay.classList.toggle('toggle-overlay')
    this.setState(state => ({ open: !state.open }))
  };

  getImageName = () => this.state.open ? 'toright' : 'toleft'

  render() {
    const imageName = this.getImageName();
    return (
      <div ref={this.overlayRef} className="overlay">
        <div className="overlay__main flex">
          <div className="overlay__content flex">
            <img className='overlay__btn' style = {{maxWidth: '150px'}} src = {imagesPath[imageName]} onClick={() => this.handleClick()}/>
          </div>
        </div>
      </div>
    );
  }
}