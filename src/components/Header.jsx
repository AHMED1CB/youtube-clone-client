
// # Materiial UI

import Container from '@mui/material/Container';
import FlexBox from './mui/FlexBox';
import IconButton from '@mui/material/IconButton';

// # ANOTHER 

import Logo from '/logo.png'
import '../styles/Header.css'
import { Link } from 'react-router-dom';
import Icon from './Icon';
import { useSelector , useDispatch } from 'react-redux'
import { setMode } from '../features/Display/DisplaySlice';
import SearchField from './mui/SearchField';

export default () => {

    // const {mode , setMode} = useContext(modeContext);
    // const {setExpanded} = useContext(NavContext);


    // # Get Mode Of Page Using Redux
    
    const mode = useSelector((state) => state.display.mode);
    
    const dispatch = useDispatch();

    function changeMode(){
        // # Change Mode Of Page Using Redux
        
        dispatch(setMode(mode)); // We Check in Slice 

    }

    return (
        <header className="header">
            <Container fixed sx={{display:'flex',justifyContent:'space-between' , alignItems:'center',gap:'20px'}}>

                {/* <IconButton className="list-icon" onClick={changeMenuExpand}>
                    <Icon icon="list"/>
                </IconButton> */}

                <Link className="logo" to="/">

                     <FlexBox styles={{gap:'8px', width:'25%'}} >
                        
                        <img src={Logo} alt="youtube-logo" className="logoImage"  /> 
                        <h2 className="logoText">Youtube</h2>

                    </FlexBox>
                </Link>

                <FlexBox styles={{width:'40%'}}>
                    
                        <SearchField/>

                </FlexBox>

                <FlexBox styles={{width:'fit-content'}}>
                
                    <IconButton className="icon-mode" onClick={changeMode}>
                   
                         <Icon icon="moon" filled={mode != 'light'}/>
                   
                    </IconButton>
                
                </FlexBox>

            </Container>
        </header>
    )

}