import { useEffect } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import About from "./components/about/About";
import './App.css'
import Store from "./components/store/Store";
import Practice from "./components/practice/Practice";
import Home from "./components/home/Home";
import { useSelector } from 'react-redux'



function App() {
   const themeMode = useSelector((state:any) => state.theme.mode);


   useEffect(()=>{

    document.documentElement.classList.add(themeMode)

   },[themeMode])
   

  return (
  <div className={themeMode} >

    <BrowserRouter>

    <Routes>
       <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/store" element={<Store/>} />
      <Route path="/practice" element={<Practice/>} />
    </Routes>
    
    </BrowserRouter>


  </div>
  )
}

export default App
