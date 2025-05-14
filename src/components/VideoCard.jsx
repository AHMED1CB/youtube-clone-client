
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
             
                    image={'https://picsum.photos/600/400'}
             
                    alt={'dev'}
                />
                    <span className="time">12:30</span>
             
             </div>

             <CardContent className="card-video-content">
                <FlexBox className="video-details" >
                        <Avatar src={'https://picsum.photos/50/50'} alt={'dev Channel'} className="avatar-image" />
                        <Typography
                                variant="title"
                                fontWeight="bold"
                                sx={{
                                    display: "-webkit-box",
                                WebkitLineClamp: 1,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                
                            }}
                                className="video-title" 
                        >

                            Lorem ipsum dolor sit amet consectetur
                             adipisicing elit. Tenetur, neque? 
                             
                    </Typography>
                </FlexBox>
                
                <FlexBox className="video-footer-details" center={false} styles={{gap:'7px'}}>
                    <Typography variant="body2" className="channelName">
                                {'dev1'}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" className="video-details">
                            200k views • 2 days Ago
                    </Typography>
                </FlexBox>    

            </CardContent>

        </div>

    )

}