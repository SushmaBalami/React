import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'
const FormValidation = () => {
  return (
    <Formik 
    initialValues={{firstname:'', lastname:'', email:'', password:'', cpassword:''}}
    validationSchema={Yup.object({
        firstname:Yup.string()
        .max(20,'firstname must be 20 characters or less')
        .required('Firstname is required'),

        lastname:Yup.string()
        .max(20,'lastname must be 20 characters or less')
        .required('lastname is required'),

        email:Yup.string()
        .email('Invalid emaul format, try valid email')
        .required('email is required'),

        password:Yup.string()
        .matches(/(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%?!-_*])[A-Za-z\d@#$%?!-_*]{8,100}/,'Must contain one uppercase, one lowercase, one numeric digit, one special character and must be minimum of 8 characters')
        .required('password is required'),

        cpassword:Yup.string()
        .required('confirm password is required')
        .oneOf([Yup.ref('password'),null],'password and confrim password doesnot match')
    })}
    >
        <div className='col-md-6 offset-md-3 shadow-Ig p-3 mt-4'>
            <Form>
                <div className='mb-3'>
                    <label htmlFor='firstname'>FirstName</label>
                    <Field type='text' id='firstname' name='firstname' className='form-control'/>
                    <ErrorMessage name='firstname'>
                        {msg=><div style={{color:'red'}}>{msg}</div>}
                    </ErrorMessage>
                    

                </div>
                <div className='mb-3'>
                    <label htmlFor='lastname'>LastName</label>
                    <Field type='text' id='lastname' name='lastname' className='form-control'/>
                    <ErrorMessage name='lastname'>
                        {msg=><div style={{color:'red'}}>{msg}</div>}
                    </ErrorMessage>
                    

                </div>
                <div className='mb-3'>
                    <label htmlFor='email'>Email</label>
                    <Field type='email' id='email' name='email' className='form-control'/>
                    <ErrorMessage name='email'>
                        {msg=><div style={{color:'red'}}>{msg}</div>}
                    </ErrorMessage>
                    

                </div>
                <div className='mb-3'>
                    <label htmlFor='password'>Password</label>
                    <Field type='password' id='password' name='password' className='form-control'/>
                    <ErrorMessage name='password'>
                        {msg=><div style={{color:'red'}}>{msg}</div>}
                    </ErrorMessage>
                    

                </div>
                <div className='mb-3'>
                    <label htmlFor='cpassword'>Confirm Password</label>
                    <Field type='password' id='cpassword' name='cpassword' className='form-control'/>
                    <ErrorMessage name='cpassword'>
                        {msg=><div style={{color:'red'}}>{msg}</div>}
                    </ErrorMessage>
                    

                </div>
                <button className='btn btn-primary'>Register</button>
            </Form>

        </div>
    
    </Formik>
  )
}

export default FormValidation