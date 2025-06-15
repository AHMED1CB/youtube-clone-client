import { useUser } from "../contexts/User"
import ChannelCard from "./ChannelCard"
import FlexBox from "./mui/FlexBox"


export default  () => {

    return (
        <div className="subscriptions-header">
                    
                    <FlexBox className="channels">

                        <ChannelCard channelName="First" active={true}/>
                        <ChannelCard channelName="Second"/>
                        <ChannelCard channelName="Third"/>
                        <ChannelCard channelName="4th"/>
                        <ChannelCard channelName="5th"/>
                       
                    </FlexBox>


            </div>
    )
}