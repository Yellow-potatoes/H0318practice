import React, { Component } from 'react'
// import config from './config'
import About from './pages/About'
import Home from './pages/Home'
import Demo from './pages/Demo'
import MyNavLink from './components/MyNavLink'
import Title from './components/Title'
import { NavLink, Route, Switch, Redirect } from 'react-router-dom'
import './decorator'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <Title/>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/* <a className="list-group-item" href="./about.html">About</a>
                <a className="list-group-item active" href="./home.html">Home</a> */}
                <MyNavLink to="/about"  >About</MyNavLink>
                <MyNavLink to="/home"  >Home</MyNavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/* 注册路由 */}
                  <Switch>
                    {/* 严格匹配 exact exact={true} */}
                    <Route path="/about" exact component={About} />
                    <Route path="/abuot/student" component={Demo} />
                    <Route path="/home" component={Home} />
                    <Redirect to="/about"/>
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
