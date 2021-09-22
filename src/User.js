import React,{useState} from 'react'
import { Button, Modal} from "react-bootstrap";
import EditContact from './EditContact';
import 'bootstrap/dist/css/bootstrap.min.css';



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

      <Button variant="danger" onClick={() => props.deleteUser(user.id)}>
        Delete
      </Button>

        
        

      <Modal show={showModal} onHide={() => toggleModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Make Your change</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/*Component to edit user*/}
          <EditContact
            user={user}
            editUser={props.editUser}
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

export default User;