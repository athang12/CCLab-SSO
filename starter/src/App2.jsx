import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

function App2() {
  const [userstate, setUserState] = useState({})
  return (
    <div className="App4">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              userstate && userstate._id ? (
                <Profile
                  setUserState={setUserState}
                  username={userstate.fname}
                />
              ) : (
                <Login setUserState={setUserState} />
              )
            }
          ></Route>
          <Route
            path="/login"
            element={<Login setUserState={setUserState} />}
          ></Route>
          <Route path="/signup" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App2
