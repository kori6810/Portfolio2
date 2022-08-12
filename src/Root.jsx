import React from 'react'
import {Navbar} from './components/navbar/Navbar'
import {About} from './components/About/About'
import {Works} from './components/works/Works'
import { Home } from './components/Home/Home'

export const Root = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Works/>
    </div>
  )
}
