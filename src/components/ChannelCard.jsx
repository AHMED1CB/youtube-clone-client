export default ({avatar = '/user.png', channelName , active}) => {
    return (
        <div className={`${active ? 'active' : ''}  channel`}>
            <img src={avatar} alt={'Channel Avatar Photo'} className={`channel-avatar`}/>
            <span className="channel-name">{channelName}</span>
        </div>
    )
}