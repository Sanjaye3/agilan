import {useFormik} from "formik";
import * as yup from "yup"
export function Basicform() {


const formValidationSchema = yup.object({
  email:yup.string().min(5,"need a longer email").max(10,"long email!!").required(),
  password:yup.string().min(5,"need a longer password").max(10,"too much password").required()
})
  const formik = useFormik({
    initialValues:{ email : "", password : ""},
    validationSchema: formValidationSchema ,
    onSubmit:(values) => {
      console.log("onSubmit", values);
    }
  });


  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>Form</h1>
      <input id="email" value={formik.values.email} onChange={formik.handleChange} type="email" placeholder='Enter your email' onBlur={formik.handleBlur}/>
      {/* {formik.errors.email}   <br></br> */}
      {formik.touched.email && formik.errors.email? formik.errors.email : ""}<br></br>
      <input id="password" value={formik.values.password}type="password"  onChange={formik.handleChange} placeholder='Enter your password'  onBlur={formik.handleBlur} /> 
      {/* {formik.errors.password}   */}
       {formik.touched.password && formik.errors.password ? formik.errors.password : ""}<br></br>
      <button type="submit">Submit</button>
    </form>
  );
}
