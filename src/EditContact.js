import React,{useState} from 'react'
import {Form, Button} from 'react-bootstrap'


function EditContact(props) {
    const [name , setName] = useState(props.user.name);
    const [phone , setPhone] = useState(props.user.phone);
    const [location , setLocation] = useState(props.user.location);


    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };
    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };


    function handleSubmit() {
        let editedUser = {
            name: name,
            phone: phone,
            location: location,
             
            id: props.user.id
        };

        props.editUser(editedUser, props.user.id);
        props.toggleModal();
    }

    return (
        <Form>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => handleNameChange(e)}
        />
      </Form.Group>
<br/>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          value={phone}
          onChange={(e) => handlePhoneChange(e)}
        />
        </Form.Group>
<br/>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => handleLocationChange(e)}
        />
<br/>
    <Button onClick={() => handleSubmit()}>Save change</Button>
    </Form.Group>

   </Form>
    );
}


export default EditContact;