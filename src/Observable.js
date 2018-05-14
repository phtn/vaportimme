import React from 'react'
import { extendObservable } from 'mobx'
import App from './App'
import AgeVerifier from './components/AgeVerifier'
import Juice from './components/Juice'
import Oil from './components/Oil'
import Store from './components/Store'
import Equip from './components/Equipment'
import CBD from './components/CBD'
class RouteObservable {
  constructor(){
    extendObservable(this, {
      component: 'verify',
      setComponent(comp){
        this.component = comp
      },
      setLocal(comp){
        localStorage.setItem('component', comp)
      },
      get renderComponent(){
        switch(this.component){
          case 'verify': return <AgeVerifier goHome={()=> {
            // eslint-disable-next-line 
            this.component = 'home',
            this.setLocal('home')
          }}/>
          case 'home': return <App 
            juice={()=> {
              this.component = 'juice'
              this.setLocal('juice')
            }} 
            oil={()=> {
              this.component = 'oil'
              this.setLocal('oil')
            }} 
            store={()=> {
              this.component='store'
              this.setLocal('store')
            }} 
            equip={()=> {
              this.component='equip'
              this.setLocal('equip')
            }} 
            cbd={()=> {
              this.component='cbd'
              this.setLocal('cbd')
            }}/>
          case 'juice': return <Juice back={()=> {
            this.component = 'home'
            this.setLocal('home')
          }}/>
          case 'oil':   return <Oil back={()=> {
            this.component = 'home'
            this.setLocal('home')
          }}/>
          case 'store': return <Store back={()=> {
            this.component = 'home'
            this.setLocal('home')
          }}/>
          case 'equip': return <Equip back={()=> {
            this.component = 'home'
            this.setLocal('home')
          }}/>
          case 'cbd': return <CBD back={()=> {
            this.component = 'home'
            this.setLocal('home')
          }}/>
          default: return <AgeVerifier goHome={()=>{
            this.component = 'home'
            this.setLocal('home')
          }}/>
        }
      }
    })
  }
}
export default RouteObservable