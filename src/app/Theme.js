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
                a {
                    color:#fff ;
                    text-decoration:none;
                }

                li:not(.active) a:hover{
                    color:#fff;
                }

                input , button{
                    color:#fff;
                    background:transparent;
                    border-color:#fff
                }

                button{
                     border-left-color: transparent;

                }

                .active a{
                    background: #fff;
                    color:#000
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
                a{
                    color:#000;
                    text-decoration:none;
                }
                input , button{
                    color:#000;
                    background:transparent;
                    border-color:#000
                }

                button{
                     border-left-color: transparent;

                }

                .active a{
                    background: #eee;
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