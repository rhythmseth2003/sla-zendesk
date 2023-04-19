import React, { useState } from 'react';
import { Well, Paragraph, Title } from '@zendeskgarden/react-notifications'
import Dropd from './AddTargetDropdown';
// import { Autocomplete, Dropdown, Field, Hint, Label, Menu, Item } from '@zendeskgarden/react-dropdowns'
import '../App.css'
const Reply = () => {
  return (
    <Well style={{ position: 'absolute', width: '40%', height: '8%' }}>
      <Title style={{ position: 'absolute', top: '25%' }}>
        Reply metrics
      </Title >
      <div style={{ position: 'absolute', top: '50%' }}>
        Set how quickly you respond to a customer's request
      </div>
      <div style={{ position: 'relative', left: "40%", top: '15%' }}>
        <Dropd />
      </div>
    </Well>
  )
}

export default Reply;