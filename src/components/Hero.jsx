import React from 'react';
import heroImage from "../assets/images/hero-image.jpg";

const Hero = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <div style={{
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                padding: '2rem',
                borderRadius: '8px',
                color: 'white',
                textAlign: 'center'
            }}>
                <h4
                    style={{
                        fontSize: '3rem',
                        marginBottom: '1rem'
                    }}>Car buying
                </h4>
                <h4
                    className='type'
                    style={{
                        fontSize: '3rem',
                        marginBottom: '1rem'
                    }}>shaped to your life
                </h4>
            </div>
        </div>
    );
};

export default Hero;