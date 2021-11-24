export const createUserWithEmailAndPassword = (email, password) => {
    return(dispatch, state, {getFirebase}) =>{
        getFirebase()
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
            console.log(user);
        })
        .catch((err) => {
            console.log(err);
        });
    };
};



export const login = (email, password) => {
    return(dispatch, state, {getFirebase}) => {
        getFirebase()
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
            console.log(user);
        })
        .catch((err) => {
            console.log(err);
        });
    };
};





export const signInWithGoogle = () => {
    return (dispatch, state, { getFirebase }) => {
      let firebase = getFirebase();
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((user) => {
          console.log(user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };



export const signOut = (email, password) => {
     return(dispatch, state, {getFirebase}) => {
         getFirebase()
         .auth()
         .signOut()
         .then(() => {
             console.log("Sign-out successful.");
         })
         .catch((error) => {
             console.log(error);
         } )
     }
}

