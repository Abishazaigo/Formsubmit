import {useForm} from "react-hook-form";
function Form(){
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = (data) => alert(JSON.stringify(data));
    return (
        <div class="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-group">
                    <label for="first_name">First Name</label>
                    <input type="text" ref={register({ required: true})}  aria-invalid={errors.first_name ? "true" : "false"} class="form-control" name="first_name"  placeholder="Enter first name" />
                    {errors.first_name && errors.first_name.type === "required" && (
                    <span role="alert">Please enter the first name</span>
                    )}
                </div>
                <div class="form-group">
                    <label for="last_name">Last Name</label>
                    <input type="text" ref={register({ required: true})}  aria-invalid={errors.last_name ? "true" : "false"} class="form-control" name="last_name" placeholder="Enter last name" />
                    {errors.flast_name && errors.last_name.type === "required" && (
                    <span role="alert">Please enter the first name</span>
                    )}
                </div>
                <div class="form-group">
                    <label>Gender</label>
                    <div class="form-check">
                        <input class="form-check-input" ref={register({ required: true})} type="radio" name="gender" id="male" value="male" checked/>
                        <label class="form-check-label" for="gender">Male</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" ref={register({ required: true})} type="radio" name="gender" id="female" value="female" />
                        <label class="form-check-label" for="gender">Female</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" ref={register({ required: true})} type="radio" name="gender" id="others" value="others" />
                        <label class="form-check-label" for="gender">Others</label>
                    </div>
                </div>
                <div class="form-group">
                    <label>Hobbies</label>
                    <div class="form-check">
                        <input class="form-check-input" ref={register({ required: true})} type="checkbox" name="reading" id="reading" value="reading" />
                        <label class="form-check-label" for="reading">Reading</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" ref={register({ required: true})} type="checkbox" name="singing" id="singing" value="singing" />
                        <label class="form-check-label" for="singing">Singing</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" ref={register({ required: true})} type="checkbox" name="gardening" id="gardening" value="gardening" />
                        <label class="form-check-label" for="gardening">Gardening</label>
                    </div>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" ref={register} class="form-control" name="email" placeholder="Enter email" />
                </div>
                <div class="form-group">
                    <label for="address">Address</label>
                    <textarea ref={register} class="form-control" name="address" placeholder="Enter address" rows="3" cols="5">
                    </textarea>
                </div>
                <div class="form-group">
                    <div class="dropdown">
                        <label>Qualification</label>  
                        <select ref={register} name="qual" id="qual">
                            <option value="">Select</option>
                            <option value="science">Science</option>
                            <option value="engineer">Engineering</option>
                            <option value="doctor">MBBS</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                    <input type="text" ref={register({ required: true})} class="form-control" name="edu"  placeholder="Enter qualification" />
                </div>
                <button type="submit" class="btn btn-danger">SUBMIT</button>
            </form>
        </div>
      );
}
export default Form;