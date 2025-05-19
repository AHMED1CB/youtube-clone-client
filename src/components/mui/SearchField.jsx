import IconButton from '@mui/material/IconButton';
import Icon from '../Icon';


export default () => {
    return (
        <>
            <input type="text" placeholder="Search"  className="searchField" name="search"/>
            
            <IconButton className="search-icon">
                    
                <Icon icon="magnifying-glass"/>
                    
            </IconButton>
        </>
    )
}