import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './home'
import Images from './images'
import Navbar from './navbar'

function App() {
  return (
    <BrowserRouter>
      <div>
        <section>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/images' component={Images} />
        </section>
      </div>
    </BrowserRouter>
  )
}

export default App
