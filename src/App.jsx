import React from 'react'
import "./App.css"
import Sidebar from './Sidebar'
import Feed from './feed'
import Suggestion from './suggestion'

function App() {
  return (
    <div className="d-flex vh-100" >
        <div className="w-20 d-flex" ><Sidebar/></div>
        <div className="ding"> <Feed/> </div>
        <div className="w-30"> <Suggestion/> </div>
    </div>
  )
}

export default App

