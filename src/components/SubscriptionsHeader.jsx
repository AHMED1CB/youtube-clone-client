import ChannelCard from "./ChannelCard"
import FlexBox from "./mui/FlexBox"


export default  () => {
    return (
        <div className="subscriptions-header">
                    
                    <FlexBox className="channels">

                        <ChannelCard channelName="First Developper"/>
                        <ChannelCard channelName="Second Developper"/>
                        <ChannelCard channelName="Third Developper"/>
                        <ChannelCard channelName="4th Developper"/>
                        <ChannelCard channelName="5th Developper"/>
                       
                    </FlexBox>


            </div>
    )
}