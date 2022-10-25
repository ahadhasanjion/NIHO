import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const LanguageSummary = ({courses}) => {
    const {title, details, image_url, _id} = courses;
    return(
        <div className='grid grid-cols-3 gap-5'>
            <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {
            details?
            <p>{details.slice(0, 250) +'...'}<Link to={`/courses/${_id}`}>Read More</Link></p>
            :
            <p>{details}</p>
          }
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
  );
};

export default LanguageSummary;