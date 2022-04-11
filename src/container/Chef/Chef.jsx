import React from 'react';

import {SubHeading} from "../../components"
import {images} from '../../constants'
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper-img">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper-info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">
        What we believe in
      </h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vitae corporis odio aspernatur reiciendis explicabo officiis illum, ullam itaque rerum. Adipisci voluptas provident totam? Impedit!
          </p>
        </div>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">
          Chef & Founder
        </p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
