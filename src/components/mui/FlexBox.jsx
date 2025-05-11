import Box from '@mui/material/Box';


export default ({children , styles }) => {

    return (
        <Box  className="flexBox" sx={{
            display:'flex',
            alignItems:'center',
            ...styles
        }}>
            {children}
        </Box>
    )

}