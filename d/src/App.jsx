
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Detail from './components/Detail'
import Header from './components/Header'
import Login from './components/Login'
import Home from './components/Home'
import Recommends from "./components/Recommends";

function App() {
  const navigate = useNavigate()
function detailsPage(item){
navigate(`details/${item.name}`)
}
  return (
    <>
    <Header/>
   <Routes>
   <Route path='/' element={<Login/>} />
    <Route path='details/*' element={<Detail/>} />
    <Route path='/home' element={<Home detailsPage={detailsPage}/>} />
    <Route path='/re' element={<Recommends/>} />


   </Routes>
    </>
  )
}

export default App
