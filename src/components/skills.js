import React from 'react';

import Skill from './skill';

const Skills = () => {
  return (
    <section className='section bg-light' id='skills'>
      <div className='container'>
        <div className='row'>
          <div className='offset-lg-2 col-lg-8'>
            <h1 className='section-title text-center margin-t-50'>
              Skills and abilities
            </h1>
            <div className='section-title-border margin-t-20'></div>
            <p className='section-subtitle text-muted text-center padding-t-30 font-secondary'>
              Here are my skills and abilities that I have acquired over the
              past years:
            </p>
          </div>
        </div>
        <div className='row margin-t-30'>
          <Skill name='HTML/CSS' description='' icon='far fa-file-code' />
          <Skill name='Javascript' description='' icon='far fa-gem' />
          <Skill name='React' description='' icon='fab fa-react' />
          <Skill name='NodeJs' description='' icon='fab fa-node' />
          <Skill name='Redux State Manager' description='' icon='fas fa-redo' />
          <Skill name='Git' description='' icon='fas fa-code-branch' />
          <Skill name='aws s3' description='' icon='fas fa-database' />
          <Skill name='aws Dynamodb' description='' icon='fas fa-server' />
          <Skill
            name='aws CDK/Cloudformation'
            description=''
            icon='fa fa-cloud'
          />
          <Skill name='aws API Gateway' description='' icon='fas fa-globe' />
          <Skill name='aws Lambda' description='' icon='fas fa-certificate' />
          <Skill name='aws Step Functions' description='' icon='fas fa-tasks' />
        </div>
      </div>
    </section>
  );
};

export default Skills;
