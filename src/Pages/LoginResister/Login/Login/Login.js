import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { myContex } from '../../../AuthContex/AuthContex';
import {useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
const Login = () => {
    const {signIn,currentUser,setLoading,setCurrentUser} = useContext(myContex);
    const [error,setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result => {
            const user = result.user;
            setError('');
            form.reset();

            if(user.emailVerified){
              setCurrentUser(user)
              navigate(from,{replace: true});
            }
            else{
              toast.error('Your Email is not Verified');
            }
        })
        .catch(error => {
            console.error(error);
            setError(error.message)
        })
        .finally(() => {
          setLoading(false)
        })
    }
    return (
        <Form onSubmit={handleSignIn}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword"> 
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
       Login
      </Button>
      <Form.Text className='text-danger'>
        {error}
      </Form.Text>
    </Form>
    );
};

export default Login;