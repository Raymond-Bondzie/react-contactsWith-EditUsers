import React from 'react'
import User from './User';




function ContactList(props){
        return(

            <>
                
                {props.contacts.map((user) =>{
                       return(
                        <User
                        user={user}
                        key={user.id}
                        editUser={props.editUser}
                      />
                       );
                   })}
            </>

        );
}

export default ContactList;