import React,{useState} from 'react';
import ContactsForm from './ContactsForm';
import ContactList from './ContactList';
import { Container, Row , Col} from 'react-bootstrap';



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
    <Container>
      <Row>
        <Col md={4} className="bgOFcol4">
        <ContactsForm addContact={addContact}/>
        </Col>
        <Col>    
        <ContactList contacts={contacts} editUser={editUser}/>
        </Col>
      </Row>
    </Container>

    </>
  );
}

export default App;
