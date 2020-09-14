import React, { useEffect, useState} from 'react';
import './Nav.css';
import logoo from './dugoafrica12.png';
import meshach from './meshach.png'

function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);




    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
            className="nav__logo"
            src={logoo}
            /* import logo image */
            alt="Dugoafrica Logo"
            />

             <img className="nav__avatar"
                src={meshach}
                alt="Dugoafrica Logo"
            /* import logo image */
            />

        </div>
    )
}

export default Nav;