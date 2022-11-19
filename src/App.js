import React, { PureComponent } from 'react';
import UserInfo from './UserInfo';
import { AppContext, defaultObject } from './AppContext';

class App extends PureComponent {
  state = {
    isUserLogged: defaultObject.isUserLogged,
  };

  render() {
    return (
      <div>
        <AppContext.Provider
          value={{
            isUserLogged: this.state.isUserLogged,
            toggleLoggedState: this.handleToggleStateIsLogged,
          }}
        >
          <UserInfo />
        </AppContext.Provider>
      </div>
    );
  }
  handleToggleStateIsLogged = () =>
    this.state((prevState) => {
      isUserLogged: !prevState.isUserLogged;
    });
}

export default App;
