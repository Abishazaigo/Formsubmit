import {useForm} from "react-hook-form";
function Form(){
    const {register, watch, handleSubmit, errors} = useForm();
    const onSubmit = (data) => console.log(data);
    const qualification = watch('qualification');
    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" ref={register({ required: "required", maxLength:20})}  className={`form-control ${errors && errors.first_name && "highlight"}`} name="first_name"  placeholder="Enter first name" />
                    <div className="text-danger">
                        {errors.first_name && errors.first_name.type === "required" && (
                        <span role="alert">Please enter the first name</span>
                        )}
                        {errors.first_name && errors.first_name.type === "maxLength" && (
                        <span role="alert">Maximum length exceeded</span>
                        )}
                    </div>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" ref={register({ required: "required", maxLength:20})}  className={`form-control ${errors && errors.last_name && "highlight"}`}  name="last_name" placeholder="Enter last name" />
                    <div className="text-danger">
                    {errors.last_name && errors.last_name.type === "required" && (
                    <span role="alert">Please enter the last name</span>
                    )}
                    {errors.last_name && errors.last_name.type === "maxLength" && (
                        <span role="alert">Maximum length exceeded</span>
                    )}
                    </div>
                </div>
                <div className="form-group">
                    <label>Gender</label>
                    <div className="form-check">
                        <input className="form-check-input" ref={register({ required: "required"})}  type="radio" name="gender" id="male" value="male" />
                        <label className="form-check-label">Male</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" ref={register({ required: "required"})} type="radio" name="gender" id="female" value="female" />
                        <label className="form-check-label">Female</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" ref={register({ required: "required"})} type="radio" name="gender" id="others" value="others" />
                        <label className="form-check-label">Others</label>
                    </div>
                    <div className="text-danger">
                        {errors.gender && errors.gender.type === "required" && (
                        <span role="alert">Please select gender</span>
                        )}
                    </div>
                </div>
                <div className="form-group">
                    <label>Hobbies</label>
                    <div className="form-check">
                        <input className="form-check-input" ref={register({ required: "required"})} type="checkbox" name="hobbies" id="reading" value="reading" />
                        <label className="form-check-label">Reading</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" ref={register({ required: "required"})} type="checkbox" name="hobbies" id="singing" value="singing" />
                        <label className="form-check-label">Singing</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" ref={register({ required: "required"})} type="checkbox" name="hobbies" id="gardening" value="gardening" />
                        <label className="form-check-label">Gardening</label>
                    </div>
                    <div className="text-danger">
                        {errors.hobbies && errors.hobbies.type === "required" && (
                        <span role="alert">Please select hobbies</span>
                        )}
                    </div>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" ref={register({required: "required", pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}})}  className={`form-control ${errors && errors.email && "highlight"}`} name="email" placeholder="Enter email" />
                    <div className="text-danger">
                        {errors.email && errors.email.type === "required" && (
                        <span role="alert">Please enter the email</span>
                        )}
                        {errors.email && errors.email.type === "pattern" && (
                            <span role="alert">Please enter a proper mail id</span>
                        )}
                    </div>
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <textarea ref={register({required:"required"})} className={`form-control ${errors && errors.address && "highlight"}`} name="address" placeholder="Enter address" rows="3" cols="5">
                    </textarea>
                    <div className="text-danger">
                        {errors.address && errors.address.type === "required" && (
                        <span role="alert">Please enter the address</span>
                        )}
                    </div>
                </div>
                <div className="form-group">
                    <div className="dropdown">
                        <label>Qualification</label>  
                        <select ref={register} name="qualification" id="qualification">
                            <option value="">Select</option>
                            <option value="science" >Science</option>
                            <option value="engineer">Engineering</option>
                            <option value="doctor">MBBS</option>
                        </select>
                    </div>
                    <div className="text-danger">
                        {errors.qualification && errors.qualification.type === "required" && (
                        <span role="alert">Please select qualification</span>
                        )}
                    </div>
                </div>
                {qualification && (
                <div className="form-group">
                    <label>Branch</label>
                    <input type="text" ref={register({ required: true})} className="form-control" name="education"  placeholder="Enter qualification details" />
                </div>
                )}
                <button type="submit" className="btn btn-danger">SUBMIT</button>
            </form>
        </div>
      );
}
export default Form;