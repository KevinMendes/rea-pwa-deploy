import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bulma-components/dist';
import PropTypes from 'prop-types';

const Start = () => {
  const now = new Date();

  return (
    <div className="start">
      <p> Heure du début de la réanimation </p>
      <p>
        {now.getHours()}
        :
        {now.getMinutes()}
        :
        {now.getSeconds()}
      </p>
    </div>
  );
};

Start.propTypes = {
//   setCategory: PropTypes.func.isRequired,
};

export default Start;
