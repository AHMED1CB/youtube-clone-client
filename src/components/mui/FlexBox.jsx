import Box from '@mui/material/Box';


export default ({children , styles ,  className = '' , center = true }) => {

    return (
        <Box  className={`flexBox ${className}`} sx={{
                                                    display:'flex',
                                                    alignItems: (center ? 'center' : 'initial'),
                                                    ...styles
                                                }}>
            {children}
        </Box>
    )

}