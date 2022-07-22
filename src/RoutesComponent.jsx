import React from 'react';
import Home from './components/Home/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
import Artists from './components/Artists/Artists';
import Artist from './components/Artists/Artist';
import Playlists from './components/Playlists/Playlists';
import Playlist from './components/Playlists/Playlist';
import Menu from './components/Menu/Menu';
import {
  HomePageContainer
} from "./components/Menu/Menu.styled";
import Search from './components/Search/Search';

const RoutesComponent = () => {
  return (
    <>
      <HomePageContainer>
      <Menu/>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/search' element={<Search/>}/>
                <Route path='/artists' element={<Artists/>}/>
                <Route path='/playlists' element={<Playlists/>}/>
                <Route path='/playlists/playlist' element={<Playlist/>}/>
                <Route path='/artists/artist' element={<Artist/>}/>
            </Routes>
            </HomePageContainer>
    </>
  )
}

export default RoutesComponent