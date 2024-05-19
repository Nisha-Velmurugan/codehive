import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import './Home.css';

function Home() {
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/login');
    };

    return (
        <div>
            <section className="sec1">
                <div className="homecontent">
                    <h1>Innovate. Collaborate. Elevate</h1>
                    <h2>Join the Tech Revolution!</h2>
                    <p>
                        <b>Welcome to CodeHive</b>
                        <br />
                        Your all-in-one destination for tech enthusiasts and learners!
                        <br /> Dive into a vibrant community where knowledge meets
                        collaboration,
                        <br /> and where every question finds an answer. <br /> Join us
                        today and embark on a journey of <br />continuous learning and
                        innovation.
                        <br /> Together, let's shape the future of technology!
                    </p>
                    <div className="button-container">
                        <p><button className="bn47" onClick={handleSignInClick}>Sign in</button></p>
                    </div>
                </div>
            </section>
            <div className='about-header'>
                    <h1>About</h1>
            </div>
            <section className="about">
                <div className="aboutsection">
                    <div className="box">
                        <h2>Join Domain-Specific Chat Rooms</h2>
                        <p>Connect with experts and enthusiasts in your field instantly.</p>
                    </div>
                    <div className="box">
                        <h2>Share Knowledge, Gain Insights</h2>
                        <p>Exchange ideas, get feedback, and discover new perspectives.</p>
                    </div>
                    <div className="box">
                        <h2>Invite, Collaborate, Learn Together</h2>
                        <p>Easily invite others, collaborate on projects, and share resources for collective growth.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
