import { useNavigate } from "react-router-dom"

export default function RelatedVideo({data , utils}){

    const go = useNavigate();

    return (
        <>
         <div className="related-video-card" onClick={() => go(`/videos/${data.slug}`)} >
            <div className="related-thumbnail">
              <img src={utils.storage + data.cover} alt={data.title} />
              <span className="duration">{data.duration}</span>
            </div>
            <div className="related-info">
              <h4 className="related-video-title">{data.title}</h4>
              <p className="related-channel">{data.channel.name}</p>
              <p className="related-stats">{data.views_count} views • {data.creation_date}</p>
            </div>
          </div>
        </>
    )
}