import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LeftSide from '../Shared/LeftSide/LeftSide';

const Courses = () => {
    const courses = useLoaderData();
    const {title, image_url, details, category_id} = courses;
    return (
        <div>
            <div>
                <LeftSide></LeftSide>
            </div>
            <div>
            <Card style={{ width: '40' }}>
    <Card.Img variant="top" src={image_url} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {details}
      </Card.Text>
      <Link to={`/category/${category_id}`}>
           <Button variant="primary">Go somewhere</Button>
      </Link>
    </Card.Body>
  </Card>
            </div>
        </div>
  );
};

export default Courses;