import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle, FaGithub, FaFacebook,FaTwitter,FaWhatsapp,FaTwitch} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarosel from "../BrandCarosel/BrandCarosel";
import { myContex } from "../../AuthContex/AuthContex";

const RightSideNav = () => {
  const {signWithGoogle,signWithGithub,setCurrentUser} = useContext(myContex);
  const google = () => {
    signWithGoogle()
    .then(result => {
      const user = result.user;
      setCurrentUser(user);
    })
    .catch(error => console.error(error))
  }
  const github = () => {
      signWithGithub()
      .then(result => {
        const user = result.user;
        console.log(user);
        setCurrentUser(user)
      })
      .catch(error => console.error(error));
  }
  return (
    <div>
      <h2>Right side Nav</h2>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-success" onClick={google}>
          <FaGoogle></FaGoogle> Login With Google
        </Button>
        <Button variant="outline-primary" onClick={github}>
          <FaGithub></FaGithub> Login With Githut
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h3>Find us</h3>
        <ListGroup>
          <ListGroup.Item className="mb-2"><FaFacebook/> Facebook</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaWhatsapp/> WhatsApp</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaTwitter/> Twitter</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaTwitch/> Twitch</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarosel></BrandCarosel>
      </div>
    </div>
  );
};

export default RightSideNav;
