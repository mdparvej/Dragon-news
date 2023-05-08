import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const News = () => {
    const news = useLoaderData();
    const {image_url,details, category_id} = news[0];
    
    return (
        <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{news[0].title  }</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="primary">All News in this Category</Button>
        </Link>
        
      </Card.Body>
    </Card>
    );
};

export default News;