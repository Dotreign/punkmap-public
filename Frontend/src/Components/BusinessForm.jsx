import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const BusinessForm = () => {
  const [business, setBusiness] = useState({
    description: '',
    name: '',
    dorm: '',
    block: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBusiness((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post('http://localhost:8079/business-microservise/', business)
      .then((response) => {
        console.log(response.data); // Можно выполнить дополнительные действия после успешного ответа от бэкэнда
        setLoading(false);
        setSubmitted(true);
      })
      .catch((error) => {
        console.error(error); // Обработка ошибок при отправке данных на бэкэнд
        setLoading(false);
        setSubmitted(true);
      });
  };

  return (
    <div className="main__form form business-f flex">
      <h2 className="form__title">
        Привет!
      </h2>
      <p className="form__text">
        Если у&nbsp;тебя есть свой бизнес в&nbsp;ПУНКе, пожалуйста, заполни формочку:
      </p>
      <form className="form__content flex" onSubmit={handleSubmit}>
        <div className="business__descr-f flex">
          <p className="form__text">
            Опиши свой бизнес:
          </p>
          <textarea className="form__textarea" rows="7" cols="50" name="description" value={business.description} onChange={handleChange}></textarea>
        </div>
        <div className="business__name-f flex">
          <p className="form__text">
            Дай ему название:
          </p>
          <input className="business-name-f" type="text" name="name" value={business.name} onChange={handleChange} />
        </div>
        <p className="form__text">
          Какое место на карте обозначить?
        </p>
        <div className="business__place-f flex">
          <ul className="business__list-f list-reset flex">
            <li className="business__item-f flex">
              <span className="business__dorm-f">
                № общежития:
              </span>
              <select className="business__select-f" name="dorm" value={business.dorm} onChange={handleChange}>
                <option value="12">12</option>
                <option value="13">13</option>
              </select>
            </li>
            <li className="business__item-f flex">
              <span className="business__dorm-f">
                № блока:
              </span>
              <input className="block-number-f" type="number" name="block" value={business.block} onChange={handleChange} />
            </li>
          </ul>
        </div>
        <button className="send-btn btn-reset" type="submit" disabled={loading}>
          {loading ? <span className='spinner-border'></span> : 'Отправить'}
        </button>
      </form>
      {submitted && (
        <div className="form__submitted">
          Данные отправлены на проверку!
        </div>
      )}
    </div>
  );
};

export default BusinessForm;