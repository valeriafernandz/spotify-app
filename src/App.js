import './App.css';
import LoginPage from './components/Login/LoginPage'
import Home from './components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Artists from './components/Artists/Artists';
import Artist from './components/Artists/Artist';
import Playlist from './components/Playlist/Playlist';
import PlaylistItem from './components/Playlist/PlaylistItem';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/artists' element={<Artists/>}/>
                <Route path='/playlists' element={<Playlist/>}/>
                <Route path='/playlists/playlist' element={<PlaylistItem/>}/>
                <Route path='/artists/artist' element={<Artist/>}/>
            </Routes>
          </BrowserRouter>
    </div>
  )
}

export default App;
