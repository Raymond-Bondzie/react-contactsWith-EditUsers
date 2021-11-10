

export const addContact = (newContact) => {
    return(dispatch, state, {getFirestore}) => {
        getFirestore()
        .collection("contacts")
        .add(newContact)
        .then(() =>{

        })
    } 
    // return{
    //     type: "ADD_CONTACT",
    //     payload: newContact
    // }
}


export const editContacts = (userId, editedUser) => {
    return{
        type: "EDIT_CONTACT",
        payload: {userId ,editedUser}
    }
}


export const deleteContact = (userId) => {
    return {
        type: "DELETE_CONTACT",
        payload: userId
    }
}


export const getAllContacts = () => {
	return (dispatch, state, { getFirestore }) => {
		getFirestore()
			.collection("contacts")
			.onSnapshot(
				(snapshot) => {
					let contacts = [];
					snapshot.forEach((doc) => {
						contacts.push(doc.data());
					});
					dispatch({ type: "SET_ALL_CONTACTS", payload: contacts });
				},
				(error) => {
                    console.log(error);
                }
			);
	};
};