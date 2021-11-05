import { Provider } from "react-redux";
import { Home } from "./pages/Home/Index";
import { GlobalStyle } from './styles/GlobalStyles'

import { useState } from 'react';
import { auth } from './firebase/firebase';

import store from "./state/store";

import { FormContainer, SignOut, NavContent } from './styles/formStyles'
import Logo from './assets/checklist.png'

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('Guest');
  const [loggedIn, setLoggedIn] = useState(false);

  const signIn = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        setMessage('You have successfully logged in!');
        setLoggedIn(true);
        setUsername(auth.user.email);
        resetForm();
      })
      .catch((error) => alert(error.message));
  };

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        setMessage('Your account has been created successfully!');
        setLoggedIn(true);
        setUsername(auth.user.email);
        resetForm();
      })
      .catch((error) => alert(error.message));
  };

  const signOutUser = () => {
    auth
      .signOut()
      .then(() => {
        setMessage('Hello there!');
        setUsername('Guest');
        setLoggedIn(false);
      })
      .catch((error) => alert(error.message));
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Provider store={store}>
      <GlobalStyle />
      {!loggedIn ? (
        <FormContainer>
          <h1>Sign-in</h1>
          <form>
            <div className="emailWrapper">
              <h5>E-mail</h5>
              <input
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="passwordWrapper">
              <h5>Password</h5>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="buttonWrapper">
              <button
                className="login_singInButton"
                onClick={signIn}
                type="submit"
              >
                Sign In
              </button>
              <button className="register_Button" onClick={register}>
                Create your account
              </button>
            </div>
          </form>
        </FormContainer>
      ) : (
        <>
          <nav>
            <NavContent>
              <div>
                <img src={Logo} alt="logo"/>
                <h1>goKanban</h1>
              </div>
              <div>
                <SignOut onClick={signOutUser}>Sign Out</SignOut>
              </div>
            </NavContent>
          </nav>
          <Home />
        </>
      )}
    </Provider>
  );
}

export default App;
