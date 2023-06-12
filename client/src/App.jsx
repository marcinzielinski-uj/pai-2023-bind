import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from "./components/Users.jsx";
import City from "./components/City.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <h1>Lista miast świata</h1>
          <City/>
      </div>
    </>
  )
}

export default App
