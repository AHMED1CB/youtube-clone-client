import Filter from './ExploreFilter';


export default () => {

    return (
        <div className="explore-header">
                <div className="explore-info">
                    <h2 className="title-explore">Discover New Content</h2>
                    <p className="descreption-explore">
                    
                        Explore videos  Find new creators, topics, and communities that match your interests.
                    
                    </p>
                </div>
                <div className="explore-filters">

                      <Filter icon="user" text="For You" isActive/>
                      <Filter icon="fire" text="Trending"/>
                      <Filter icon="game-controller" text="Gaming"/>
                      <Filter icon="newspaper-clipping" text="News"/>
                      <Filter icon="student" text="Learning"/>
                      <Filter icon="brackets-angle" text="Technology"/>

                </div>
        </div>
    )

}