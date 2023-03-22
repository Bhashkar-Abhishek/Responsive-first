import React, { useState } from 'react'
import style from './Navbar.module.css'


const Navbar = () => {
    const [isMobile, setMobile] = useState(false)
    return ( 
        <div className={style.container}>
            <div className={style.nav}>
                <div className={style.logo}><span>Onclick</span></div>
                <div className={isMobile ? style.navbarMobile : style.navbar}
                >
                    <ul className={style.list}>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Contact</li>
                        <li>About Us</li>
                    </ul>
                </div>
            </div>
            <div className={style.userProfile}>
    
                <div className={style.login}><a href="">Login</a></div>
                <div className={style.signup}><button>Sign Up</button></div>

                <div className={style.menuBtn}>
                        {isMobile ? (<i onClick={() => setMobile(!isMobile)} className='fas fa-times'></i>) : (<i onClick={() => setMobile(!isMobile)}className='fas fa-bars'></i>)}
                </div>
            </div>
        </div>
    )
}

export default Navbar