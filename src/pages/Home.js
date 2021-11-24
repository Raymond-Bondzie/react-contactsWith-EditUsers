import React from "react";
import ContactList from "../ContactList";
import ContactsForm from "../ContactsForm";
import { signOut } from "../actions/authActions";
import {connect} from 'react-redux'
import { Container, Row , Col} from 'react-bootstrap';




function Home(props) {
    return(
        <>
        <button onClick={() => props.signOut()}>SignOut</button>
         <Container>
      <Row>
        <Col md={4} className="bgOFcol4">
        <ContactsForm/>
        </Col>
        <Col>    
        <ContactList /* deleteUser={deleteUser} editUser={editUser}*/ />
        </Col>
      </Row>
    </Container>

        </>
    )
}

const mapDispatchToProps = {
    signOut
}


export default connect(null, mapDispatchToProps) (Home) ;