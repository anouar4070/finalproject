import { useFormik } from 'formik'
import React from 'react'



const Register = () => {
function submitRegister(){
  console.log('submit')
}
function validate(values) {
  let errors= {}
  if (!values.name){
    errors.name = 'Name is required'
  }
  else if(values.name.length < 3) {
    errors.name = 'Name must be at least 3 characters'
  }
  console.log(values)
}

  let formik= useFormik({
    initialValues: {
      name: 'anouar',
      phone:'20',
      email: 'g.anouar@yahoo.com',
      password: 'ab',
      rePassword: 'ab'
    },validate,
    onSubmit: submitRegister
  })

  return (
    <div className='w-75 mx-auto py-5'>
      <h3>Register Now</h3>
    <form onSubmit={formik.handleSubmit}>

      <label htmlFor="name">Name</label>
<input type="text" name='name' value={formik.values.name} className='form-control' onChange={formik.handleChange} onBlur={formik.handleBlur} id='name'/>

<label htmlFor="phone">Phone</label>
<input type="tel" name='phone' value={formik.values.phone} className='form-control' onChange={formik.handleChange} onBlur={formik.handleBlur} id='phone'/>

<label htmlFor="email">email</label>
<input type="email" name='email' value={formik.values.email} className='form-control' onChange={formik.handleChange} onBlur={formik.handleBlur} id='email'/>

<label htmlFor="password">password</label>
<input type="password" name='password' value={formik.values.password} className='form-control' onChange={formik.handleChange} onBlur={formik.handleBlur} id='password'/>

<label htmlFor="repassword">Repassword</label>
<input type="password" name='repassword' value={formik.values.repassword} className='form-control' onChange={formik.handleChange} onBlur={formik.handleBlur} id='repassword'/>

<button type='submit' className='btn bg-main text-white mt-2'>Register</button>
    </form>
    </div>
  )
}

export default Register