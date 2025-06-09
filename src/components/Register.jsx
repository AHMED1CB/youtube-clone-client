import Header from "./Header";
import { Button, Container, TextField } from '@mui/material'

import '../styles/auth.css';
import { Link  , useNavigate} from "react-router-dom";
import { useState } from "react";

import {useDispatch , useSelector } from 'react-redux'

import { registerUser } from "../features/auth/AuthSlice";

export default function Register () {

    let initial = {
        name:'',
        username:'',
        email : '',
        password: ''
    };

    const go = useNavigate();

    const [error , setError] = useState('');

    const [details , setDetails] = useState(initial);



    const loading = useSelector(state => state.auth.isLoading);


    
    const dispatch = useDispatch();
    
    const validateForm = () => {
        let valid = true;

        if (!details.name.trim()) {
            setError('Name Is Required');
            valid = false;
            return valid;
    } else if (details.name.length < 3) {
            setError('Name Must be At Least 3 letters');
            valid = false;
            return valid;
    }

        if (!details.username.trim()) {
            setError('Username Is Required');
            valid = false;
            return valid;
    } else if (details.username.length < 3) {
            setError('Username Must be At Least 3 letters');
            valid = false;
             return valid;
    }

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




    const handleRegisterUser =  async (event) => {

        event.preventDefault();


        if (validateForm() && !loading){

            const attemp =  await dispatch(registerUser(details)) // Register User
            
            if (attemp.payload.error){
     
                setError(() => Object.values(attemp.payload.errors)[0]);

                return;
            } 
            
            if (attemp.payload.statusCode == 201){
                go('/auth/login')
            }

        }




    }






    return (
        <>
            <Header/>

            <main className="register-page">

                <Container className="auth-contnet page-container">
            
                    <form  className="authForm" onSubmit={handleRegisterUser}>

                {error && error.length  > 0  && 
                            <span className="error">{error}</span>
                }


                        <div className="col">
                            
                            <TextField placeholder={'Your Name'} id="name" value={details.name} onChange={() => setDetails({...details , name: event.target.value}) } />

                            <TextField placeholder={'Username'} id="username" value={details.username} onChange={() => setDetails({...details , username: event.target.value}) } />
                                                        
                        </div>

                        <div className="col">
                            <TextField type="email" placeholder={'Email'} id="email"
                            
                                value={details.email} onChange={() => setDetails({...details , email: event.target.value}) }
                            
                            />
                            <TextField type="password" placeholder={'Password'} id="password"
                                value={details.password} onChange={() => setDetails({...details , password: event.target.value}) }
                            />

                        </div>

                        <Link to="/auth/login" className="link-auth">Already Have An Account? Login </Link>


                        <Button disabled={loading} type={'submit'} className="submit-btn" variant={'outlined'}>{loading && 'Loading ...' || 'Register'}</Button>

                    </form>
                    
                </Container>
            
            </main>

        
        </>
    )

}