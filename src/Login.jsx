import {useForm} from 'react-hook-form';
import {useMutation} from 'react-query';
import {useState} from 'react';
import axios from 'axios';
import './Web.css';
function Login(){
    const {register, handleSubmit, errors} = useForm();
    const [response,setResponse]=useState();
    const mutation=useMutation(async(data) => {
        try{
            const login={login:"data.name",password:"data.password"}
            const response=await axios .post("http://devapi.zaicrm.com/api/auth/login",login);
            console.log(response);
            setResponse(response);
        }catch(err){
            console.log(err.response);
            setResponse(err.response);
        }
    });

    
    const onSubmit = (data) => mutation.mutate(data);
    return(
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>User Name</label>
                    <input type="text" className={`form-control ${errors && errors.name && "highlight"} ${response && response.data && response.data.data && response.data.data.login && "highlight"}`} ref={register({ required: "required", maxLength:20})} name="name" id="name"/>
                    <div className="text-danger">
                        {errors.name && errors.name.type === "required" && (
                        <span role="alert">Please enter the name</span>
                        )}
                        {errors.name && errors.name.type === "maxLength" && (
                        <span role="alert">Maximum length exceeded</span>
                        )}
                        {response && response.data && response.data.data && response.data.data.login &&<p className="text-danger"> {response.data.data.login}</p>}
                    </div>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className={`form-control ${errors && errors.password && "highlight"}${response && response.data && response.data.data && response.data.data.password && "highlight"}`} ref={register({ required: "required", minLength:8})} name="password" id="password"/>
                    <div className="text-danger">
                        {errors.password && errors.password.type === "required" && (
                        <span role="alert">Please enter the password</span>
                        )}
                        {errors.password && errors.password.type === "minLength" && (
                        <span role="alert">Password should be of 8 characters</span>
                        )}
                        {response && response.data && response.data.data && response.data.data.password&&<p className="text-danger">{response.data.data.password}</p>}
                    </div>
                </div>
                <button type="submit" className="btn btn-danger">LOG IN</button>
            </form>
        </div>
    )
}
export default Login;