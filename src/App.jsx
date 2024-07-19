import routes from './routes';
import './App.css';
import './output.css'
import {useRoutes} from 'react-router-dom'
import NavBar from "./components/nav bar/NavBar"
import { useState } from 'react';




function App() {
  const [theme, setTheme] = useState(localStorage.getItem("display"))

  let router = useRoutes(routes)

  function themeChanger(){
    if(localStorage.getItem("display") === "dark"){
       localStorage.setItem("display", "light")
    }else{
      localStorage.setItem("display", "dark")
    }
    setTheme(localStorage.getItem("display"))
    
  }
  
  
  return (
    <div className={theme}>
    <NavBar onChange={themeChanger}/>
    {router}
    </div>
  );
}

export default App;
