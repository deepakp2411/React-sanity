import React from 'react';
import {
  BsTwitter, BsInstagram, BsGithub,
  BsLinkedin,
} from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://github.com/deepakp2411">
      <div>
        <BsGithub />
      </div>
    </a>
    <a href="https://www.linkedin.com/in/deepak-patel-a4a55b237/">
      <div>
        <BsLinkedin />
      </div>
    </a>
    <div>
      <BsTwitter />
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;
