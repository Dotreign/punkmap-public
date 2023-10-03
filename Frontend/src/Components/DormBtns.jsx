import React from 'react'
import { useState } from 'react'
import { D12Select } from '../Dorms/Dorm_12/D12Select'
import { D13Select } from '../Dorms/Dorm_13/D13Select'
import BusinessForm from './BusinessForm'
import { checkAuthentication } from './Header'
// import ErrorForm from './ErrorForm'

const DormBtns = () => {
  const [selectedDorm, setSelectedDorm] = useState(null);

  const handleOnChange = (e) => {
    setSelectedDorm(e.target.value);
  };

  const [activeForm, setActiveForm] = useState(null);

  const openForm = (formName) => {
    setActiveForm(formName);
  };

  const closeForm = () => {
    setActiveForm(null);
  };

  const [showDev, setShowDev] = useState(false);

  const openDev = () => {
    setShowDev(true);
    setTimeout(() => {
      setShowDev(false);
    }, 2000);
  };

  const toRegLog = () => {
    window.location.href = '/reglog';
  }

  const [isAuthenticated, setIsAuthenticated] = useState(checkAuthentication());

  return (
    <div>
      <ul className="main__dorm dorm list-reset flex">
        <li className="dorm__item">
          <button className="dorm-btn btn-reset disabled" onClick={openDev}></button>
        </li>
        <li className="dorm__item">
          <button className="dorm-btn btn-reset disabled" onClick={openDev}></button>
        </li>
        <li className="dorm__item">
          <button className="dorm-btn btn-reset disabled" onClick={openDev}></button>
        </li>
        <li className="dorm__item">
          <input
            value="dorm_12"
            type="radio"
            className="dorm-num"
            id="dorm-12"
            name="dorm"
            onChange={handleOnChange}
          />
          <label htmlFor="dorm-12" className="dorm-btn btn-reset working">
            12
          </label>
        </li>
        <li className="dorm__item">
          <button className="dorm-btn btn-reset disabled" onClick={openDev}></button>
        </li>
        <li className="dorm__item">
          <input
            value="dorm_13"
            type="radio"
            className="dorm-num"
            id="dorm-13"
            name="dorm"
            onChange={handleOnChange}
          />
          <label htmlFor="dorm-13" className="dorm-btn btn-reset working">
            13
          </label>
        </li>
        <li className="dorm__item">
          <button className="dorm-btn btn-reset disabled" onClick={openDev}></button>
        </li>
        <li className="dorm__item">
          <button className="dorm-btn btn-reset disabled" onClick={openDev}></button>
        </li>
        <li className="dorm__item">
          <button className="dorm-btn btn-reset disabled" onClick={openDev}></button>
        </li>
        <li className="dorm__item">
          <button className="dorm-btn btn-reset disabled" onClick={openDev}></button>
        </li>
        <li className="dorm__item more">
          <button className="dorm-btn btn-reset dorm__more flex" onClick={() => openForm('form')}>
            <span className="more__text">...</span>
          </button>
        </li>
        <li className="dorm__item">
          <button className="dorm-btn btn-reset disabled" onClick={openDev}></button>
        </li>
      </ul>
      {selectedDorm === 'dorm_12' && (
        <div className="block__map" id="map">
          <D12Select />
        </div>
      )}
      {selectedDorm === 'dorm_13' && (
        <div className="block__map" id="map">
          <D13Select />
        </div>
      )}

      {activeForm === 'form' && (
        <div className='dorm__more'>
          <ul className="more__list list-reset">
            <li className="more__item" onClick={openDev}>
              Оставить отзыв
              <svg className="more__arrow" width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.26532L8 8.61226L1 15.9592" stroke="#E86D3B" />
              </svg>
            </li>
            {isAuthenticated ? (
              <li className="more__item more__business" onClick={() => openForm('businessForm')}>
                Есть свой бизнес
                <svg className="more__arrow" width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.26532L8 8.61226L1 15.9592" stroke="#E86D3B" />
                </svg>
              </li>)
              : (<li className="more__item more__business aaa" onClick={() => toRegLog()}>
                  Войдите, чтобы добавить бизнес
                  <svg className="more__arrow" width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.26532L8 8.61226L1 15.9592" stroke="#E86D3B" />
                  </svg>
                </li>)}
            <li className="more__item premium" onClick={openDev}>
              ХОЧУ Premium!!!!
              <svg className="more__arrow" width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.26532L8 8.61226L1 15.9592" stroke="#E86D3B" />
              </svg>
            </li>
            <li className="more__item more__error" onClick={openDev}>
              Сообщить об ошибке
              <svg className="more__arrow" width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.26532L8 8.61226L1 15.9592" stroke="#E86D3B" />
              </svg>
            </li>
            <li className="more__item" onClick={closeForm}>
              Закрыть
            </li>
          </ul>
        </div>
      )}

      {activeForm === 'businessForm' && isAuthenticated && (
        <div className='close-form'>
          <BusinessForm />
          <button className="close-btn btn-reset" onClick={closeForm}>X</button>
        </div>
      )}

      {/* {activeForm === 'errorForm' && (
        <div className='close-form'>
          <ErrorForm />
          <button className="close-btn btn-reset" onClick={closeForm}>X</button>
        </div>
      )} */}
      <div className="block__map">
        <div className={`dev ${showDev ? 'show' : ''}`}>
          Этот элемент пока в разработке!
        </div>
      </div>
    </div>
  )
}

export default DormBtns