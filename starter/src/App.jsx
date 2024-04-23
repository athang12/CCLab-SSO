import Carousel from './Carousel'
import SlickCarousel from './SlickCarousel'
import { useAppContext } from './Appcontext'
import App2 from './App2'
import { useEffect } from 'react'
const App = () => {
  const { value, setValue, handleClick, handleLogout } = useAppContext()
  useEffect(() => {
    setValue(localStorage.getItem('email'))
  })

  return (
    <>
      {value ? (
        <main>
          {/* <Carousel /> */}
          <SlickCarousel />
          <button className="btn" onClick={handleLogout}>
            Logout
          </button>
        </main>
      ) : (
        <>
          <App2 />
        </>
      )}
    </>
  )
}
export default App
