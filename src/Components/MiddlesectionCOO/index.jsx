import React from 'react';
import "./style.css";
const index = () => {
  return (
    <div className="wrapper">
      <div className="textSection">
        <h1>Text Section</h1>
        <h1>COO</h1>
        <p className='MiddleSection-p'>
          Lorem ipsum dolor sit amet consectetur. Maecenas tempor adipiscing
          mollis blandit. Lacus aenean volutpat massa posuere sed dolor sed
          ultrices nullam. Adipiscing sed consectetur ac nibh vitae habitant
          enim. Amet in amet ut sed aliquam tortor consequat sapien feugiat.
        </p>
      </div>
      <div className="imageSection">
        <div className='circle'>
        <img src="/photo.svg" alt="Description" />
        </div>
      </div>
    </div>
  );
};

export default index;
