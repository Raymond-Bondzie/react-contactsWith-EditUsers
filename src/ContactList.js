import React from 'react'
import User from './User';
import {connect} from 'react-redux'




function ContactList(props){
        return(

            <>
                
                {props.contacts.map((user) =>{
                       return(
                        <User
                        user={user}
                        key={user.id}
                        deleteUser={props.deleteUser}
                        editUser={props.editUser}
                      />
                       );
                   })}
            </>

        );
}

const mapStateToprops = (state) => {
    return {
        contacts: state.contacts,
    }
}

export default connect(mapStateToprops)  (ContactList);