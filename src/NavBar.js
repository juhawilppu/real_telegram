import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <Tabs>
    <Tab
      icon={<FontIcon className="material-icons">POSTS</FontIcon>}
      label="POSTS"
      containerElement={<Link to="/"/>}
    />
    <Tab
      icon={<FontIcon className="material-icons">TESTS</FontIcon>}
      label="TEST"
      containerElement={<Link to="/test"/>}
    />
    <Tab
      icon={<MapsPersonPin />}
      label="MORE"
      containerElement={<Link to="/more"/>}
    />
  </Tabs>
);

export default NavBar;