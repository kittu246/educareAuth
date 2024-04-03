import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import SignUpSignIn from "./pages/SignUpSignIn"
import UserPage from "./pages/UserPage"
import SignUp from "./components/SignUp"
import Login from "./components/Login"

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path ='/signUp' element={<SignUp/>}/>
        <Route path ='/signIn' element={<Login/>}/>
        <Route path='/userPage' element={<UserPage/>}/>
      </Routes>
    </Router>
      
    
  )
}

export default App
