import {useForm} from "react-hook-form";
function Form(){
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => alert(JSON.stringify(data));
    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-group">
            <label for="firstName">First Name</label>
            <input type="text" ref={register} name="firstName"  placeholder="Enter first name" />
        </div>
        <div class="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" ref={register} name="lastName" placeholder="Enter last name" />
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" ref={register} name="email" placeholder="Enter email" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </>
      );
}
export default Form;