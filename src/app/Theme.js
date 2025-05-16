
import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        typography: {
            fontFamily: '"Roboto", sans-serif',
            button: {
               textTransform: 'none', 
            },
            color: '#fff !important'
        },
       
    },
    components: {
        MuiCssBaseline: {
            styleOverrides : (theme) => (`

                :root{
                    --text:#fff;
                    --bg:#121212;
                    --info:#909090;
                    --activeBg:#fff;
                    --activeText:#121212;
                    --activeNavLinkBg:#fff;
                    --activeNavLinkText:#121212
                }

            
            `) 
            
        },
      },
});








const lightTheme = createTheme({
    palette: {
        mode: 'light',
        typography: {
            fontFamily: '"Roboto", sans-serif',
            button: {
               textTransform: 'none', 
            },
            color: '#000 !important'
        },
       
    },
    components: {
        MuiCssBaseline: {
            styleOverrides : (theme) => (`
            :root{
                --text:#121212;
                --bg:#fff;
                --info:#909090;
                --activeBg:#121212;
                --activeText:#fff;
                 --activeNavLinkBg:#eee;
                --activeNavLinkText:#121212
            }
            `) 
            
        },
      },
});




function getModeTheme(mode){

    let themes = {
        'light' : lightTheme,
        'dark' : darkTheme,
    } 

    return themes[mode];

}


export {  getModeTheme }

