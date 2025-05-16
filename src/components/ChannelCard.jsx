import { Avatar } from "@mui/material"


export default ({avatar = 'https://picsum.photos/50/50?random', channelName , active}) => {
    return (
        <div className={`${active ? 'active' : ''}  channel`}>
            <Avatar src={avatar} alt={'Channel Avatar Photo'} className={`channel-avatar`}/>
            <span className="channel-name">{channelName}</span>
        </div>
    )
}