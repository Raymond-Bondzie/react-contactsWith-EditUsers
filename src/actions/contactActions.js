

export const addContact = (newContact) => {
    return{
        type: "ADD_CONTACT",
        payload: newContact
    }
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