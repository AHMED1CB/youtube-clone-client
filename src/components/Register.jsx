import Header from "./Header";
import { Button, Container, TextField } from '@mui/material'

import '../styles/auth.css';
import { Link  , useNavigate} from "react-router-dom";
import { useState , useEffect } from "react";

import {useDispatch , useSelector } from 'react-redux'

import { registerUser } from "../features/auth/AuthServices";
import { resetStatus } from "../features/auth/AuthSlice";
import { ValidateForm } from "../app/Validate";

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
    const errors = useSelector(state => state.auth.errors);
    const status = useSelector(state => state.auth.status);


    
    const dispatch = useDispatch();

    const handleRegisterUser =  async (event) => {

        event.preventDefault();


        if (ValidateForm(setError , details) && !loading){

            dispatch(registerUser(details)).unwrap() // Register User



        }

    }

    useEffect(() => {
        if (errors){
            setError(Object.values(errors)[0]);
        }else{
            
            if (status === 200){
                dispatch(resetStatus());
                go('/auth/login')
            }
        }

    }, [errors , status])







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