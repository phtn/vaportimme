import React from 'react'
import { extendObservable } from 'mobx'
import App from './App'
import AgeVerifier from './components/AgeVerifier'
import Juice from './components/Juice'

class RouteObservable {
  constructor(){
    extendObservable(this, {
      component: 'verify',
      set setComponent(comp){
        return this.component = comp
      },
      get renderComponent(){
        switch(this.component){
          case 'verify': return <AgeVerifier goHome={()=>this.component = 'home'}/>
          case 'home': return <App juice={()=> this.component = 'juice'}/>
          case 'juice': return <Juice back={()=> this.component = 'home'}/>
          default: return <AgeVerifier goHome={()=>this.component = 'home'}/>
        }
      }
    })
  }
}
export default RouteObservable