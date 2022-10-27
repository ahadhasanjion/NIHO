import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const naviGate = useNavigate();
    const {providerLogIn, signIn} = useContext(AuthContext);
    const [error, setError]  =useState('');
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
         event.preventDefault();
         const form = event.target;
         const email = form.email.value;
         const password = form.password.value;
         signIn(email, password)
         .then(result => {
            const user = result.user;
            setError('')
            form.reset();
            naviGate(from, {replace: true});
         })
         .catch(error => {
            console.error(error);
            setError(error.message)
         });
    }

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogIn(googleProvider)
        .then(result => {
            const user = result.user;
        })
        .catch(error => console.error(error))
    }
    const githubProvider = new GithubAuthProvider();
    const handleGithubSignIn  = () => {
        providerLogIn(githubProvider)
        .then(result => {
            const user = result.user;
        })
        .catch(error => console.error(error))
    }

    return (
        <div className='mb-20 login-form bg-teal-600'>
            <h2 className="text-2xl text-fuchsia-50 font-bold">Login in to your account</h2>
            <p className="text-fuchsia-50 font-normal text-sm">Don't have account?
            <Link to='/register'><span>sign up here</span></Link></p>
            <form onSubmit={handleSubmit} className="mt-5">
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" placeholder="enter your email" required/>
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" placeholder="enter your password" required/>
                </div>
                <span>or</span>
                <div className='flex justify-center align-center mt-4'>
                    <button onClick={handleGoogleSignIn} style={{fontSize:"30px"}} className='mx-2 text-fuchsia-50'><FaGoogle></FaGoogle></button>
                    <button  onClick={handleGithubSignIn} style={{fontSize:"30px"}} className='mx-2 text-fuchsia-50'><FaGithub></FaGithub></button>
                </div>
                <input className="btn-submit" type="submit" value="Login"/>
                <p className='text-danger'>{error}</p>
            </form>
        </div>
    );
};

export default Login;