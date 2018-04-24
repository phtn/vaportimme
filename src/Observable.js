import React from 'react'
import { extendObservable } from 'mobx'
import App from './App'
import AgeVerifier from './components/AgeVerifier'
import Juice from './components/Juice'
import Oil from './components/Oil'
import Store from './components/Store'
import Equip from './components/Equipment'
class RouteObservable {
  constructor(){
    extendObservable(this, {
      component: 'store',
      set setComponent(comp){
        return this.component = comp
      },
      get renderComponent(){
        switch(this.component){
          case 'verify': return <AgeVerifier goHome={()=>this.component = 'home'}/>
          case 'home': return <App juice={()=> this.component = 'juice'} oil={()=> this.component = 'oil'} store={()=> this.component='store'} equip={()=> this.component='equip'}/>
          case 'juice': return <Juice back={()=> this.component = 'home'}/>
          case 'oil':   return <Oil back={()=> this.component = 'home'}/>
          case 'store': return <Store back={()=> this.component = 'home'}/>
          case 'equip': return <Equip back={()=> this.component = 'home'}/>
          default: return <AgeVerifier goHome={()=>this.component = 'home'}/>
        }
      }
    })
  }
}
export default RouteObservable