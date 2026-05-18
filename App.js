import React from 'react';

import MainNavigator from './src/navigation/MainNavigator';

import AppProvider from './src/context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <MainNavigator />
    </AppProvider>
  );
};

export default App;