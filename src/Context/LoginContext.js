import { useState } from "react";
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
            validate();
          }else{console.log("escribi algo gil")}
      }else{console.log("no existe el user")}
    });
    
  };
  const validate = () => {
    if (user[0].password === pass) {
      console.log("wellcome gil");
    } else {
      console.log("ingresa la contraseña gil");
    }
  };
  return (
    <LoginContext.Provider value={{ user, getUser, validate, setPass }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginProvider, LoginContext };
