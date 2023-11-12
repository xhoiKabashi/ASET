import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
}

    from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const RegisterForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <MDBContainer className="my-5 gradient-form">

            <MDBRow>



                <MDBCol col='6' className="mb-5 image">
                    <div className="d-flex flex-column  justify-content-center h-100 mb-4">

                        <div className="text-white px-3 py-4 p-md-5 mx-md-4 bus shadow-lg">

                        </div>

                    </div>

                </MDBCol>

                <MDBCol col='6' className="mb-5">
                    <div className="d-flex flex-column col1">

                        <div className="text-center mt-3 p-2">
                            <img src="./ImagesLoginScreen/loginn.jpeg"
                                style={{ width: '185px' }} alt="logo" />
                            <h4 className="mt-1 mb-5 pb-1 mt-3  pb-1 fst-italic fw-bold">Albania South East Terminal</h4>
                        </div>

                        <p className='fs-4'>Register a new account:</p>

                        <Form onSubmit={handleSubmit}>

                            <Form.Group controlId="formName" className="mb-3">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </Form.Group>


                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your Email Address"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formPassword" className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter your password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formconfirmPassword" className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter your password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="mb-4 w-100">
                                Sign Up
                            </Button>
                        </Form>



                        <div className="text-center pt-1 mb-5 pb-1">
                            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                                <p className="mb-0" >Already have an account?</p>
                                <MDBBtn outline className='mx-2' color='danger'>
                                    Sign in
                                </MDBBtn>
                            </div>
                        </div>



                        <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">

                        </div>

                    </div>

                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default RegisterForm;