import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Register = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const [error, setError] = useState('')
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            setError('')
            form.reset();
            handleupdateProfile(name, photoURL)
            .then(()=>{})
            .catch(error => console.error(error))
        })
        .catch(error => {
            console.error(error);
            setError(error.message)
        })
    }
    const handleupdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
    }
    return (
        <div className='mb-20 login-form bg-teal-600'>
            <h2 className="text-2xl text-fuchsia-50 font-bold">Registration</h2>
            <p className="text-fuchsia-50 font-normal text-sm">have account?<Link to='/login'><span>login</span></Link></p>
            <form onSubmit={handleSubmit} className="mt-5">
                <div className='form-control'>
                    <label htmlFor='name'>username</label>
                    <input type="text" name="name" placeholder="enter username"/>
                </div>
                <div className='form-control'>
                    <label htmlFor='name'>PhotoURL</label>
                    <input type="text" name="photoURL" placeholder="enter username"/>
                </div>
                <div className='form-control'>
                    <label htmlFor='photoURL'>Email</label>
                    <input type="text" name="email" placeholder="photoURL" required/>
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" placeholder="enter your password" required/>
                </div>
                <button>Register</button>
                <p className='text-danger'>{error}</p>
            </form>
        </div>
    );
};

export default Register;