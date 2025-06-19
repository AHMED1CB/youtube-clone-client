
import {
  CardMedia,
  CardContent,
  Typography,
  Avatar,
} from "@mui/material";
import { utils } from "../app/utils";

import FlexBox from './mui/FlexBox';

export default ({data}) => {

    const profileImg =  data.channel.profile_photo ? utils.storage + data.channel.profile_photo : '/user.png'; 

    return (
      
        <div className="videoCard" >
      
            <div className="video-cover">
                <CardMedia 

                    component="img"
             
                    image={utils.storage + data.cover}             
                />
                    <span className="time">{data.duration}</span>
             
             </div>

             <CardContent className="card-video-content">
                <FlexBox className="video-details"  >
                        <Avatar src={profileImg} alt={data.channel.username} className="avatar-image" />
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
                            {data.title}
                             
                    </Typography>
                </FlexBox>
                
                <FlexBox className="video-footer-details" center={false} styles={{gap:'7px'}}>
                    <Typography variant="body2" className="channelName">
                                {data.channel.name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" className="video-details">
                            {data.views?.length || 0} views • 2 days Ago { /* Changing Date Later*/ }
                    </Typography>
                </FlexBox>    

            </CardContent>

        </div>

    )

}