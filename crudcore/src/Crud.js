import axios from "axios";
import React, { useState, useEffect, Fragment } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Crud = () => {

    const [show, setShow] = useState(false);

    const handleClose =() => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [isActive, setIsActive] = useState(0);

    const [editID, setEditID] = useState('');
    const [editName, setEditName] = useState('');
    const [editLastname, setEditLastname] = useState('');
    const [editUsername, setEditUsername] = useState('');
    const [editEmail, setEditEmail] = useState('');
    const [isEditActive, setIsEditActive] = useState(0);

    

    const empdata = [
        {
            id : 1,
            
            Name : 'Alejandra',

            LastName : 'Linares',

            Username : 'ale478',

            Email : "ale@gmail.com",

            IdStatus : 1

        },
        {
            id : 2,
            
            Name : 'Lilu',

            LastName : 'Molina',

            Username : 'molither',

            Email : "lilu@gmail.com",

            IdStatus : 1

        },
        {
            id : 3,
            
            Name : 'Anna',

            LastName : 'Linares',

            Username : 'anni03',

            Email : "anna@gmail.com",

            IdStatus : 1

        }
    ]
    
    const [data, setData] = useState([]);

    useEffect(()=>{
        setData(empdata);
    },[])

    const handleEdit = (e, id) => {
        handleShow();
    }

    const handleDelete = (e, id) => {
        e.preventDefault();
        if (window.confirm("Are you sure to delete this record!") == true) {
                
        } 
    }

    const handleUpdate = () => {

    }

    return (
        <Fragment>
            <Row>
                <Col>
                    <input type="text" name="name" className="form-control"
                        placeholder="Enter Name"
                        value={name} onChange={(e)=> setName(e.target.value)}
                    />
                </Col>
                <Col>
                    <input type="text" className="form-control"
                        placeholder="Enter Last name"
                        value={lastname} onChange={(e)=> setLastname(e.target.value)}
                     />
                </Col>
                <Col>
                    <input type="text" className="form-control"
                        placeholder="Enter Username"
                        value={username} onChange={(e)=> setUsername(e.target.value)}
                     />
                </Col>
                <Col>
                    <input type="text" className="form-control"
                        placeholder="Enter Email"
                        value={email} onChange={(e)=> setEmail(e.target.value)}
                     />
                </Col>
                <Col>
                    <input type="checkbox" id="isActive"
                    checked={isActive === 1 ? true : false}
                    onChange={(e) => setIsActive(e)} value={isActive}
                    />
                    &nbsp; <label htmlFor="isActive">IsActive</label><br></br>
                </Col>
                <Col md={1}>
                    <button className="btn btn-primary">
                        Submit
                    </button>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col md={12}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Last name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>IdStatus</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data && data.length > 0 ?
                                    data.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.Name}</td>
                                                <td>{item.LastName}</td>
                                                <td>{item.Username}</td>
                                                <td>{item.Email}</td>
                                                <td>{item.IdStatus}</td>
                                                <td>
                                                    <button className="btn" onClick={(e) => handleEdit(e, item.id)}>Edit</button> |
                                                    <button className="btn" onClick={(e) => handleDelete(e, item.id)}>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    :
                                    "Loading..."
                            }
                        </tbody>
                    </Table></Col>
            </Row>

            <br></br>
            <br></br>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Row>
                <Col>
                    <input type="text" name="name" className="form-control"
                        placeholder="Enter Name"
                        value={editName} onChange={(e)=> setEditName(e.target.value)}
                    />
                </Col>
                <Col>
                    <input type="text" className="form-control"
                        placeholder="Enter Last name"
                        value={editLastname} onChange={(e)=> setEditLastname(e.target.value)}
                     />
                </Col>
                <Col>
                    <input type="text" className="form-control"
                        placeholder="Enter Username"
                        value={editUsername} onChange={(e)=> setEditUsername(e.target.value)}
                     />
                </Col>
                <Col>
                    <input type="text" className="form-control"
                        placeholder="Enter Email"
                        value={editEmail} onChange={(e)=> setEditEmail(e.target.value)}
                     />
                </Col>
                <Col>
                    <input type="checkbox" id="isActive"
                    checked={isEditActive === 1 ? true : false}
                    onChange={(e) => setIsEditActive(e)} value={isEditActive}
                    />
                    &nbsp; <label htmlFor="isActive">IsActive</label><br></br>

                </Col>
            </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>

    )

}

export default Crud;