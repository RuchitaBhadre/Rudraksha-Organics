import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Contact from './components/contact';


function ControlledTabsExample() {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        
      </Tab>
      <Tab eventKey="profile" title="Profile">
        
      </Tab>
      <Tab eventKey="contact" title="Contact" >
      <Contact />
      </Tab>
    </Tabs>
  );
}

export default ControlledTabsExample;