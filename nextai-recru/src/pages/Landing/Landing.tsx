import React from 'react';
import "antd/dist/antd.css";
import SiteLayout from '../../components/SiteLayout';
import NavMenu from '../../components/NavMenu';
import LandingContent from './LandingContent';

const Landing:React.FC = () => {
  return (
    <SiteLayout Header={<NavMenu/>} Content={<LandingContent/>}/>
  );
}

export default Landing;