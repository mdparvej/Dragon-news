import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { myContex } from '../../AuthContex/AuthContex';
const Profile = () => {
    const {currentUser} = useContext(myContex);
    const [name, setName] = useState(currentUser.displayName);
    const photoURLRef = useRef(currentUser.photoURL);
    const handleSubmit = event =>{
        event.preventDefault();
        console.log(photoURLRef.current.value);
        const form = event.target;
  
    }

    const handlechange = event =>{
        setName(event.target.value);
    }

    console.log(currentUser.mail,"this is profile")
    return (
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control defaultValue={currentUser?.email} type="email" placeholder="Enter email" readOnly/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control defaultValue={name} onChange={handlechange} type="text" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Photo Url</Form.Label>
        <Form.Control ref={photoURLRef} defaultValue={currentUser?.photoURL} type="text" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <a href="http://">PARVEJ</a>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    );
};

export default Profile;