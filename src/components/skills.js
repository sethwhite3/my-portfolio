import React from 'react';

import Skill from './skill';

const Skills = () => {

    return (
        <section className="section bg-light" id="skills">
        <div className="container">
          <div className="row">
            <div className="offset-lg-2 col-lg-8">
              <h1 className="section-title text-center margin-t-50">Skills and abilities</h1>
                <div className="section-title-border margin-t-20"></div>
                <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">
                  Here are my skills and abilities that I have acquired over the past years:
                </p>
            </div>
          </div>
          <div className="row margin-t-30">
            <Skill 
                name="HTML/CSS"
                description="Essential to build website. CSS knowledges allow me to understand UI libraries easily and edit their components."
                icon="far fa-file-code"
            />
            <Skill 
                name="Javascript"
                description="Javascript is my main programming language. I spend time every day to improve my current knowledges on it."
                icon="far fa-gem"
            />
            <Skill 
                name="React"
                description="With React library I am now able to build and connect components faster. It is also easier to architect files when you build a project, and make everything work properly."
                icon="fab fa-react"
            />
            <Skill 
                name="Responsive design and UI libraries"
                description="I like building componennts, but I prefer to use one of my favorite UI libraries when I can. Bootstrap or Material UI. They give me access to a large range of components and everything is responsive."
                icon="fas fa-expand-arrows-alt"
            />
            <Skill 
                name="Redux State Manager (Learning)"
                description="Redux has been a tool in a recent project to manage state when building my application. I'm wanting to develop my knowledge further with Redux"
                icon="fas fa-redo"
            />
            <Skill 
                name="Git/GitHub"
                description="I use it on my personal and school projects. Pushing, pulling, merging and creating new branches to develop new features for instance."
                icon="fas fa-code-branch"
            />
            <Skill 
                name="React Native (Learning)"
                description="I've joined a 40+ hour Udemy class to learn my React knowledge to develop mobile apps with React Native."
                icon="fab fa-react"
            />
            <Skill 
                name="Java (School Based)"
                description="I've had two levels of Java coursework with UC. Currently in an Enterprise App Dev. course utilizing Java spring/spring boot."
                icon="fab fa-java"
            />
            <Skill 
                name="Firebase"
                description="Most of my personal projects utilize firebase hosting, storage and authentication."
                icon="fas fa-database"
            />
          </div>
        </div>
      </section>
    )
}

export default Skills