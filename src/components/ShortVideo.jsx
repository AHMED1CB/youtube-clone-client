import { Avatar, Button } from "@mui/material"
import FlexBox from "./mui/FlexBox"
import Icon from "./Icon"

export default () => {
    return (
        <div className="short-video">
                <div className="video-shape">

                
                            <div className="video">
                                {/* We Just Using Images For This Time */}
                                <div className="video-content">
                                    <img src="https://picsum.photos/600/400" alt="video" />
                                </div>
                                

                                <div className="video-actions">
                                    
                                    <div className="action action-like">
                                        <Icon icon={'thumbs-up'}/>
                                        <span className="likes-count">200k</span>
                                    </div>
                                    
                                    <div className="action action-dislike">
                                        <Icon icon={'thumbs-down'}/>
                                        <span className="dislikes-count">5k</span>
                                    </div>

                                    <div className="action action-comment">
                                        <Icon icon={'chat'}/>
                                        <span className="comments-count">50k</span>
                                    </div>
                                    
                                    <div className="action action-share">
                                        <Icon icon={'share'}/>
                                        <span className="shares-count">8k</span>
                                    </div>
                                
                                                                
                                    <div className="action action-details">
                                        <Icon icon={'dots-three-outline'}/>
                                    </div>

                            </div>


                            </div>

                            <FlexBox className="details" center={false}>


                                <FlexBox className="video-details" center={false}>
                                    <p className="video-title">Lorem ipsum dolor sit amet consectetur </p>
                                    <span className="count-views">200k views</span>
                                </FlexBox>

                                <FlexBox className="channel-details" >

                                    <div className="content">
                                        <Avatar src={'https://picsum.photos/50/50'} className="channel-avatar" alt="dev 1"/>
                                        <span className="channel-name">Dev 1</span>
                                    </div>

                                    <div className="actions">
                                        <Button className="subscribe-btn">subscribe</Button>
                                    </div>

                                </FlexBox>

                            </FlexBox>
                        </div>
                    </div>
    ) 
}