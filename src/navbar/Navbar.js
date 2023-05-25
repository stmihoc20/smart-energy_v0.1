import {React, useState, useEffect} from 'react';
import NavElement from './NavElement';
import './Navbar.css';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
    let categories = [
        {className: "", source: "", title: "Products", path: "/categories"}, 
        {className: "", source: "", title: "Sign Up", path: "/signup"}, 
        {className: "", source: "", title: "Log in", path: "/login"}, 
        {className: "icon dreapta", source: "/images/English-Flag.png", title: "english-flag", path: "/"}
    ];

    let element = categories.map((e) => <NavElement key = {e.title} element = {e}/>);
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    const [miniLogoPath, setMiniLogoPath] = useState("/images/favicon.png");
    const [collapse, setCollapse] = useState(false);

    //element = categories.map((e) => <NavElement onClick = {changeActive} key = {e.title} element = {e}/>)
    
        useEffect(() => {
            // Handler to call on window resize
            function handleResize() {
              // Set window width/height to state
              setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
              });
            }
            if(props.isLoggedIn){
                setMiniLogoPath("/images/user-icon2.png");
            }
            else{
                setMiniLogoPath("/images/favicon.png");
            }

            
            window.addEventListener("resize", handleResize);
            // Call handler right away so state gets updated with initial window size
            handleResize();
            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }, [props.isLoggedIn])

    const logo = () => {
        if(windowSize.width < 660)
            return ;
        return (
            <Link to="/homepage">
                <img id = "header-logo" src = {process.env.PUBLIC_URL + "/images/logo@2x.png"} alt = "logo"/>
            </Link>
        );
    }
    
    return (
        <div className="menu-wrapper">
            <div className="header shadow">
                <nav>
                    <ul className="primary">
                        <li onMouseEnter={() => setCollapse(true)}
                            className="icon"
                            data-bs-toggle="collapse" 
                            href="#collapseExample" 
                            role="button" 
                            aria-expanded="false" 
                            aria-controls="collapseExample"
                        >
                            <Link to="/homepage">
                                <img src = {process.env.PUBLIC_URL + miniLogoPath} alt="mini-logo"/>
                            </Link>
                        </li>
                        {element}
                    </ul>
                    {logo()}
                    {collapse && props.isLoggedIn && (
                            <ul className="list-group dropdown collapse" id="collapseExample" onMouseLeave={() => setCollapse(false)}>
                                <li className="list-group-item"><Link to="/homepage">Account</Link></li>
                                <li className="list-group-item"><Link to="/homepage">Cart</Link></li>
                                <li className="list-group-item"><Link to="/homepage" onClick={() => props.logoutUser()}>Log out</Link></li>
                            </ul>
                        )}
                </nav>
            </div>
        </div>
    );
}