import React,{useState} from 'react';
import ContactsForm from './ContactsForm';
import ContactList from './ContactList';



function App() {
  const [contacts, setContacts] = useState([]);

  function addContact(user) {
       setContacts([...contacts, user]);
  }

  function editUser(newDetails , userId){
       const u = contacts.map((user) => {
         if (userId === user.id) {
           return newDetails;
         } else{
           return user;
         }
       });
       setContacts(u);
  }
  return (
    <>
    
    
      
        <ContactsForm addContact={addContact}/>   
        <ContactList contacts={contacts} editUser={editUser}/>
        
      
    

    </>
  );
}

export default App;
