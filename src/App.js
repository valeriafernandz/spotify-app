import './App.css';
import Login from './components/Login/Login';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import RoutesComponent from './RoutesComponent';

function App(){

  return (
    <div className="App">

      <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/*' element={<RoutesComponent/>}/>
            </Routes>
          </BrowserRouter>
    </div>
  )
}

export default App;
