import React from 'react';
import {
    MDBInput, MDBRadio,
} from "mdb-react-ui-kit";
import { NavLink, useParams } from 'react-router-dom';
import { Formik } from 'formik';

const EditProfile = () => {

    const { id } = useParams();
    console.log(id);

    


    return (
        
            <div className="edit-user-profile-top ">
                <div className='container'>

                    <div className='card edit-profile-card '>
                        <h1>EditProfile</h1>
                        <form>
                            <div className="form-row">
                                <div className="col-md-12">
                                    <div className="md-form form-group">
                                        <label htmlFor="inputEmail4MD">UserName</label>
                                        <input
                                            type=""
                                            className="form-control"
                                            placeholder="Username"
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="md-form form-group">
                                        <label htmlFor="inputEmail4MD">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form form-group">
                                        <label className='fw-bold mb-0 me-4'>Gender :</label>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                id="defaultInline1"
                                                name="inlineDefaultRadiosExample"
                                            />
                                            <label className="custom-control-label" htmlFor="defaultInline1">
                                                Male
                                            </label>
                                        </div>
                                        {/* Default inline 2*/}
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                id="defaultInline2"
                                                name="inlineDefaultRadiosExample"
                                            />
                                            <label className="custom-control-label" htmlFor="defaultInline2">
                                                Female
                                            </label>
                                        </div>
                                        {/* Default inline 3*/}
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                id="defaultInline3"
                                                name="inlineDefaultRadiosExample"
                                            />
                                            <label className="custom-control-label" htmlFor="defaultInline3">
                                                Other
                                            </label>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form form-group">
                                        <label htmlFor="inputAddressMD">Date of Birth</label>
                                        <MDBInput
                                            wrapperClass="mb-4"
                                            label="DOB"
                                            size="lg"
                                            type="date"
                                            id="DOB"
                                            placeholder='DOB'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form form-group">
                                        <label htmlFor="inputAddressMD">Mobile number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Mobile number"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form form-group">
                                        <label htmlFor="inputAddressMD">Country</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Country or region "
                                        />
                                    </div>
                                </div>
                            </div>
                            <hr>
                            </hr>
                            <div className="row ">
                                <div className="col-md-6">
                                    <button type="submit" className="btn btn-light btn-md">
                                        Cancel
                                    </button>
                                    <button type="submit" className="btn btn-primary btn-md">
                                        Save changes
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default EditProfile