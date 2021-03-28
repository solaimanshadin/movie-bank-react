import React , { useState, useEffect } from 'react';
import BookedMovie from './BookedMovie';

const MyBookings = () => {
    const [movies, setMovies] = useState([]);
    const apiKey='870967436c1517d581daf3b245495790'
 
    const fetchBookingList = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`)
       .then(res => res.json())
       .then(data => setMovies(data.results))
    }

    useEffect(() => {
        fetchBookingList()
    }, [])
    return (
        <div className="container mt-5">
            <div className="row">
                {
                    movies.map((movie) => <BookedMovie key={movie.id} movie={movie} fetchBookingList={fetchBookingList} />)
                }
               
            </div>
        </div>

    );
};

export default MyBookings;