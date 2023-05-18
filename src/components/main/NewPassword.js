import React from 'react'

const NewPassword = () => {
    return (
        <>
            <div className="card text-center mt-5 mx-auto " style={{ width: 500, height: 400 }}>
                <div className="card-header h5 text-white bg-info">New Password</div>
                <div className="card-body  px-5">
                    <p className="card-text py-3 ">

                        Your password must be at least 6 characters and should include a combination of numbers, letters and special characters (!$@%).
                    </p>

                    <div className="mb-4">
                        {/* <label for="email" className="form-label ">Email</label> */}
                        <input type="email" id="email" className="form-control py-2" name="email" placeholder="Enter Your new password"
                            required="" />
                    </div>
                    <div className="mb-4">
                        {/* <label for="email" className="form-label ">Email</label> */}
                        <input type="email" id="email" className="form-control py-2" name="email" placeholder="Enter Your  New password again"
                            required="" />
                    </div>

                    <a href="#" className="btn btn-info w-100">
                        Reset Password
                    </a>

                </div>
            </div>
        </>
    )
}

export default NewPassword