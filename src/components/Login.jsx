import Header from "./Header";
import { Button, Container, TextField } from '@mui/material'

import '../styles/auth.css';

import { Link } from "react-router-dom";

export default function Login () {

    return (
        <>
            <Header/>

            <main className="register-page">

                <Container className="auth-contnet page-container">
            
                    <form  className="authForm">

                        <div className="col">
                            <TextField type="email" placeholder={'Email'} id="email"/>
                            <TextField type="password" placeholder={'Password'} id="password"/>
                        </div>

                        <Link to="/auth/register" className="link-auth">Dont Have An Account? Register </Link>


                        <Button type={'submit'} className="submit-btn" variant={'outlined'}>Login</Button>

                    </form>
                    
                </Container>
            
            </main>

        
        </>
    )

}