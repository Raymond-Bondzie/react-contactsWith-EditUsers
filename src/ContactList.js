import React from 'react'
import User from './User';
import {connect} from 'react-redux'




function ContactList(props){
        return(

            <>
                
                {props.contacts.map((user , index) =>{
                       return(
                           <div key={index}>
                        <User
                        user={user}
                        key={user.id}
                        deleteUser={props.deleteUser}
                        editUser={props.editUser}
                      />
                      </div>
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