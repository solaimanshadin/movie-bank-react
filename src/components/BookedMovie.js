import React from 'react';
import { Card, Button } from 'react-bootstrap';

const SingleMovie = (props) => {
    const {_id, movieName, moviePoster} = props.movie;

    const cancelBooking = (bookingId) => {

       fetch(`http://localhost:8080/booking/${bookingId}`, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => props.fetchBookingList())

    }

    return (
        <div className="col-md-3 my-3">
        <Card>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280/${moviePoster}`} />
            <Card.Body>
                <div className="text-center">
                    <Card.Title>{movieName}</Card.Title>
                    {/* <Button as={Link}  to={`/movie/${id}`} variant="primary">View Details</Button> */}
                    <Button onClick={ () => cancelBooking(_id)} variant="light">Cancel</Button>
                </div>
            </Card.Body>
        </Card>
        </div>
    );
};

export default SingleMovie;