import { useState } from 'react';
import './NavbarComponent.css';
import { Link } from 'react-router-dom';

export const NavbarComponents = () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='navbar'>
        <div className='nav_logo'>World Digital</div>
        <div className={`nav_items ${isOpen && "open"}`}>
            <Link className='links' to='/'>Inicio</Link>
            <Link className='links' to={'/Alta'}>Alta</Link>
            <Link className='links' to={'/Contactanos'}>Contactanos</Link>
            <Link className='links' to={'/Nosotros'}>Nosotros</Link>

            <div className='redesSociales'>
              <a href="https://github.com/GabrielDev22"><img className='iconosRedesSociales' src="img/iconosRedesSociales/github.svg" alt="" /></a>
              <a href="https://www.linkedin.com/in/gabriel-torres-431690229/"><img className='iconosRedesSociales' src="img/iconosRedesSociales/linkendin.svg" alt="" /></a>
              <a href="https://devgaboportafolio.netlify.app"><img className='iconosRedesSociales' src="img/iconosRedesSociales/portafolio.svg" alt="" /></a>
        </div>  
        </div>

        <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </div>

    </div>
  )
}
