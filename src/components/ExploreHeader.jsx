import Filter from './ExploreFilter';

export default () => {

    // # Will Replace Later With Dynamic Data From Api
    const filters = [ 
        {id : 0 , icon : 'user' , text: 'For You'},
        {id : 1 , icon : 'fire' , text: 'Trending'},
        {id : 2 , icon : 'game-controller' , text: 'Gaming'},
        {id : 3 , icon : 'newspaper-clipping' , text: 'News'},
        {id : 4 , icon : 'student' , text: 'Learning'},
        {id : 5 , icon : 'brackets-angle' , text: 'Technology'},
    ] 


    const filtersContent = filters.map(filter => {
            return (
                <Filter key={filter.id} {...filter} active={filter.id == 0}/>
            )
    })

    return (
        <div className="explore-header">
                <div className="explore-info">
                    <h2 className="title-explore">Discover New Content</h2>
                    <p className="descreption-explore">
                    
                        Explore videos  Find new creators, topics, and communities that match your interests.
                    
                    </p>
                </div>

                <div className="explore-filters">

                    {filtersContent}

                </div>
        </div>
    )

}