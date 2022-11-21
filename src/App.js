import React from 'react';
import React, { useState } from 'react';

import Button from './Button';
import UserInfo from './UserInfo';

import AppProvider from './AppContext';

const App = () => {
  return (
    <div>
      <AppProvider>
        <UserInfo />
        <Button />
      </AppProvider>
    </div>
  );
};

export default App;
