
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { NavbarComponents } from './components/Navbar/NavbarComponents'
import {InicioPage} from "./page/Inicio/InicioPage";
import {AltaPage} from "./page/Alta/AltaPage";
import {ContactanosPage} from "./page/Contactanos/ContactanosPage";
import {NosotrosPage} from "./page/Nosotros/NosotrosPage";
import { FooterComponent } from './components/Footer/FooterComponent';

function App() {

  return (
    <>
        <Router>
           <NavbarComponents />
              <Routes>
                <Route path='/' element={<InicioPage />}></Route>
                <Route path='/Alta' element={<AltaPage />}></Route>
                <Route path='/Contactanos' element={<ContactanosPage />}></Route>
                <Route path='/Nosotros' element={<NosotrosPage />}></Route>
              </Routes>
            <FooterComponent></FooterComponent>
        </Router>    
    </>
  )
}

export default App
