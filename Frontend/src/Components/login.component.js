import React, { Component } from 'react'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'

import AuthService from '../Services/auth.service'

const required = value => {
  if (!value) {
    return (
      <div className='errorMsg' role='alert'>
        Пожалуйста, заполните это поле
      </div>
    );
  }
};

function isEmail(value) {
  return /^st[0-9]{6}@student\.spbu\.ru/i.test(value);
}

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className='errorMsg' role='alert'>
        Пожалуйста, введите st почту
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 8 || value.length > 20) {
    return (
      <div className='errorMsg' role='alert'>
        Пароль должен содержать 8-20 символов, прописные и строчные латинские буквы и хотя бы одну цифру
      </div>
    );
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleShow = this.toggleShow.bind(this);

    this.state = {
      hidden: true,
      email: '',
      password: '',
      loading: false,
      message: '',
      error: false
    };
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  componentDidMount() {
    if (this.props.password) {
      this.setState({ password: this.props.password });
    }
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: '',
      loading: true,
      error: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(
        this.state.email,
        this.state.password
      ).then(
        (response) => {
          const { access_token, expires_in, refresh_expires_in, refresh_token } = response;
          sessionStorage.setItem("access_token", access_token)
          sessionStorage.setItem("expires_in", expires_in)
          sessionStorage.setItem("refresh_expires_in", refresh_expires_in)
          sessionStorage.setItem("refresh_token", refresh_token)
          console.log(access_token, expires_in, refresh_expires_in, refresh_token)
          window.location.href = '/persacc';
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage,
            error: true
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
      <div className="wrapper forms__sign-in">
        <Form
          className='sign-in form-rl flex'
          onSubmit={this.handleLogin}
          ref={c => {
            this.form = c;
          }}
        >
          <div>
            <h2 className="form-rl__name s-i-name">
              Вход
            </h2>
            <ul className='form-rl__list s-i list-reset flex'>
              <li className='form-rl__item'>
                <Input
                  type='text'
                  className='form-rl__input'
                  name='email'
                  placeholder="stXXXXXX"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                  validations={[required, email]}
                />
              </li>
              <li className='form-rl__item'>
                <Input
                  type={this.state.hidden ? 'password' : 'text'}
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  className='form-rl__input'
                  name='password'
                  placeholder="пароль"
                  validations={[required, vpassword]}
                />
                <span className='eye' onClick={this.toggleShow}></span>
              </li>
              <button
                className='form-rl__btn btn-reset sign-in__btn'
                disabled={this.state.loading}
              >
                {this.state.loading ? <span className='spinner-border'></span> : 'Войти'}
              </button>
            </ul>
          </div>

          {this.state.message && (
            <div className='form-rl__item'>
              <div
                className='errorMsg'
                role='alert'
              >
                {this.state.message}
              </div>
            </div>
          )}
          {this.state.error && (
            <div className='form-rl__item'>
              <div
                className='errorMsg'
                role='alert'
              >
                {this.state.error}
              </div>
            </div>
          )}
          <CheckButton
            style={{ display: 'none' }}
            ref={c => {
              this.checkBtn = c;
            }}
          />
        </Form>
      </div>
    );
  }
}