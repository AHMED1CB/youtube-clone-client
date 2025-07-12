
import {
  CardMedia,
  CardContent,
  Typography,
  Avatar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { utils } from "../app/utils";

import FlexBox from './mui/FlexBox';

export default ({data}) => {

    if (data.video && typeof data.video != 'string'){
        data = data.video;
    }

    const profileImg =  data.channel.profile_photo ? utils.storage + data.channel.profile_photo : '/user.png'; 
    
    const go = useNavigate();
    
    return (
      
        <div className="videoCard" >
      
            <div className="video-cover" onClick={() => go(`/videos/${data.slug}`)} >
                <CardMedia 

                    component="img"
             
                    image={utils.storage + data.cover}             
                />
                    <span className="time">{data.duration}</span>
             
             </div>

             <CardContent className="card-video-content">
                <FlexBox className="video-details"  >
                        <Avatar onClick={() =>   go(data.channel.username ? 'channel/' + data.channel.username : null)} src={profileImg} alt={data.channel.username} className="avatar-image" />
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
                    <Typography onClick={() => go('channel/' +data.channel.username)} variant="body2" className="channelName">
                                {data.channel.name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" className="video-details">
                            {data.views_count ?? 0} views • {data.creation_date} 
                    </Typography>
                </FlexBox>    

            </CardContent>

        </div>

    )

}