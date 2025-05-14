import Icon from './Icon';
import {IconButton} from '@mui/material'

export default ({icon , text , isActive}) => {
    return (
        <IconButton className={`filterButton ${isActive ? 'active' : ''}`}>
            <Icon icon={icon}/>
            <span className="icon-text">{text}</span>
        </IconButton>
    )
}