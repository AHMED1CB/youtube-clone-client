import NavLink from "./NavLink"
import '../styles/Navbar.css';
import { useSelector ,  useDispatch } from 'react-redux'
import { setExpanded } from '../features/Display/DisplaySlice.js';
import { useLocation } from "react-router-dom";
export default () => {

    const { expanded } = useSelector((state) => state.display );
    
    const dispatch = useDispatch();

    const path = useLocation().pathname;

    const isActive = (target) => {
        return path === target ? 'active' : '' ;
    }
    const links = [
            {icon: 'house'  ,        path: '/' ,            text : 'Home'  },
            {icon: 'plus' ,    path: '/upload' ,     text : 'New'  },
            // {icon: 'users' ,         path: '/feed/subscriptions',text : 'Subscriptions'  },
            {icon: 'monitor-play'  , path: '/shorts' ,      text : 'Shorts'  },
            {icon: 'clock-counter-clockwise'   ,            path: '/feed/history' , text : 'History'  },
            {icon: 'user-circle' ,   path:'/profile' ,         text : 'Profile'  },
    ]



    const navLinksContent = links.map((link , index) => {
        return (
            <NavLink key={index} {...link} filled={isActive(link.path)} showText={expanded} /> 
        )
    })
    


    function expandMenu(state){
        dispatch(setExpanded(state))
    }

    return   (
        
        <nav className={`navbar ${expanded ? 'expanded' : ''}`} onMouseEnter={() => {expandMenu(true)}} onMouseLeave={() => {expandMenu(false)}}> 

            <ul className="links">                

                {navLinksContent}                
                
            </ul>

        </nav>
    )
}