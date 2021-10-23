import React,{useState} from 'react'
import { Button, Modal} from "react-bootstrap";
import EditContact from './EditContact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { deleteContact } from './actions/contactActions';
import {connect} from 'react-redux'



function User(props) {
    const user = props.user

    const [showModal , setShowModal] = useState(false)

    function toggleModal() {
        setShowModal(!showModal);
    }

    
    
    return (
        <>
          <h1>{user.name}</h1>
          <h2>{user.phone}</h2>
          <h3>{user.location}</h3>
        <Button variant="primary" onClick={() => toggleModal()}>
        Edit
        </Button>

      <Button variant="danger" onClick={() => 
        props.deleteContact(user.id)}>
        Delete
      </Button>

      <hr/>

        
        

      <Modal show={showModal} onHide={() => toggleModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Make Your change</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/*Component to edit user*/}
          <EditContact
            user={user}
            toggleModal={toggleModal}
          />
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={() => toggleModal()}>
            Discard change
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    );
}

const mapDispatchToProps = {
  deleteContact,
}

export default connect(null, mapDispatchToProps) (User);