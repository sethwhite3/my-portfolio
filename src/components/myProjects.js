import React from 'react';

import Project from './project';

import CRWNImage from '../static/images/crwn.png'
import TBGImage from '../static/images/tbg.png'
import RKGImage from '../static/images/rolo.png'

const MyProjects = () => {

    return (
        <section className="section" id="projects">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-8 offset-lg-2">
                    <div className="about-title mx-auto text-center">
                        <h2 className="font-weight-light">My projects</h2>
                        <div className="section-title-border margin-t-20"></div>
                        <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">
                            Here are my skills and abilities that I have acquired over the past years:
                        </p>
                    </div>
                    </div>
                </div>
                <div className="row margin-t-20">
                    <Project 
                        projectName="CRWN Clothing"
                        description="Online clothing Store, authentication + Payment included. Website created to develop React skills."
                        toolsUsed="React/redux/firebase"
                        status="Test Site"
                        imgSrc={CRWNImage}
                        website="https://crwn-db-ffc80.web.app"
                        github="https://github.com/sethwhite3/crwn-clothing"
                    />
                    <Project 
                        projectName="The Bearded Guys"
                        description="Website developed for my brothers remodeling company. Admin portal created to save recent projects."
                        toolsUsed="React/redux/firebase"
                        status="Live Site"
                        imgSrc={TBGImage}
                        website="https://www.thebeardedguys.com"
                        github="https://github.com/sethwhite3/bearded-guys"
                    />
                    <Project 
                        projectName="RKG Consulting"
                        description="Designed & Developed Web page, hosted on firebase and managed godaddy domain & dns setup."
                        toolsUsed="Html/css/js/bootstrap/firebase/slider"
                        status="Live"
                        imgSrc={RKGImage}
                        website="https://sethwhite3.github.io/rkg/public/index.html"
                        github="github.com"
                    />
                </div>
            </div>
        </section>
    )
}

export default MyProjects
