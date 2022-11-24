import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

// import Pages
import Home from '../pages/home'
import SignUp from '../pages/signUp'
import Login from '../pages/login'

const AppRouter: React.FC = () => {
  
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter