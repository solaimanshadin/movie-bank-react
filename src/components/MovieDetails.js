import React, { useEffect, useState } from 'react';
import { Form,  Button,  } from 'react-bootstrap';

import { useParams } from "react-router-dom";
import { useAuth } from '../customHooks/useAuth';

const MovieDetails = () => {
    const { id } = useParams();
    const { user } = useAuth() || {};


    const [movie, setMovie] = useState({});
    const [formData, setFormData] = useState({bookingDate: '', seatCount: ''});
    const apiKey = '870967436c1517d581daf3b245495790'

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
            .then(res => res.json())
            .then(data => setMovie(data))
    }, [])

    const handleBooking = (movie) => {
        const bookingData = {
            bookBy: user?.email,
            movieName: movie.title,
            moviePoster: movie.poster_path,
            bookingDate: formData.bookingDate,
            seatCount: formData.seatCount,
        };

        fetch(`api_url`, {
            method: 'post',
            body: JSON.stringify(bookingData),
            headers: {
                'Content-Type': 'application/json'
            },
          
        })
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} alt="" />
                </div>
                <div className="col-md-6">
                    <h3>{movie.title}</h3>
                    <p>Release Date {movie.release_date}</p>
                    <p>{movie.overview}</p>
                    <Form className="w-50 my-5">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Booking Date</Form.Label>
                            <Form.Control onChange={(e) => setFormData({...formData, bookingDate: e.target.value})} type="date" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Seat Count</Form.Label>
                            <Form.Control onChange={(e) => setFormData({...formData, seatCount: e.target.value})} type="number" placeholder="Seat Count" />
                        </Form.Group>
                        <Button onClick={() => handleBooking(movie)} variant="primary" type="button">
                            Book
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;