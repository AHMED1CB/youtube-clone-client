
// # Materiial UI
import Container from '@mui/material/Container';
import FlexBox from './mui/FlexBox';
import IconButton from '@mui/material/IconButton';

// # ANOTHER 
import Logo from '/logo.png'
import '../styles/Header.css'
import { Link } from 'react-router-dom';
import Icon from './Icon';
import { useContext } from 'react';
import { modeContext } from '../contexts/Mode';

export default () => {

    const {mode , setMode} = useContext(modeContext);

    function changeMode(){
        if (mode != 'light'){
            setMode('light')
            localStorage.mode = 'light';
        }else{
            setMode('dark')
            localStorage.mode = 'dark';
        }
    }

    return (
        <header className="header">
            <Container fixed sx={{display:'flex',justifyContent:'space-between' , alignItems:'center',gap:'20px'}}>

                    <IconButton className="list-icon">
                        <Icon icon="list"/>
                    </IconButton>

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