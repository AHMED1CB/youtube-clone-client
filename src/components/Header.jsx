
// # Materiial UI
import Container from '@mui/material/Container';
import FlexBox from './mui/FlexBox';
import IconButton from '@mui/material/IconButton';

// # ANOTHER 
import Logo from '/logo.png'
import '../styles/Header.css'
import { Link } from 'react-router-dom';
import Icon from './Icon';
import { useSelector , useDispatch} from 'react-redux'
import { setMode , setExpanded } from '../features/Display/DisplaySlice';

export default () => {

    // const {mode , setMode} = useContext(modeContext);
    // const {setExpanded} = useContext(NavContext);

    const {mode , expanded} = useSelector((state) => state.display );
    
    const dispatch = useDispatch();

    function changeMode(){
        
        dispatch(setMode(mode)); // We Check in Slice 

    }


    function changeMenuExpand(){
        dispatch(setExpanded(!expanded))
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
                    <input type="text" placeholder="Search"  className="searchField" name="search"/>
                    <IconButton className="search-icon">
                        <Icon icon="magnifying-glass"/>
                    </IconButton>
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