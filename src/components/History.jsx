import { Container, IconButton } from "@mui/material"
import Icon from "./Icon"
import Videos from "./Videos"
import  '../styles/History.css';
import SearchField from "./mui/SearchField";
export default () => {
    return (
        <main className="history-page">
            <Container className="history-contnet">

                    <div className="actions">
                        
                        <div className="action action-search">
                            <SearchField/>
                        </div>

                        <div className="action">
                            <IconButton>
                                <Icon icon="trash"/>
                                <span className="action-text">Clear All Watch History</span> 
                            </IconButton>
                        </div>
                        
                        <div className="action">
                            <IconButton>    
                                <Icon icon="pause"/>
                                <span className="action-text">Pause Watch History</span> 
                            </IconButton>
                        
                        </div>
                        
                    </div>


                    <div className="history-videos">
                        <Videos/>
                    </div>

            </Container>
        </main>
        
    )
}