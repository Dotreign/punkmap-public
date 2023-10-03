import React from 'react';

const ErrorForm = ({ onClose }) => {
  return (
    <div class="main__form form error">
        <h2 class="form__title">
          Привет!
        </h2>
        <form class="form__content flex" action="">
          <p class="form__text">
            Если хочешь сообщить об&nbsp;ошибке, пожалуйста, выбери категорию:
          </p>
          <ul class="error__list list-reset flex">
            <li class="error__item">
              <input id="info-error" type="radio" name="error" class="error__input" />
              <label for="info-error" class="error__text">
                Информационная ошибка
              </label>
            </li>
            <li class="error__item">
              <input id="tech-error" type="radio" name="error" class="error__input" />
              <label for="tech-error" class="error__text">
                Техническая ошибка
              </label>
            </li>
            <li class="error__item">
              <input id="idea-error" type="radio" name="error" class="error__input" />
              <label for="idea-error" class="error__text">
                Предложить идею
              </label>
            </li>
          </ul>
          <div class="error__idea flex">
            <p class="form__text">
              Опиши ошибку (идею):
            </p>
            <textarea class="form__textarea" rows="7" cols="50" name="" id=""></textarea>
          </div>
          <button class="send-btn btn-reset" type="submit">
            Отправить
          </button>
        </form>
      </div>
  );
};

export default ErrorForm;