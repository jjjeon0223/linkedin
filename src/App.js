import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux"
import {login, logout, selectUser} from './features/userSlice'
import './App.css';
import Login from './Login';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import exports from './firebase';
import Widgets from './Widgets';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    exports.auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL
          })
        )
      } else {
        //user is logged out
        dispatch(logout());
      }
    })
  })

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login/>
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
      </div>
      )}
      
    </div>
  );
}

export default App;
