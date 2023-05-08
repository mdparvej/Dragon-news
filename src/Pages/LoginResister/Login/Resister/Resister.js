import React, { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { myContex } from "../../../AuthContex/AuthContex";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
const Resister = () => {
    const {createUser,updateUserProfile,verifyEmail,signIn} = useContext(myContex);
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl= form.photoURL.value;
        const email= form.email.value;
        const password = form.password.value;
        console.log(name,photoUrl,email,password);
        createUser(email,password)
        .then(result => {
            console.log(result)
            setError('');
            handleUpdateUserProfile(name,photoUrl);
            handleEmailVerification();
            toast.success('Please verify your email address before login'); 
            signIn(email,password);
        })
        .catch(error => {
            setError(error.message)
        })

    }
    const handleUpdateUserProfile = (name,photoURL) => {
        const profile = {
            displayName: name,
            photoURL : photoURL
        }
        updateUserProfile(profile)
        .then(() => {})
        .catch(error => console.error(error))
    }
    const handleAccepted = (event) => {
        setAccepted(event.target.checked);
    }
    const handleEmailVerification = () => {
        verifyEmail()
    }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Your Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo Url</Form.Label>
        <Form.Control type="text" name="photoURL" placeholder="Photo URL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label={<>Accept <Link to="/terms">Terms and conditions</Link></>} onClick={handleAccepted}/>
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accepted}>
        Register
      </Button>
      <Form.Text className="text-danger">
        {error}
      </Form.Text>
    </Form>
  );
};

export default Resister;
