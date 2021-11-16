const initialState= {
    contacts: []
}

const contactReducers = (state= initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT": 
        // console.log(action.payload);
        return{...state, contacts: [...state.contacts, action.payload]};


        case "EDIT_CONTACT" :
            // console.log(action.payload);
            const editedContacts = state.contacts.map((user) => {
                if(user.id === action.payload.userId) {
                    return action.payload.editedContacts;
                }
                return user;
            });

            return {...state, contacts: editedContacts};

        case "DELETE_CONTACT": 
            const deleteContact = state.contacts.filter(
                (user) => user.id !== action.payload
            );
            return{...state, contacts: deleteContact};


            case "SET_ALL_CONTACTS":
                return{contacts : action.payload};

        default:
        return state ;

    }
}

export default contactReducers;