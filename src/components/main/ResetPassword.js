import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
// import { useNavigate } from "react-router-dom";
import app_config from "../../config";

const ResetPassword = () => {
    
    const url = app_config.api_url;

    const [email,setEmail] =useState("");

    const [message, setMessage] = useState("");
    
    console.log(email);


    const setVal = (e) => {
        setEmail(e.target.value)
    }

   

    const sendLink = async(e)=>{
        e.preventDefault();
        //Api call
        const res = await fetch(url+ "/user/sendpasswordlink" ,{
            method :"POST",
            headers:{
                "Content-Type":"application/json",

            },body:JSON.stringify({
                email
            })
        });

        const data =await res.json();
        
        if(data.status ==201){
           setEmail("");
           setMessage(true)
        }else{
            toast.error("Invalid User",{
                position: "top-center"
            })
        }
    }
    

    return (
        <>
            <div className="card text-center mt-5 mx-auto " style={{ width: 500 }}>
                <div className="card-header h5 text-white bg-info">New Password</div>
                <div className="card-body  px-5">
                    <p className="card-text py-3 ">
                        Enter your email address and we'll send you an email with instructions to
                        reset your password.
                    </p>
                    {message ?<p style ={{color:"green",fontWeight :"bold"}}>Password Reset link send Successfully in your email</p>:""}
                    <div className="mb-4">
                        {/* <label for="email" className="form-label ">Email</label> */}
                        <input type="email" id="email" className="form-control py-2" name="email" value={email} onChange={setVal} placeholder="Enter Your Email"
                            required=""  />
                    </div>

                    {/* <button  href="#" className="btn btn-info w-100"  onClick={() => navigate("/main/newpassword/" )}>
                       Send Login Link
                    </button> */}
                    <button  href="#" className="btn btn-info w-100" onClick ={sendLink} >
                       Send Login Link
                    </button>
                    <div className="d-flex justify-content-between mt-4 py-4">
                        <a className="" href="#">
                            Login
                        </a>
                        <a className="" href="#">
                            Register
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ResetPassword