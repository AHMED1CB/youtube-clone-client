import Header from "./Header";
import { Button, Container, TextField } from '@mui/material'

import '../styles/auth.css';
import { Link } from "react-router-dom";

export default function Register () {

    return (
        <>
            <Header/>

            <main className="register-page">

                <Container className="auth-contnet page-container">
            
                    <form  className="authForm">

                        <div className="col">

                            <TextField placeholder={'Your Name'} id="name"/>
                            <TextField placeholder={'Username'} id="username"/>
                                                        
                        </div>

                        <div className="col">
                            <TextField type="email" placeholder={'Email'} id="email"/>
                            <TextField type="password" placeholder={'Password'} id="password"/>

                        </div>

                        <Link to="/auth/login" className="link-auth">Already Have An Account? Login </Link>


                        <Button type={'submit'} className="submit-btn" variant={'outlined'}>Register</Button>

                    </form>
                    
                </Container>
            
            </main>

        
        </>
    )

}