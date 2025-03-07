import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './Responsive/Responsive.css';
import MainRoutes from './Routes/MainRoutes';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';



function App() {


  
  useEffect(() => {
    AOS.init();
  }, []);

  function animateText() {
    const button = document.querySelector('.button');
    button.classList.add('clicked');
}



  return (
     <MainRoutes/>

  );
}

export default App;
