import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'
// import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import Facebook from './facebook';

const buttonStyle = {
  marginTop:'10px',
  padding:'5px',
  backgroundColor:'rgba(16, 172, 232, 0.71)',
  borderRadius: '5px',
  color: '#fff',
};
export default class CustomNavbar extends Component {
  constructor(props) {
    super(props)
    this.state = { loggedIn: false };
}

  responseFacebook = (response) => {
    this.setState ({
      loggedIn: !this.state.loggedIn
    });
    console.log("response",response,"loggedIn",this.state.loggedIn);
  }

  // logoutClick = (response,accessToken) => {
  //  this.logoutClick = () => {
     
  //  }
  //  console.log("logoutClick",accessToken)
  // }

  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">FoodPoint</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            {/* <FacebookLogin
              appId="232159504040059"
              autoLoad
              callback={this.responseFacebook}
              render={renderProps => ( 
                this.state.loggedIn === false ? 
                <button style={buttonStyle} onClick={renderProps.onClick}>Login via Facebook</button> 
                : <button style={buttonStyle} onClick={renderProps.onClick}>Log Out</button>
              )}
            /> */}
            <Facebook onClick={this.props.onClick }/>
            {/* <div style={{ marginTop: '10px' }} className="fb-login-button" data-max-rows="1" data-size="medium" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="false"></div> */}
            {/* <div style={{ marginTop: '10px' }} className="fb-login-button" data-max-rows="1" data-size="medium" data-button-type="login_with" data-auto-logout-link="true" data-use-continue-as="true"></div> */}
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
              About
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
              News
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
