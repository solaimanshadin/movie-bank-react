import React , { useState, useEffect } from 'react';
import { useAuth } from '../customHooks/useAuth';
import BookedMovie from './BookedMovie';

const MyBookings = () => {
    const { user } = useAuth() || {};
    console.log("user", user);
    const [movies, setMovies] = useState([]);
 
    const fetchBookingList = () => {
        if(!user?.email) {
            return
        }
        
        fetch(`http://localhost:8080/bookings?bookedBy=${user?.email}`)
       .then(res => res.json())
       .then(data => setMovies(data.data))
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