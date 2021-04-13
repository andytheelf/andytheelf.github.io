import React, { Component } from 'react';
import coverImage from '../../assets/profile-picture/profilepic.png';

class About extends Component {
    render() {
        return (
            <section className="section-title container">
                <h1>Andrea Ballew</h1>
                <hr></hr>
                <div className="row justify-content-center">
                    <div className="col-10 section-content">
                        <img className="mt-3 mb-5 me" src={coverImage} alt="Melissa D"/>
                        <p>
                        I currently live in Austin Texas, and am continuing to learn and grow my knowledge of web development. 
                        </p>
                    </div>  
            </div>
        </section> 
    )}
}
export default About;

