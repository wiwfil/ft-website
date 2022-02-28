import { useEffect, useState } from "react";
import { fire } from "../../firebase/config.js";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import DashBoard from "./DashBoard.js";



const Admin = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setPassword("");
    setEmail("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };
  const handleLogin = async () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        navigate("/dashboard");
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.massage);
            break;
          case "auth/wrong-password":
            setPasswordError(err.massage);
            break;
          default:
            break;
        }
      });


  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/ivalid-email":
            setEmailError(err.massage);
            break;
          case "auth/weak-password":
            setPasswordError(err.massage);
            break;
          default:
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {

    authListener();
  },);

  return (
    <div>
      {user ? (
        <DashBoard handleLogout={handleLogout}  />
      ) : (
        <Login
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
    </div>
  );
};

export default Admin;
