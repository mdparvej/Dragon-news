import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
const NewsSummaryCard = ({ news }) => {
  const { author, _id, title, total_view, details, image_url, rating } = news;
  return (
    <Card className="mb-5">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <Image
            src={author.img}
            className="me-2"
            style={{ height: "60px" }}
            roundedCircle
          ></Image>
          <div>
            <p>{author.name}</p>
            <p>{author.published_date}</p>
          </div>
        </div>
        <div>
          <FaRegBookmark></FaRegBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length > 250 ? (
            <>
              {details.slice(0, 250) + "..."}{" "}
              <Link to={`/news/${_id}`}>Read more</Link>
            </>
          ) : (
            <>{details}</>
          )}
        </Card.Text>
        <Card.Footer className="d-flex justify-content-between align-items-center">
          <div>
            <FaStar className="text-warning me-2"></FaStar>
            <span> {rating?.number}</span>
          </div>
          <div>
            <FaEye className="me-2"></FaEye>
            <span>{total_view}</span>
          </div>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default NewsSummaryCard;
