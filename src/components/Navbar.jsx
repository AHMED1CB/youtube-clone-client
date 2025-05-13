import NavLink from "./NavLink"
import '../styles/Navbar.css';
import { useContext } from "react";
import { NavContext } from "../contexts/Navbar";

export default () => {

    const path = location.pathname;

    const links = [
            {icon: 'house'  ,        path: '/' ,            text : 'Home'  },
            {icon: 'binoculars' ,    path: '/explore' ,     text : 'Explore'  },
            {icon: 'users' ,         path: '/subscriptions',text : 'Subscriptions'  },
            {icon: 'monitor-play'  , path: '/shorts' ,      text : 'Shorts'  },
            {icon: 'clock-counter-clockwise'   ,            path: '/history' , text : 'History'  },
            {icon: 'user-circle' ,   path:'/soon' ,         text : 'Profile'  },
    ]


    const {expanded , setExpanded} = useContext(NavContext);

    const navLinksContent = links.map((link , index) => {
        return (
            <NavLink key={index} {...link} filled={path == link.path} showText={expanded} /> 
        )
    })
    



    return (
        <nav className={`navbar ${expanded ? 'expanded' : ''}`}> 

            <ul className="links">                

                {navLinksContent}                
                
            </ul>

        </nav>
    )
}