import React from 'react';

import components from './components';
import Item from './components/Item';

export default function App() {
  return (
    <div className="app">
      {components.map((Cp) => (
        <Item desc={Cp.desc}>
          <Cp.component key={Cp.name}></Cp.component>
        </Item>
      ))}
    </div>
  );
}
