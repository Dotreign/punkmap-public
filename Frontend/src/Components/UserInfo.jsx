import React from 'react'
import { useState } from 'react';
import Tabs from './Tabs';

const UserInfo = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [noBusinessChecked, setNoBusinessChecked] = useState(true);
  const [notPunkChecked, setNotPunkChecked] = useState(false)

  const handleEdit = () => {
    setIsEditable(!isEditable);
  };

  const handleSave = () => {
    setIsEditable(false);
  };

  const handleNoBusinessChange = (event) => {
    setNoBusinessChecked(event.target.checked);
  };

  const handleNotPunkChange = (event) => {
    setNotPunkChecked(event.target.checked);
  };

  return (
    <div className="main__other-data other-data">
      <Tabs>
        <div label="№ блока">
          <div className="tabs__content content flex">
            <p className="content__text">
              В каком блоке ты живешь?
            </p>
            <ul className="content__list list-reset flex">
              <li className="content__item flex">
                <span className="content__name">
                  № общежития:
                </span>
                <select className="content__select notPunk" name="dorm" id="" disabled={!isEditable || notPunkChecked}>
                  <option value="12">12</option>
                  <option value="13">13</option>
                </select>
              </li>
              <li className="content__item flex">
                <span className="content__name">
                  № блока:
                </span>
                <input className="block-number notPunk" type="number" min="201" max="1416" disabled={!isEditable || notPunkChecked} />
              </li>
            </ul>
            <div className="content__descr flex">
              <p className="content__text">
                Комментарий/описание:
              </p>
              <textarea className="content__textarea notPunk" rows="7" cols="50" name="" id="" disabled={!isEditable || notPunkChecked}></textarea>
            </div>
            <div className="content__choice flex">
              <label for="not-punk" className="content__text">
                <input className="choice" id="not-punk" type="checkbox" checked={notPunkChecked} onChange={handleNotPunkChange} disabled={!isEditable} />
                Живу не в ПУНКе
              </label>
            </div>
            <div className='tab__button'>
              {isEditable ? (
                <div className="edit-btns">
                  <button onClick={handleSave} className="edit-btn btn-reset">Сохранить</button>
                  <button onClick={handleEdit} className="edit-btn btn-reset">Отменить</button>
                </div>
              ) : (
                <button onClick={handleEdit} className="edit-btn btn-reset">Редактировать</button>
              )}
            </div>
          </div>
        </div>
        <div label="Бизнес">
          <div className="tabs__content content flex">
            <div className="content__descr flex">
              <p className="content__text">
                Описание:
              </p>
              <textarea className="content__textarea noBusiness" rows="7" cols="50" name="" id="" disabled={!isEditable || noBusinessChecked}></textarea>
            </div>
            <div className="content__title flex">
              <p className="content__text">
                Название:
              </p>
              <input className="business-name noBusiness" type="text" disabled={!isEditable || noBusinessChecked} />
            </div>
            <ul className="content__list list-reset flex">
              <li className="content__item flex">
                <span className="content__name">
                  № общежития:
                </span>
                <select className="content__select noBusiness" name="dorm" id="" disabled={!isEditable || noBusinessChecked}>
                  <option value="12">12</option>
                  <option value="13">13</option>
                </select>
              </li>
              <li className="content__item flex">
                <span className="content__name">
                  № блока:
                </span>
                <input className="block-number noBusiness" type="number" min="201" max="1416" disabled={!isEditable || noBusinessChecked} />
              </li>
            </ul>
            <div className="content__choice flex">
              <label for="no-business" className="content__text">
                <input className="choice" id="no-business" type="checkbox" checked={noBusinessChecked} onChange={handleNoBusinessChange} disabled={!isEditable} />
                Нет бизнеса
              </label>
            </div>
            <div className='tab__button'>
            {isEditable ? (
                <div className="edit-btns">
                  <button onClick={handleSave} className="edit-btn btn-reset">Сохранить</button>
                  <button onClick={handleEdit} className="edit-btn btn-reset">Отменить</button>
                </div>
              ) : (
                <button onClick={handleEdit} className="edit-btn btn-reset">Редактировать</button>
              )}
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  )
}

export default UserInfo