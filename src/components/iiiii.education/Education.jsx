import React from 'react';
import { educationData } from './myEducation'; 

const Education = () => {
  return (
    <div className="timeline" id="education">
      <h1 className="heading">education and experience</h1>
      {educationData.map((item, index) => ( 
        <div className="education-card" key={index}>
          <div className="card-body">
            <h1 className="card-title">{item.title}</h1>
            <p className="card-detail">{item.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Education;
