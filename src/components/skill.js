import React from 'react';

const Skill = (props) => {

    return (
        <div className="margin-t-20 col-lg-4">
            <div className="services-box">
            <div className="media">
                <i className={props.icon}></i>
                <div className="media-body ml-4">
                    <h4>{props.name}</h4>
                    <p className="pt-2 text-muted">
                        {props.description}
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Skill;