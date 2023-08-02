import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';
import {AiFillLinkedin, AiOutlineGithub} from 'react-icons/ai'

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href="https://www.linkedin.com/in/sukritsethi18/" target='blank'>
      <AiFillLinkedin/></a>
    </div>
    <div>
      <a href="https://leetcode.com/SukritSethi/" target='blank'>
      <SiLeetcode/></a>
    </div>
    <div>
    <a href="https://github.com/SukritSethi" target='blank' >
      <AiOutlineGithub/></a>
    </div>
  </div>
);

export default SocialMedia;
