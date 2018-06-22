import React, { Component } from 'react'
import { render } from 'react-dom'
 
import LoginHOC from 'react-facebook-login-hoc'
 
const configureLoginProps = {
  scope: 'public_profile',
  xfbml: false,
  cookie: false,
  version: 2.6,
  language: 'en_US',
  appId: '232159504040059'
}
 
class App extends Component {
  constructor(props) {
    super(props)
 
    this.status = this.props.fb.status
    this.login = this.props.fb.login
    this.logout = this.props.fb.logout
  }
  getStatus(response) {
    if (response.authResponse) {
      this.responseApi.call(this, response.authResponse)
    }
  }
  responseApi(res) {
    console.log('token:', res.accessToken)
  }
  loginFacebook() {
    this.login(this.getStatus.bind(this))
  }
  logoutFacebook() {
    this.logout()
  }
  render() {
    return (
      <div>
        <button onClick={ this.loginFacebook.bind(this) }>Facebook Login</button>
        <button onClick={ this.logoutFacebook.bind(this) }>Facebook Logout</button>
      </div>  
 
    );
  }
}
 
export default LoginHOC(configureLoginProps)(App);