import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showErrorMsg: false,
  }

  onSuccessLogin = () => {
    const {history} = this.props
    history.replace('/')
  }

  onFailureLogin = errorInfo => {
    this.setState({errorMsg: errorInfo, showErrorMsg: true})
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitCredentials = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccessLogin()
    }
    this.onFailureLogin(data.error_msg)
  }

  getUsername = () => {
    const {username} = this.state

    return (
      <>
        <label htmlFor="username" className="label-element">
          USERNAME
        </label>
        <input
          id="username"
          value={username}
          onChange={this.onChangeUserName}
          className="input-element"
          type="text"
          placeholder="Username"
        />
      </>
    )
  }

  getPassword = () => {
    const {password} = this.state

    return (
      <>
        <label htmlFor="password" className="label-element">
          PASSWORD
        </label>
        <input
          id="password"
          value={password}
          onChange={this.onChangePassword}
          className="input-element"
          type="password"
          placeholder="Password"
        />
      </>
    )
  }

  render() {
    const {showErrorMsg, errorMsg} = this.state

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo-sm"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="logo-img"
        />
        <form className="form-container" onSubmit={this.onSubmitCredentials}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo-lg"
          />
          <div className="ip-container">{this.getUsername()}</div>
          <div className="ip-container">{this.getPassword()}</div>
          <button className="login-btn" type="submit">
            Login
          </button>
          {showErrorMsg && <p className="failure-text">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
