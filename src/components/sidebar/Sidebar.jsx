import React from 'react'
import "./sidebar.css"
import Logo from '../../assets/logo.png'

// --first-color: hsl(353, 100%, 65%);
// --title-color: hsl(244, 24%, 26%);
// --text-color: hsl(244, 16%, 43%);
// --body-color: hsl(258, 60%, 98%);
// --container-color: #fff;
// --dark-first-color: hsl(353, 100%, 65%);
// --dark-title-color: hsl(244, 24%, 26%);
// --dark-text-color: hsl(244, 16%, 43%);
// --dark-body-color: hsl(258, 60%, 98%);
// --dark-container-color: #fff;

const Sidebar = () => {
    const setDarkMode = ()=>{
        document.querySelector("body").setAttribute('data-theme', 'dark')
    }
    const setLightMode = ()=>{
        document.querySelector("body").setAttribute('data-theme', 'light')
    }

    const toggleTheme= ()=>{
        if(document.querySelector("body").getAttribute('data-theme')==='light') setDarkMode();
        else setLightMode();
    }
  return (
    <aside className='aside'>
        <a href="#home" className="nav_logo">
            <img src={Logo} alt="" />
        </a>
        <nav className="nav">
            <div className="nav_menu">
                <ul className="nav_list">
                    <li className="nav_item">
                        <a href="#home" className="nav_link">
                        <i className="icon-home" ></i>
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#about" className="nav_link">
                            <i className="icon-user-following"></i>
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#portfolio" className="nav_link">
                            <i className="icon-layers"></i>
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#contact" className="nav_link">
                            <i className="icon-bubble"></i>
                        </a>
                    </li>
                    <li className="nav_item"> 
                    <div  className="nav_link">
                            <i className="icon-bulb" onClick = {toggleTheme}></i>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        <div className="nav_footer">
            <span className="copyright">
                &copy; 2023
            </span>
        </div>
    </aside>
  )
}

export default Sidebar