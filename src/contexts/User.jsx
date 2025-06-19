import { createContext, useContext, useEffect } from "react";
import { useSelector , useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom'
import Loading from "../components/Loading";
import { loadUser } from "../features/user/UserSlice";

export const UserContext = createContext();


export const UserProvider = ({children}) => {

    const go = useNavigate();
    const dispatch = useDispatch(); 
    const user = useSelector(state => state.user.user);
    const status = useSelector(state => state.user.status);
    
    useEffect(() => {
        if (!user){

            let token = localStorage.token;

            if (token){
        
                // Get User Data
        
                dispatch(loadUser(token));
        
            }else{
                go('/auth/login')
            }
        
        }
    }  , [user])
    

    useEffect(() => {
        if (status == 500){
            go('/auth/login')
        }
    }, [status])


    return user &&  <UserContext.Provider value={user}>
            {children}
    </UserContext.Provider> || <Loading/>
}


export const useUser = () => {
    return useContext(UserContext);
} 