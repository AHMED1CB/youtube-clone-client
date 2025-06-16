
import ChannelCard from "./ChannelCard"
import FlexBox from "./mui/FlexBox"


export default  () => {

    
    

    return  (
        <div className="subscriptions-header">
                    
                    <FlexBox className="channels">

                        <ChannelCard channelName="Channel 1" active={true}/>
                        <ChannelCard channelName="Channel 2"/>
                        <ChannelCard channelName="Channel 3"/>
                        <ChannelCard channelName="Channel 4"/>
                        <ChannelCard channelName="Channel 5"/>
                        <ChannelCard channelName="Channel 6"/>
                       
                    </FlexBox>


            </div>
    )
}