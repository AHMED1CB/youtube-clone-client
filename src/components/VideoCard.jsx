
import {
  CardMedia,
  CardContent,
  Typography,
  Avatar,
} from "@mui/material";

import FlexBox from './mui/FlexBox';
export default () => {

    return (
      
        <div className="videoCard" >
      
            <div className="video-cover">
                <CardMedia 

                    component="img"
             
                    image={'https://picsum.photos/150/200'}
             
                    alt={'dev'}
                />
             
             </div>

             <CardContent className="card-video-content">
                    <Typography
                            variant="title"
                            fontWeight="bold"
                            sx={{
                                display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                        }}
                             className="video-title" 
                    >
                            A Day Of Developper
                </Typography>
                    
                <FlexBox className="channel-details" >
                    <Avatar src={'Dev'} alt={'dev Channel'} className="avatar-image" />

                    <Typography variant="body2">
                            {'dev1'}
                    </Typography>
                </FlexBox>

                <Typography variant="body2" color="text.secondary" className="video-details">
                        200k views / 2 days Ago
                </Typography>

            </CardContent>

        </div>

    )

}