import React from 'react';
import Common from './Common';
import web from "../src/images/img2.svg";

const Home = () => {
  return (
    <>
      <Common
        name = "Grow your business with"
        visit = '/service'
        btname = 'Get Started'
        imgsrc = {web}
      />
    </>
  )
}

export default Home;