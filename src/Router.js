import React, { Component } from 'react'
// Component Routes
import { observer } from 'mobx-react'
import Routes from './Observable'

const route = new Routes()

const Router = observer ( class App extends Component {
  render(){
    return (
      <div>{route.renderComponent}</div>
    )
  }
})
export default Router