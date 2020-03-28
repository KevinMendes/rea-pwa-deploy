import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bulma-components/dist';
import PropTypes from 'prop-types';

const Home = ({ setCategory }) => {
  const handleCategory = (evt) => {
    // evt.preventDefault();
    setCategory(evt.currentTarget.value);
  };
  return (
    <div className="home">
      <div className="start">
        Débuter la réanimation
        <div>
          <Link to="/start">
            <Button color="primary" value="new-born" onClick={handleCategory}>
              <span className="new-born">Nouveau-né</span>
            </Button>
            <Button color="primary" value="child" onClick={handleCategory}>
              <span className="child">Enfant</span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="protocole">
        Utiliser les protocoles
      </div>
    </div>
  );
};

Home.propTypes = {
  setCategory: PropTypes.func.isRequired,
};

export default Home;
