import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Artists from './components/Artists/Artists';
import Artist from './components/Artists/Artist';
import Playlists from './components/Playlists/Playlists';
import Playlist from './components/Playlists/Playlist';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/artists' element={<Artists/>}/>
                <Route path='/playlists' element={<Playlists/>}/>
                <Route path='/playlists/playlist' element={<Playlist/>}/>
                <Route path='/artists/artist' element={<Artist/>}/>
            </Routes>
          </BrowserRouter>
    </div>
  )
}

export default App;
