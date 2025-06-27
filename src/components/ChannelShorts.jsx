import { useNavigate } from "react-router-dom";
import { utils } from "../app/utils";

import '../styles/ChannelShort.css'

const ChannelShorts =  ({shorts}) =>   {

    const go = useNavigate()

    return (
        <div className="channel-shorts">

            {shorts.map(short => {
                return (
                    <div key={short.id} className="channel-short" onClick={() => go(`/shorts/${short.slug}`)}>
                        <div className="cover">
                            <img className="channel-short-cover" src={utils.storage + short.cover} />
                        </div>

                        <div className="details">
                            <span className="channel-short-title">{short.views_count + ' Views'}</span>
                        </div>

                    </div>
                )
            })}
        
        </div>

    );
}

export default ChannelShorts;