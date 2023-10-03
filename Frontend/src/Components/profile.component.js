import React, { Component } from "react";
import AuthService from '../Services/auth.service'

export default class Profile extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   currentUser: AuthService.getCurrentUser()
    // };

    this.state = {
      isEditMode: false,
      username: "pfeffferkuchen",
      oldPassword: "",
      newPassword: "",
      showOldPassword: true,
      showNewPassword: true,
      error: ""
    };

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleShowOldPassword = this.toggleShowOldPassword.bind(this);
    this.toggleShowNewPassword = this.toggleShowNewPassword.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  toggleEditMode = () => {
    this.setState((prevState) => ({
      isEditMode: !prevState.isEditMode
    }));
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  toggleShowOldPassword() {
    this.setState((prevState) => ({
      showOldPassword: !prevState.showOldPassword
    }));
  }

  toggleShowNewPassword() {
    this.setState((prevState) => ({
      showNewPassword: !prevState.showNewPassword
    }));
  }

  handleError = (errorMessage) => {
    this.setState({ error: errorMessage });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, oldPassword, newPassword } = this.state;

    if (oldPassword === newPassword) {
      // Если новый и старый пароли совпадают, выведите сообщение об ошибке и не выполняйте запрос к бэкэнду
      this.handleError("Новый пароль должен отличаться от старого пароля.");
      return;
    } else {
      // Выполните API-запрос для отправки данных на бэкэнд
      AuthService.updateProfile(username, oldPassword, newPassword)
        .then(response => {
          // Обработка успеха
          console.log("Данные успешно отправлены на бэкэнд");
          this.toggleEditMode(); // Переключить обратно в режим просмотра после сохранения
        })
        .catch(error => {
          // Обработка ошибки
          console.log("Ошибка при отправке данных на бэкэнд:", error);
        });
    }
  };

  render() {
    // const { currentUser } = this.state;
    const { isEditMode, username, oldPassword, newPassword, showOldPassword, showNewPassword, error } = this.state;

    return (
      <div className="main__userdata userdata">
        <div className="userdata__top flex">
          <img src="" alt="" className="avatar" />
          {isEditMode ? (
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
              className="form-rl__input"
            />
          ) : (
            <p className="username">{username}</p>
          )}
          {/* <p className="username">{currentUser.username}</p>*/}
        </div>
        <div className="userdata__info info flex">
          <ul className="info__list list-reset flex">
            <li className="info__item flex">
              <span className="info__name">
                Статус:
              </span>
              <p className="info__text">
                Студент
              </p>
              {/* <p className="info__text">
                    {currentUser.roles &&
                      currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                  </p> */}
            </li>
            <li className="info__item flex">
              <span className="info__name">
                Почта:
              </span>
              {/* <p className="info__text">
                    fff
                  </p> */}
              <p className="info__text">
                {/*{currentUser.email}*/}
              </p>
            </li>
            <li className="info__item flex">
              <span className="info__name">
                Пароль:
              </span>
              {isEditMode ? (
                <ul className="list-reset">
                  <li className="form-rl__item">
                    <input
                      type={showOldPassword ? 'password' : 'text'}
                      name="oldPassword"
                      value={oldPassword}
                      onChange={this.handleChange}
                      className="form-rl__input"
                      placeholder="старый пароль"
                    />
                    <span className='eye-op' onClick={this.toggleShowOldPassword}></span>
                  </li>
                  <li className="form-rl__item">
                    <input
                      type={showNewPassword ? 'password' : 'text'}
                      name="newPassword"
                      value={newPassword}
                      onChange={this.handleChange}
                      className="form-rl__input"
                      placeholder="новый пароль"
                    />
                    <span className='eye-np' onClick={this.toggleShowNewPassword}></span>
                  </li>
                  {error && <p className="errorMsg">{error}</p>}
                </ul>
              ) : (
                <p className="info__text">**********</p>
              )}
            </li>
          </ul>
        </div>
        {isEditMode ? (
          <div className="edit-btns">
            <button onClick={this.handleSubmit} className="edit-btn btn-reset">Сохранить</button>
            <button onClick={this.toggleEditMode} className="edit-btn btn-reset">Отменить</button>
          </div>
        ) : (
          <button onClick={this.toggleEditMode} className="edit-btn btn-reset">Редактировать профиль</button>
        )}
      </div>
      // <header className="jumbotron">
      //   <h3>
      //     <strong>{currentUser.username}</strong>
      //     Profile
      //   </h3>
      // </header>
      // <p>
      //   <strong>Token:</strong>{" "}
      //   {currentUser.accessToken.subString(0, 20)} ...{" "}
      //   {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      // </p>
      // <p>
      //   <strong>Id:</strong>{" "}
      //   {currentUser.id}
      // </p>
      // <p>
      //   <strong>Email:</strong>{" "}
      //   {currentUser.email}
      // </p>
      // <strong>Authirities</strong>
      // <ul>
      //   {currentUser.roles &&
      //     currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      // </ul>
    );
  }
}