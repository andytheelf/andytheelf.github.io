import React, { Component } from 'react';
// import html from '../../assets/skills/html.png';
// import bootstrap from '../../assets/skills/bootstrap.png';
// import css from '../../assets/skills/css.png';
// import github from '../../assets/skills/github.png';
// import handlebars from '../../assets/skills/handlebars.png';
// import javascript from '../../assets/skills/javascript.png';
// import mern from '../../assets/skills/mern.png';
// import mongodb from '../../assets/skills/mongodb.png';
// import mysql from '../../assets/skills/mysql.png';
// import node from '../../assets/skills/nodejs.png';
// import react from '../../assets/skills/react.png';
import certificate from '../../assets/certificate.png';
import resume from '../../assets/resume.png';

import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Resume extends Component {
    render() {
        return(
            <section className="section-title container">
                <h1>My Resume</h1>
                <hr></hr>
                <div className="justify-content-center mt-5" id="resume">
                    <h2 className="font-weight-bold mb-4">Download my resume</h2>
                    <div>
                    <a href="https://github.com/andytheelf/react-portfolio/raw/master/src/assets/AndreaRESUME.pdf" className="text-light text-decoration-none"><FontAwesomeIcon icon={faDownload} size="2x" alt="Download Resume"/></a>
                    </div>
                </div>

                <br />

                <div className="row">
                    <div className="col">
                        <img src={resume} style={{ width: "70%" }} alt="resume" />
                    </div>
                </div>

                <br />

                <div className="row">
                    <div className="col">
                        <img src={certificate} style={{ width: "70%" }} alt="cert" />
                    </div>
                </div>

                <br />

                {/* <div className="justify-content-center m-5">

                    <h2 className="font-weight-bold">Technical Skills</h2>
                    <br />
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col-sm text-center">
                                    <img src={html} style={{ width: "10%" }} alt="html" />
                                    <img src={bootstrap} style={{ width: "10%" }} alt="bootstrap" />
                                    <img src={css} style={{ width: "10%" }} alt="css" />
                                    <img src={github} style={{ width: "10%" }} alt="github" />
                                    <img src={handlebars} style={{ width: "10%" }} alt="handlebars" />
                                    <img src={javascript} style={{ width: "10%" }} alt="javascript" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <br />

                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col-sm text-center">
                                    <img src={mern} style={{ width: "10%" }} alt="mern" />
                                    <img src={mongodb} style={{ width: "10%" }} alt="mongodb" />
                                    <img src={mysql} style={{ width: "10%" }} alt="mysql" />
                                    <img src={node} style={{ width: "10%" }} alt="node" />
                                    <img src={react} style={{ width: "10%" }} alt="react" />
                                </div>
                            </div> 
                        </div>
                    </div>
                </div> */}
            </section>
        )
    }
}

export default Resume;
