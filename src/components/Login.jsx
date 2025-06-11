import Header from "./Header";
import { Button, Container, TextField } from '@mui/material'

import '../styles/auth.css';

import { Link , useNavigate} from "react-router-dom";

import { useState , useEffect} from 'react'

import {useDispatch , useSelector } from 'react-redux'

import { loginUser } from "../features/auth/AuthServices";

import { ValidateForm } from "../app/Validate";

import { resetStatus } from "../features/auth/AuthSlice";

export default function Login () {

    const go = useNavigate();

    const [error , setError] = useState('');

    let initial = {
        email : '',
        password: ''
    };


    const [details , setDetails] = useState(initial);
    
    const loading = useSelector(state => state.auth.isLoading);
    const errors = useSelector(state => state.auth.errors);
    const status = useSelector(state => state.auth.status);

    const dispatch  = useDispatch();



    


    const handleLoginUser = (event) => {
        event.preventDefault();

        if (ValidateForm(setError , details) && !loading){
            
            dispatch(loginUser(details)) // Login User

        }


    }



    useEffect(() => {

        if (errors){
              setError(() => Object.values(errors));
        }else{
            if(status === 200){
                dispatch(resetStatus());
                go('/')
            }
        }

    }, [status,errors])




    return (
        <>
            <Header/>

            <main className="register-page">

                <Container className="auth-contnet page-container">
            
                    <form  className="authForm" onSubmit={handleLoginUser} >

                    {error && error.length  > 0  && 
                            <span className="error">{error}</span>
                     }   

                        <div className="col">
                            <TextField type="email" placeholder={'Email'} id="email" value={details.email} 
                            onChange={(event) => setDetails({...details , email: event.target.value})}/>
                            <TextField type="password" placeholder={'Password'} id="password"
                            value={details.password} 
                            onChange={(event) => setDetails({...details , password: event.target.value})}/>
                        </div>

                        <Link to="/auth/register" className="link-auth">Dont Have An Account? Register </Link>


                        <Button type={'submit'} disabled={loading} className="submit-btn" variant={'outlined'}>{loading && 'Loading ...' || "Login"}</Button>

                    </form>
                    
                </Container>
            
            </main>

        
        </>
    )

}