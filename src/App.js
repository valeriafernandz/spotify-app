import './App.css';
import LoginPage from './components/Login/LoginPage'
import Home from './components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage/>}/>
                <Route path='/home' element={<Home/>}/>
            </Routes>
          </BrowserRouter>
    </div>
  )
}

export default App;
