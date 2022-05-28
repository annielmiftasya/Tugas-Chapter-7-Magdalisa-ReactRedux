import React from 'react'
import HomePage from './pages/Beranda'
import SearchPage from './pages/Search'
import {Route, Routes} from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/cari" element={<SearchPage />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
