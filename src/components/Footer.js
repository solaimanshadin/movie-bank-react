import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container className="text-center">
            &copy; All right reserved {new Date().getYear()}
        </Container>
    );
};

export default Footer;