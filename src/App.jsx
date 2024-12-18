import React from 'react'
import './App.css';
import Landingpage from './pages/Landingpage';
import { Routes,Route} from 'react-router-dom';
import MobilesPage from './pages/MobilesPage';
import ComputersPage from './pages/ComputersPage';
import BooksPage from './pages/BooksPage';
import ClothesPage from './pages/ClothesPage';
import WatchesPage from './pages/WatchesPage';
import ShoesPage from './pages/ShoesPage';
import Login from './pages/Login';
import SinglePages from './pages/SinglePages';
import AcPages from './pages/AcPages';
const App = () => {
  return (
    <div>
      <Routes> 
         <Route path='/' element={<Landingpage/>}/>
         <Route path='/mobiles'element={<MobilesPage/>}/>
         <Route path='/computers'element={<ComputersPage/>}/> 
         <Route path='/books'element={<BooksPage/>}/>
         <Route path='/clothes'element={<ClothesPage/>}/>
         <Route path='/Watches'element={<WatchesPage/>}/>
         <Route path='/shoes'element={<ShoesPage/>}/>
         <Route path='/Ac'element={<AcPages/>}/>
         <Route path='/login'element={<Login/>}/>
         <Route path='/book/:id'element={<SinglePages/>}/>
         <Route path='/ac/:id'element={<SinglePages/>}/>
      </Routes>
    </div>
  )
}

export default App
