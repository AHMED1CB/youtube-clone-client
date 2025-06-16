import  '../styles/subscriptions.css'
import SubscribedChannels from './SubscribedChannels'
import { useUser } from "../contexts/User"


export default () => {
    
    const user = useUser();
        
    return (
        <main className="subscriptions-page">

            <h2 className="heading">{user.subscriptions.length > 0 ? 'Subscribed Channels' : 'No Channels'}</h2>

                {user.subscriptions.length  > 0 &&
                    <SubscribedChannels/>
                 }

        </main>
    )
}