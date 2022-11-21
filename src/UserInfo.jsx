import React from 'react';
import React, { useContext } from 'react';

import { AppContext } from './AppContext';

// GORSZA WERSJA JAK MOŻNA WYKORZYSTAĆ
// class UserInfo extends PureComponent {
//   render() {
//     return (
//       <AppContext.Consumer>
//         {
//           ({isUserLogged}) => (
//             <div>
//               <p>Użytkownik jest { isUserLogged ? 'zalogowany' : 'niezalogowany' }</p>
//             </div>
//           )
//         }
//       </AppContext.Consumer>
//     );
//   }
// }

// LEPSZA WERSJA
const UserInfo = () => {
  const { isUserLogged } = useContext(AppContext);

  const userLoggedInfo = isUserLogged ? 'zalogowany' : 'niezalogowany';

  return (
    <div>
      <p>Użytkownik jest {userLoggedInfo}</p>
    </div>
  );
};

export default UserInfo;
