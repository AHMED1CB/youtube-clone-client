import Icon from './Icon';
import { IconButton } from '@mui/material'

export default ({icon , text , active}) => {
    return (
        <IconButton className={`filterButton ${active ? 'active' : ''}`}>
            <Icon icon={icon}/>
            <span className="icon-text">{text}</span>
        </IconButton>
    )
}