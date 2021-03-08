import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link , useHistory } from "react-router-dom";

const SingleMovie = (props) => {
    const {id, title, poster_path} = props.movie;
    const history = useHistory();
    
    
    return (
        <div className="col-md-3 my-3">
        <Card>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280/${poster_path}`} />
            <Card.Body>
                <div className="text-center">
                    <Card.Title>{title}</Card.Title>
                    {/* <Button as={Link}  to={`/movie/${id}`} variant="primary">View Details</Button> */}
                    <Button onClick={ () => history.push(`/movie/${id}`)} variant="primary">View Details</Button>
                </div>
            </Card.Body>
        </Card>
        </div>
    );
};

export default SingleMovie;