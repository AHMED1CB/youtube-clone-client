import { Link } from "react-router-dom"
import Icon from "./Icon"

export default ({ path , icon , showText , text , filled = false}) => {
    return (

        <li className={`${filled ? 'active' : ''} ${showText  ? 'show' : ''}`}> 
            <Link to={path}>
                 <Icon icon={icon} filled={filled}/>
                  
                {showText && <span>{text}</span> }

            </Link>
        
        </li> 
    )
}