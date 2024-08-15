import {Routes, Route } from "react-router-dom"
import Home from './Components/Home'
import NavBar from "./Components/NavBar"
import BrowseCharacters from './Components/BrowseCharacters'
import CharacterDetail from './Components/CharacterDetail'
import Comics from './Components/Comics'
import NotFound from "./Components/NotFound"
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path='/characters' element={<BrowseCharacters />} />
        <Route path='/characters/:id' element={<CharacterDetail />} />
        <Route path="/comics" element={<Comics />} />

        <Route path='*' element={<NotFound />} />  
      </Routes>
    </>
  )
}

export default App
