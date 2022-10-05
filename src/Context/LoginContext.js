import { useEffect, useState } from "react";
import React from "react";
import {
  getFirestore,
  query,
  where,
  getDocs,
  collection  
} from "firebase/firestore";

const LoginContext = React.createContext();

const LoginProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [isLog, setIsLog] = useState(false);
  const [pass, setPass] = useState();

  const getUser = (email) => {
    const db = getFirestore();

    const q = query(collection(db, "users"), where("email", "==", email));
    getDocs(q).then((snapshot) => {
      if (snapshot.size !== 0) {
        setUser(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        if (pass) {
            setTimeout(() => {
              validate();
            }, 3000)
          }else{console.log("escribi algo gil")}
      }else{console.log("no existe el user")}
    });
    
  };
  const validate = () => {
    if (user[0].password === pass) {
      setIsLog(true);
      window.localStorage.setItem('hash', true)
    } else {
      console.log("ingresa la contraseña gil");
    }
  };
  useEffect(() => {
    window.localStorage.setItem('hash', false);
  },[user])
  return (
    <LoginContext.Provider value={{ user, getUser, validate, setPass, isLog, user }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginProvider, LoginContext };
