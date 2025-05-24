import {
    Skeleton,
    CardContent,
  } from "@mui/material";
  
  import FlexBox from '../mui/FlexBox';
  
  export default  () => {
    return (
      <div>
          <Skeleton
            variant="rectangular"
            width="100%"
            height={160}
          />
         
  
          <FlexBox center={false} styles={{alignItems:"center" , mt:2}}>
            <Skeleton 
              variant="circular" 
              width={40} 
              height={40}
            />
            
            <Skeleton
              variant="text"
              width="90%"
              height={20}
              sx={{ 
                ml: 1.5
              }}
            />
          </FlexBox>
      </div>
    );
  };
  