import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
}

    from 'mdb-react-ui-kit';

function RegisterForm() {

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

                        <MDBInput wrapperClass='mb-4' label='Full name' id='form1' type='fullname' />
                        <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' />
                        <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' />
                        <MDBInput wrapperClass='mb-4' label='Confirm Password' id='form2' type='ConfirmPassword' />



                        <div className="text-center pt-1 mb-5 pb-1">
                            <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>
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