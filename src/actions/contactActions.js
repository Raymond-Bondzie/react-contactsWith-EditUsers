

export const addContact = (newContact) => {
    return(dispatch, state, {getFirestore}) => {
           getFirestore()
           .collection("contacts")
           .add({...newContact, timestamp: getFirestore().FieldValue.serverTimestamp()})
           .then(() => {});



        // getFirestore()
        // .collection("contacts")
        // .add(newContact)
        // .then(() =>{

        // })
    } 
    // return{
    //     type: "ADD_CONTACT",
    //     payload: newContact
    // }
}


export const editContacts = (userId, editedContacts) => {
    return(dispatch, state, {getFirestore}) => {
        getFirestore()
        .collection("contacts")
        .doc(userId)
        .update(editedContacts)
        .then(() => {});
    }
    // return{
    //     type: "EDIT_CONTACT",
    //     payload: {userId ,editedUser}
    // }
}


export const deleteContact = (userId) => {
    return(dispatch, state, {getFirestore} ) => {
        getFirestore()
        .collection("contacts")
        .doc(userId)
        .delete()
        .then(() => {})
    };
    // return {
    //     type: "DELETE_CONTACT",
    //     payload: userId
    // }
}


export const getAllContacts = () => {
	return (dispatch, state, { getFirestore }) => {
		getFirestore()
			.collection("contacts")
            .orderBy("timestamp", "desc")
			.onSnapshot(
				(snapshot) => {
					let contacts = [];
					snapshot.forEach((doc) => {
						contacts.push({...doc.data(), id: doc.id});
					});
					dispatch({ type: "SET_ALL_CONTACTS", payload: contacts });
				},
				(error) => {
                    console.log(error);
                }
			);
	};
};