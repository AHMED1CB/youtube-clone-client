import Header from "./Header";
import { Button, Container, TextField } from '@mui/material'

import '../styles/auth.css';

import { Link , useNavigate} from "react-router-dom";
import { useState } from 'react'

import {useDispatch , useSelector } from 'react-redux'

import { loginUser } from "../features/auth/AuthServices";

export default function Login () {

    const go = useNavigate();

    const [error , setError] = useState('');

    let initial = {
        email : '',
        password: ''
    };


    const [details , setDetails] = useState(initial);
    
    const loading = useSelector(state => state.auth.isLoading);

    const dispatch  = useDispatch();



    
    const validateForm = () => {
        let valid = true;

        if (!details.email.trim()) {
            setError('Email Is Required');
            valid = false;
             return valid;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email)) {
            setError('Invalid Email');
            valid = false;
            return valid;
         }

        if (!details.password) {
            setError('Password is Required');
            valid = false;
            return valid;
        } else if (details.password.length < 8) {
                setError('Password Must Be At Least 8 letters');
                valid = false;
            return valid;

        } else if (!/(?=.*[A-Za-z])(?=.*\d)/.test(details.password)) {
                setError('Password Must Contain letters And Numbers');
                valid = false;
            return valid;
        }

    return true


        
    };




    const handleLoginUser = async (event) => {
        event.preventDefault();

        if (validateForm() && !loading){
            
            const attemp =  await dispatch(loginUser(details)) // Login User
            
            
            if (attemp.payload.error){
                setError(() => Object.values(attemp.payload.errors));

            }else{
                go('/')
            } 
            

        }



    }




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