import { Container, IconButton } from "@mui/material"
import Icon from "./Icon"
import Videos from "./Videos"
import  '../styles/History.css';
import SearchField from "./mui/SearchField";
import  {  useUser  } from '../contexts/User';
import { useEffect , useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeHistoryState , clearHistoryVideos} from "../features/user/UserSlice";

export default () => {

    const user  = useUser();
    
    const [historyState , setHistoryState] = useState(null);

    const historyVideos = user.history;

    const dispatch = useDispatch();
    
    const isLoading = useSelector(state => state.user.isLoading);

    useEffect(() => {

        setHistoryState(user.historyState);

    }, [user])


    const changeState = () => {
        dispatch(changeHistoryState())
    }
    
    const clearHistory = () => {
        dispatch(clearHistoryVideos())
    }



    return (
        <main className="history-page">
            <Container className="history-contnet">

                    <div className="actions">
                        
                        <div className="action action-search">
                            <SearchField/>
                        </div>

                        <div className="action">
                            <IconButton onClick={clearHistory} disabled={(isLoading || historyVideos.length == 0)}>
                                <Icon icon="trash"/>
                                <span className="action-text">Clear All Watch History</span> 
                            </IconButton>
                        </div>
                        
                        <div className="action">
                            <IconButton onClick={changeState} disabled={isLoading}>    
                                <Icon icon={historyState ? "pause" : "play"}/>
                                <span className="action-text">{historyState ? "pause" : "start"} Watch History</span> 
                            </IconButton>
                        
                        </div>
                        
                    </div>


                    <div className="history-videos">
                    {historyVideos.length > 0 && 
                        <Videos/>
                    || <h2 className="heading">No Videos in your History</h2>
                    }
                    
                    </div>

            </Container>
        </main>
        
    )
}