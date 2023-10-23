import React from 'react';

const Project = props => {
  return (
    <div className='col-lg-4 col-sm-6'>
      <div className='project-box text-center'>
        <div className='project-wrapper'>
          <div className='container-member'>
            <img
              alt='projectImage'
              src={props.imgSrc}
              className='img-fluid rounded'
              id='image-project-image'
            />
          </div>
        </div>
        <h4 className='project-name'>{props.projectName}</h4>
        <p className='text-uppercase project-designation'>
          {props.description}
          <br />
          <strong>{props.toolsUsed}</strong>
          <br />
          <strong style={{ color: 'green' }}>{props.status}</strong>
        </p>
      </div>
      <div className='buttonContainer'>
        <a
          className='project-description-text'
          title='view website'
          href={props.website}
          target='_blank'
          rel='noopener noreferrer'
        >
          View Website
        </a>
        {props.github && (
          <a
            className='project-description-text github-text'
            title='view github'
            href={props.github}
            target='_blank'
            rel='noopener noreferrer'
          >
            View Github
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
