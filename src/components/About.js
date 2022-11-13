import React from 'react';

function About() {
    return (
        <div>
            <h1>Christian / Uncle / Entrepreneur / Student</h1>
            <img src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Daniel Being Cool :)"/>
            <h3>
                My name is Daniel Perez Garnica. I'm a young Christian and recent graduate from Columbia State Community College. Currently Studying at Vanderbilt's Coding Bootcamp and ready to use what I've learned to serve the Lord the best I can!!
            </h3>
            <h5>
                Experienced business manager, salesman, and Entrepreneur. Currently working on begining a non-profit to spread the gospel virtually, create, and grow communities for the better!!
            </h5>

        </div>
    );
    
}

export default About;