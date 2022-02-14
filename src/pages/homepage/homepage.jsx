
import React from 'react';
import './homepage.scss'
import Diectory from '../../components/directory/directory'

const HomePage = () => {
  return (
  <>
  <div className="homepage">
      <div className="directory-menu">
          <Diectory/>
      </div>
  </div>
  </>
  )
};

export default HomePage;
