import React from 'react';
import "antd/dist/antd.css";
import SiteLayout from '../../components/SiteLayout';
import NavMenu from '../../components/NavMenu';
import OverviewContent from './OverviewContent';

const Overview:React.FC = () => {
  return (
    <SiteLayout Header={<NavMenu/>} Content={<OverviewContent/>}/>
  );
}

export default Overview;